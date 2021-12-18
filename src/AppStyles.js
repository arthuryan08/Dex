import styled from "styled-components";

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
`;

export const ContentTextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 43%;
  height: 480px;
  justify-content: space-between;
  align-items: center;
  padding: 70px 0 0 70px;
`;
export const Text1 = styled.p`
  font-size: 55px;
  font-weight: bold;
  color: #111111;
`;
export const Text2 = styled.p`
  font-size: 20px;
  font-family: "Avant Garde BQ", sans-serif;
  padding-right: 98px;
`;

export const Mockup1 = styled.img`
  width: 789px;
  height: 562px;
  margin-top: 70px;
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
}

`;

export const Mockup2 = styled.img`
  height: 435px;
`;
export const ContentTextArea2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px 40px 40px 40px;
  width: 43%;
  height: 480px;
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
`;
export const ContentTextArea3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 46%;
  height: 434px;
`;
export const Div3d = styled.div`
  width: 409px;
  height: 559px;
  perspective: 1000px;
  position: absolute;
  right: 10%;
`;

export const Mockup3 = styled.img`
  width: 339px;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotate3d(1, -9, 1, 35deg);
`;
export const Case = styled.img`
  position: absolute;
  z-index: 1;
  width: 410px;
  top: 1248px;
  right: 10%;
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
`;
export const TipContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 306px;
  height: 90px;
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
