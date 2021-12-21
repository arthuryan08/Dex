import styled from "styled-components";
import { device } from "../../device";

export const Container = styled.div`
  font-family: "Avant Garde BQ", sans-serif;
  p {
    font-size: 17px;
    color: #ababab;
  }
  @media ${device.mobileM} {
    height: 710px;
  }
`;

export const Area1 = styled.div`
  height: 151px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const Area2 = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
    height: 473px;
  }
`;

export const Title1 = styled.h1`
  text-align: center;
  z-index: 20;
  @media ${device.mobileM} {
    font-size: 23px;
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
  @media ${device.mobileM} {
    bottom: -222px;
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
  @media ${device.mobileM} {
    bottom: -222px;
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

export const InputArea = styled.div`
  width: 446px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const InputText = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
  color: #111111 !important;
`;

export const Input = styled.input`
  width: 427px;
  height: 50px;
  font-size: 19px;
  padding-left: 10px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media ${device.mobileM} {
    width: 320px;
    margin-bottom: 15px;
    height: 40px;
  }
`;
