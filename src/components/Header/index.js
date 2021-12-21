import React from "react";
import * as C from "./styles";
import { useHistory } from "react-router-dom";

import { Button } from "../../components/Button";

import Logo from "../../assets/logo.svg";

export const Header = ({ noButton }) => {
  const history = useHistory();

  const handleCreatePage = () => {
    history.push("/step1");
  };

  return (
    <C.Header>
      <C.Logo src={Logo} />
      <C.NavBar>
        <C.NavBarLink to={"/"}>HOME</C.NavBarLink>
        <C.NavBarLink href="#">FEATURES</C.NavBarLink>
        <C.NavBarLink href="#">TEMPLATES</C.NavBarLink>
        <C.NavBarLink href="#">ABOUT US</C.NavBarLink>
        <C.NavBarLink href="#">SUPORT</C.NavBarLink>
      </C.NavBar>
      {noButton ? (
        ""
      ) : (
        <Button onClick={handleCreatePage} none>
          GET STARTED
        </Button>
      )}
    </C.Header>
  );
};
