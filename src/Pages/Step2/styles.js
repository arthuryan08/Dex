import styled from "styled-components";
import { device } from "../../device";

export const Container = styled.div`
  font-family: "Avant Garde BQ", sans-serif;
  p {
    font-size: 17px;
    color: #ababab;
  }
  @media ${device.mobileM} {
    height: 766px;
  }
`;

export const Option = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const OptionBtn = styled.label`
  padding: 1.3em 2em;
  position: absolute;
  right: 492px;
  height: 247px;
  width: 398px;
  background-color: ${(props) => (props.checked ? "#0dc90a" : "transparent")};
  border: none;
  border-radius: 48px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:active {
    transform: translateY(-1px);
  }
  @media ${device.mobileM} {
    width: 313px;
    height: 217px;
    right: 23px;
  }
`;
export const OptionBtn2 = styled.label`
  padding: 1.3em 2em;
  position: absolute;
  right: 52px;
  height: 247px;
  width: 398px;
  background-color: ${(props) => (props.checked ? "#0dc90a" : "transparent")};
  border: none;
  border-radius: 48px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:active {
    transform: translateY(-1px);
  }
  @media ${device.mobileM} {
    width: 313px;
    height: 217px;
    right: 23px;
  }
`;

export const Area1 = styled.div`
  height: 199px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media ${device.mobileM} {
    height: 180px;
  }
`;
export const Area2 = styled.div`
  height: 318px;
  display: flex;
  justify-content: center;
  @media ${device.mobileM} {
    flex-direction: column;
    height: 494px;
  }
`;
export const Title1 = styled.h1`
  text-align: center;
  z-index: 20;
  text {
    color: #0dc90a;
  }
  @media ${device.mobileM} {
    font-size: 23px;
  }
`;

export const TemplateArea = styled.div`
  @media ${device.mobileM} {
    width: 314px;
    height: 222px;
    margin-bottom: 30px;
  }
`;

export const CaseTemplate = styled.div`
  width: 398px;
  height: 248px;
  padding: 18px;
  margin: 0 20px;

  border-radius: 5px;
  border-radius: 50px;
  border-radius: 50px;
  background: #dbdbdb;
  box-shadow: 32px 32px 63px #bababa, -32px -32px 63px #fcfcfc;
  @media ${device.mobileM} {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;

export const Template1 = styled.img`
  width: 100%;
  border-radius: 41px;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    z-index: 9;
    transition: 0.5s;
  }
  @media ${device.mobileM} {
    width: 100%;
    height: 100%;
  }
`;
export const Template2 = styled.img`
  width: 100%;
  border-radius: 41px;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    z-index: 9;
    transition: 0.5s;
  }
  @media ${device.mobileM} {
    width: 100%;
    height: 100%;
  }
`;

export const ButtonBack = styled.button`
  position: absolute;
  right: 188px;
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
  @media ${device.mobileM} {
    right: 187px;
    bottom: -273px;
  }
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
  @media ${device.mobileM} {
    right: 30px;
    bottom: -273px;
  }
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
