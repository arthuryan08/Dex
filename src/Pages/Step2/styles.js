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

export const Area1 = styled.div`
  height: 199px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const Area2 = styled.div`
  height: 318px;
  display: flex;
  justify-content: center;
`;
export const Title1 = styled.h1`
  text-align: center;
  z-index: 20;
  text {
    color: #0dc90a;
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
