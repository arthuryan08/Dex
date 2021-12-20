import styled from "styled-components";

export const Container = styled.div`
  font-family: "Avant Garde BQ", sans-serif;
  p {
    font-size: 17px;
    color: #b8b8d4;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Option = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const OptionBtn = styled.label`
  padding: 1.3em 2em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: ${(props) => (props.checked ? "#fff" : "#111111")};
  background-color: ${(props) => (props.checked ? "#0dc90a" : "#fff")};
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #0dc90a;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  &:active {
    transform: translateY(-1px);
  }
`;

export const Area1 = styled.div`
  height: 254px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const Area2 = styled.div`
  height: 213px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const Title1 = styled.h1`
  text-align: center;
`;
export const Title2 = styled.h1`
  text-align: center;
`;

export const ButtonNext = styled.button`
  position: absolute;
  right: 34px;
  bottom: 34px;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0.9rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  display: inline-block;
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 17px;
  border-radius: 10px;
  overflow: hidden;
  background: #0dc90a;
  color: ghostwhite;
  span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
  }
  &:hover span {
    color: black;
  }
  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &::before {
    content: "";
    background: #000;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }
  &:hover::before {
    transform: translate3d(100%, 0, 0);
  }
`;
