import React from "react";
import styled from "styled-components";
import { device } from "../../device";

const PersoButton = styled.button`
  color: ${(props) => props.TxtColor && `#FFFFFF`};
  border: none;
  margin-bottom: -5px;
  padding: 10px 15px;
  font-size: 19px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.BGColor ? `#111111` : "#FFFFFF")};
  margin-left: ${(props) => props.color && "20px"};
  &:hover {
    filter: brightness(90%);
  }
  @media ${device.tablet} {
    font-size: 15px;
  }
  @media ${device.mobileL} {
    display: ${(props) => (props.none ? "none" : "block")};
  }
`;

export const Button = ({ children, TxtColor, BGColor, none }) => {
  return (
    <>
      <PersoButton TxtColor={TxtColor} BGColor={BGColor} none={none}>
        {children}
      </PersoButton>
    </>
  );
};
