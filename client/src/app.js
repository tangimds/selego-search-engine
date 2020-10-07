const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Sentry from "@sentry/browser";

import { setUser } from "./redux/auth/actions";

import Auth from "./scenes/auth";
import Search from "./scenes/search";

import Header from "./components/header";

import api from "./services/api";

import "./index.less";

if (process.env.NODE_ENV === "production") {
  Sentry.init({ dsn: "SENTRY_URL", environment: "app" });
}

export default () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth.user);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get("/user/signin_token");
        if (!res.ok || !res.user) return setLoading(false);
        if (res.token) api.setToken(res.token);

        dispatch(setUser(res.user));
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Router>
        <div className="main">
          <div style={{ height: "100%" }}>
            {user && <Header />}
            <Switch>
              <Redirect exact from="/" to="/auth" />
              <Route path="/auth" component={Auth} />
              <RestrictedRoute path="/search" component={Search} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  const user = useSelector((state) => state.Auth.user);
  return <Route {...rest} render={(props) => (user ? <Component {...props} /> : <Redirect to={{ pathname: "/auth" }} />)} />;
};
