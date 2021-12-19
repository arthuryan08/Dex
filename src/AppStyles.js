import styled from "styled-components";
import { device } from "./device";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  color: #3e3e3e;
  font-family: "Century Gothic", sans-serif;

  overflow: hidden;
`;
export const MainContent1 = styled.main`
  height: 580px;
  background: transparent
    radial-gradient(farthest-corner at 51px 41px, #ffffff 0%, #dedede 100%) 0%
    0% no-repeat padding-box;
  display: flex;
  @media ${device.tablet} {
    height: 500px;
    width: 768px;
  }
`;

export const ContentTextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 43%;
  height: 480px;
  justify-content: space-between;
  align-items: center;
  padding: 70px 0 0 70px;

  @media ${device.laptop} {
    padding: 70px 0 0 50px;
  }
  @media ${device.tablet} {
    width: 35%;
    align-items: center;
    padding: 30px 0 0 50px;
    height: 420px;
  }
`;
export const Text1 = styled.p`
  font-size: 55px;
  font-weight: bold;
  color: #111111;
  margin-bottom: 20px;
  @media ${device.tablet} {
    width: 700px;
    margin-left: 390px;
  }
`;
export const Text2 = styled.p`
  font-size: 20px;
  font-family: "Avant Garde BQ", sans-serif;
  padding-right: 98px;
  margin-bottom: 20px;
  @media ${device.tablet} {
    width: 120%;
    margin-left: 60px;
  }
`;

export const Mockup1 = styled.img`
  width: 789px;
  height: 562px;
  top: 164px;
  right: 0%;
  position: absolute;
  @media ${device.laptop} {
    width: 739px;
    height: 512px;
    right: 0%;
  }
  @media ${device.tablet} {
    top: 280px;
    right: 20px;
    width: 500px;
    height: 330px;
  }
`;

// main content 2

export const MainContent2 = styled.div`
  background: transparent linear-gradient(237deg, #f5f5f5 0%, #d8d8d8 100%) 0%
    0% no-repeat padding-box;
  height: 580px;
  display: flex;
  padding: 60px 20px;
  align-items: center;
  justify-content: space-between;

  @media ${device.laptop}{
    padding: 60px 0;
  }
  @media ${device.tablet} {
    width: 75%;
    height: 450px;
    padding: 10px;
  }
}

`;

export const Mockup2 = styled.img`
  height: 435px;
  margin-left: 70px;

  @media ${device.laptop} {
    height: 385;
    margin-left: 40px;
  }
  @media ${device.tablet} {
    height: 300px;
    position: absolute;
    top: 700px;
    left: -20px;
  }
`;
export const ContentTextArea2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px 40px 40px 40px;
  width: 43%;
  height: 480px;
  @media ${device.laptop} {
    padding: 30px 0 30px 20px;
  }
  @media ${device.tablet} {
    margin-left: 430px;
    height: 350px;
    padding: 0;
  }
`;
export const Text3 = styled.p`
  font-size: 55px;
  font-weight: bold;
  color: #111111;
  margin-bottom: 20px;
  @media ${device.tablet} {
    width: 700px;
    margin-left: -300px;
  }
`;
export const Text4 = styled.p`
  font-size: 20px;
  font-family: "Avant Garde BQ", sans-serif;
  padding-right: 98px;
  margin-bottom: 20px;
  @media ${device.tablet} {
    width: 100%;
    padding: 0 10px;
  }
`;

// main content 3

export const MainContent3 = styled.div`
  background: transparent
    linear-gradient(90deg, #d8d3d3 0%, #f9fafa 64%, #f9fafa 90%, #ffffff 100%)
    0% 0% no-repeat padding-box;
  height: 646px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 132px;

  @media ${device.laptop} {
    padding: 0 70px;
    height: 496;
  }
  @media ${device.tablet} {
    padding: 0 9px;
    width: 768px;
    height: 537px;
  }
`;
export const ContentTextArea3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 46%;
  height: 561px;

  @media ${device.laptop} {
    height: 450px;
  }
  @media ${device.tablet} {
    height: 471px;
    width: 50%;
    align-items: center;
  }
`;
export const Text5 = styled.p`
  font-size: 55px;
  font-weight: bold;
  color: #111111;
  margin-bottom: 20px;
  @media ${device.tablet} {
    width: 700px;
    margin-left: 406px;
  }
`;
export const Text6 = styled.p`
  font-size: 20px;
  font-family: "Avant Garde BQ", sans-serif;
  padding-right: 98px;
  margin-bottom: 20px;
  @media ${device.tablet} {
    width: 90%;
    margin-left: 53px;
    padding: 0;
  }
`;

export const Div3d = styled.div`
  width: 409px;
  height: 559px;
  perspective: 1000px;
  position: absolute;
  right: 10%;

  @media ${device.laptop} {
    right: 5%;
  }
  @media ${device.tablet} {
    width: 220px;
    height: 341px;
    right: 10%;
    top: 1198px;
  }
`;

export const Mockup3 = styled.img`
  width: 339px;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotate3d(1, -9, 1, 35deg);
  @media ${device.tablet} {
    width: 203px;
  }
`;
export const Case = styled.img`
  position: absolute;
  z-index: 1;
  width: 414px;
  top: 1250px;
  right: 10%;

  @media ${device.laptop} {
    right: 5%;
  }
  @media ${device.tablet} {
    width: 244px;
    right: 55px;
    top: 1182px;
  }
`;

//TipsBar

export const TipsBar = styled.div`
  background-color: #111111;
  display: flex;
  height: 165px;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;
  color: #ffffff;
  z-index: 2;
  @media ${device.tablet} {
    width: 768px;
  }
`;
export const TipContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 306px;
  height: 90px;
  @media ${device.tablet} {
    padding: 10px;
    height: 150px;
  }
`;
export const TipText1 = styled.p`
  font-size: 19px;
  font-weight: bold;
`;
export const TipText2 = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

//Sign Up Area

export const SignUpArea = styled.div`
  height: 647px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    width: 768px;
  }
`;
export const SignUpText1 = styled.p`
  font-size: 55px;
  font-weight: bold;
  color: #111111;
  padding: 20px;
  &::after {
    content: "";
    height: 7px;
    width: 52px;
    margin-left: 175px;
    background-color: #111111;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SignUpText2 = styled.p`
  font-size: 20px;
  font-family: "Avant Garde BQ", sans-serif;
`;

export const InputArea = styled.div`
  width: 550px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const InputText = styled.p`
  font-size: 18px;
  margin-bottom: -19px;
`;

export const Input = styled.input`
  width: 100%;
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
`;

export const InputButton = styled.button`
  padding: 10px 15px;
  font-size: 17px;
  font-family: "Century Gothic", sans-serif;
  border: none;
  color: #ffffff;
  background-color: #111111;
  margin-bottom: 25px;
`;

// Footer

export const Footer = styled.footer`
  display: flex;
  height: 310px;
  background-color: #111111;
  color: #c4c4c4;
  justify-content: space-between;
  padding: 50px 70px 20px 70px;
  @media ${device.laptop} {
    padding: 40px 40px 26px 40px;
  }
  @media ${device.tablet} {
    width: 768px;
    height: 255px;
  }
`;
export const FooterDivLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoArea = styled.div``;

export const Logo = styled.img`
  height: 40px;
  margin-bottom: 10px;
`;

export const LogoText = styled.p`
  margin-top: 3px;
  font-size: 13px;
`;

export const SocialArea = styled.div``;

export const Link = styled.a`
  margin-right: 10px;
`;

export const Icon = styled.img`
  height: 30px;
`;

export const FooterDivInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivInfoTitle = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const DivInfoContent = styled.a`
  margin: 15px 0 0 0;
  text-decoration: none;
  font-size: 17px;
  color: #c4c4c4;
  &:hover {
    color: #ffffff;
  }
  @media ${device.tablet} {
    font-size: 12px;
  }
`;
