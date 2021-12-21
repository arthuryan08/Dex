import React from "react";
import styled from "styled-components";
import { device } from "../../device";

const PersoButton = styled.button`
  color: ${(props) => (props.TxtColor ? `#212121` : `#e8e8e8`)};
  border: 2px solid ${(props) => (props.TxtColor ? `#212121` : `#e8e8e8`)};
  margin-bottom: -5px;
  padding: 10px 15px;
  z-index: 1;
  font-size: 19px;
  font-weight: 600;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden;
  background: ${(props) => (props.BGColor ? `transparent` : "#111111")};
  margin-left: ${(props) => props.color && "20px"};
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 0;
    background-color: ${(props) => (props.BGColor ? `#111111` : "#FFFFFF")};
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
  }
  &:hover {
    color: ${(props) => (props.TxtColor ? `#ffffff` : `#111111`)};
  }
  &:hover::before {
    width: 100%;
  }
  @media ${device.tablet} {
    font-size: 15px;
  }
  @media ${device.mobileL} {
    display: ${(props) => (props.none ? "none" : "block")};
  }
`;

export const Button = ({ children, TxtColor, BGColor, none, onClick }) => {
  return (
    <>
      <PersoButton
        TxtColor={TxtColor}
        BGColor={BGColor}
        none={none}
        onClick={onClick}
      >
        {children}
      </PersoButton>
    </>
  );
};
