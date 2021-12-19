import styled from "styled-components";
import { device } from "../../device";

export const Container = styled.div`
  min-height: 100vh;
  color: #5a5a5a;
  font-family: "Century Gothic", sans-serif;
`;
export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 12px 70px;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #111111;
  position: relative;

  @media ${device.laptop} {
    padding: 12px 50px;
  }
  @media ${device.tablet} {
    width: 75%;
    padding: 0 12px 20px 12px;
  }
`;
export const Logo = styled.img`
  height: 57px;
  width: 138px;
  @media ${device.tablet} {
    height: 40px;
  }
`;
export const NavBar = styled.nav`
  justify-content: center;
  display: flex;
  flex: 2;
`;
export const NavBarLink = styled.a`
  margin: 0 3%;
  font-size: 15px;
  text-decoration: none;
  color: #c4c4c4;
  border: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #c4c4c4;
  }
  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 22px;
    margin: 0 1%;
  }
`;
