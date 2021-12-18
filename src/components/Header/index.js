import React from "react";
import * as C from "./styles";

import { Button } from "../../components/Button";

import Logo from "../../assets/logo.svg";

export const Header = () => {
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
      <Button>GET STARTED</Button>
      {/* <C.ProfileButton>
        <C.ProfileImg>
          <C.ProfileSVG
            width="30.182"
            height="30.194"
            viewBox="0 0 30.182 30.194"
          >
            <path
              id="Icon_material-account-circle"
              data-name="Icon material-account-circle"
              d="M18.091,3A15.1,15.1,0,1,0,33.183,18.1,15.1,15.1,0,0,0,18.091,3Zm0,4.529a4.529,4.529,0,1,1-4.527,4.529A4.522,4.522,0,0,1,18.091,7.529Zm0,21.438a10.865,10.865,0,0,1-9.055-4.861c.045-3,6.037-4.65,9.055-4.65,3,0,9.009,1.646,9.055,4.65A10.865,10.865,0,0,1,18.091,28.967Z"
              transform="translate(-3 -3)"
              fill="#5a5a5a"
            />
          </C.ProfileSVG>
        </C.ProfileImg>
        <C.ProfileText>Meu Perfil</C.ProfileText>
      </C.ProfileButton> */}
    </C.Header>
  );
};
