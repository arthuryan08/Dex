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
`;

export const Mockup1 = styled.img`
  width: 789px;
  height: 562px;
  margin-top: 70px;
`;

// main content 2

export const MainContent2 = styled.div`
  background: red;
  height: 658px;
`;
