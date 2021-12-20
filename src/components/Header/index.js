import React from "react";
import * as C from "./styles";

import { Button } from "../../components/Button";

import Logo from "../../assets/logo.svg";

export const Header = ({ noButton }) => {
  return (
    <C.Header>
      <C.Logo src={Logo} />
      <C.NavBar>
        <C.NavBarLink href="#">HOME</C.NavBarLink>
        <C.NavBarLink href="#">FEATURES</C.NavBarLink>
        <C.NavBarLink href="#">TEMPLATES</C.NavBarLink>
        <C.NavBarLink href="#">ABOUT US</C.NavBarLink>
        <C.NavBarLink href="#">SUPORT</C.NavBarLink>
      </C.NavBar>
      {noButton ? "" : <Button none>GET STARTED</Button>}
    </C.Header>
  );
};
