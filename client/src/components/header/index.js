import React from "react";
import styled from "styled-components";
import User from "./user";
import LoadingButton from "../LoadingButton";

export default () => {
  return (
    <div style={{ height: 70 }}>
      <Header>
        <LoadingButton color="secondary" href="/auth">
          Log Out
        </LoadingButton>
      </Header>
    </div>
  );
};

const Header = styled.div`
  padding: 15px;
  background-color: #284fa2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
`;
