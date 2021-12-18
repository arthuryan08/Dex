import styled from "styled-components";

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
`;
export const Logo = styled.img`
  height: 57px;
  width: 138px;
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
`;
export const ProfileButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: #5a5a5a;
  cursor: pointer;
`;
export const ProfileImg = styled.div`
  height: 31px;
  width: 31px;
`;
export const ProfileSVG = styled.svg`
  path {
    fill: #5a5a5a;
  }
`;
export const ProfileText = styled.p`
  font-size: 19px;
  margin-left: 7px;
`;
