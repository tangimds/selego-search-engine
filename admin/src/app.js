import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { setUser } from "./redux/auth/actions";

import Auth from "./scenes/auth";
import User from "./scenes/user";
import Drawer from "./components/drawer";

import api from "./services/api";

import "./index.less";

export default () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth.user);

  useEffect(() => {
    async function fetchData() {
      try {
        const { user, token } = await api.post(`/user/signin`, { email: "se.legoff@gmail.com", password: "addicto123&" });

        // const { user, token } = await api.get("/user/signin_token");
        if (token) api.setToken(token);
        if (!user) return setLoading(false);

        dispatch(setUser(user));
      } catch (e) {
        localStorage.removeItem("token");
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
          {user && <Drawer />}
          <div style={{ height: "100%", marginLeft: 160 }}>
            <Switch>
              <Route path="/auth" component={Auth} />
              <RestrictedRoute path="/" component={User} />
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