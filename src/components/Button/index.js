import React from "react";
import styled from "styled-components";

const PersoButton = styled.button`
  color: ${(props) => props.TxtColor && `#FFFFFF`};
  border: none;
  margin-bottom: -5px;
  padding: 4px 12px;
  font-size: 19px;
  font-weight: 600;
  border-radius: 30px;
  height: 41px;
  cursor: pointer;
  background-color: ${(props) => (props.BGColor ? `#111111` : "#FFFFFF")};
  margin-left: ${(props) => props.color && "20px"};
  &:hover {
    filter: brightness(90%);
  }
`;

export const Button = ({ children, TxtColor, BGColor }) => {
  return (
    <>
      <PersoButton TxtColor={TxtColor} BGColor={BGColor}>
        {children}
      </PersoButton>
    </>
  );
};
