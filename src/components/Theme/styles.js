import styled from "styled-components";
import { device } from "../../device";

export const Container = styled.div`
  background-color: #e3e3e3;
  color: #111111;
  min-height: 100vh;
  @media ${device.mobileM} {
    width: 375px;
    height: 0;
  }
`;

export const Area = styled.div`
  padding: 24px;
  height: 574px;
  display: flex;
  flex-direction: column;
  @media ${device.mobileM} {
    width: 100%;
  }
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;
  }
  @media ${device.mobileM} {
   flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  width: 343px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-right: 1px solid #111111;
  @media ${device.mobileM} {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100px;
    border-right: none;
    border-bottom: 1px solid #111111;
  }
`;

export const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  @media ${device.mobileM} {
    padding: 0;
  }
`;
