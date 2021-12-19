import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../device";

export const BtnMenu = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const BtnMenuIcon = styled.label`
  color: #ffffff;
  font-size: 40px;
  position: fixed;
  z-index: 90;
  right: 5px;
  top: 10px;
  background-color: #111111;
  height: 57px;
  width: 57px;
  padding-left: 10px;
  display: none;
  @media ${device.mobileL} {
    display: flex;
  }
`;
export const SideBarArea = styled.div`
  position: fixed;
  width: 253px;
  height: 435px;
  right: ${(props) => (props.checked ? "0" : "-253px")};
  background-color: #111111;
  z-index: 80;
  display: flex;
  border-radius: 32px 0 32px 0;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px;
  transition: all 0.5s ease;
  display: none;
  @media ${device.mobileL} {
    display: flex;
  }
`;

export const NavLinks = styled.a`
  font-size: 25px;
  margin: 10px 0;
  text-decoration: none;
  color: #c4c4c4;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #c4c4c4;
  }
`;
export const NavButton = styled.button`
  color: #111111;
  border: none;
  padding: 10px 15px;
  font-size: 19px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ffffff;
  margin-top: 10px;
`;

export const SideBar = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <BtnMenu checked={checked} onChange={handleCheckboxChange} id="bt_menu" />
      <BtnMenuIcon for="bt_menu">&#9776;</BtnMenuIcon>
      <SideBarArea checked={checked}>
        <NavLinks href="#">HOME</NavLinks>
        <NavLinks href="#">FEATURES</NavLinks>
        <NavLinks href="#">TEMPLATES</NavLinks>
        <NavLinks href="#">ABOUT US</NavLinks>
        <NavLinks href="#">SUPORT</NavLinks>
        <NavButton>GET STARTED</NavButton>
      </SideBarArea>
    </>
  );
};
