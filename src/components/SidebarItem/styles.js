import styled from "styled-components";
import { device } from "../../device";

export const Container = styled.div`
  font-family: "Avant Garde BQ", sans-serif;
  margin: 30px 0;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    @media ${device.mobileM} {
      flex-direction: column;
    }
  }
  @media ${device.mobileM} {
    width: 38%;
    margin: 0;
    padding: 0;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 20px;
  @media ${device.mobileM} {
    margin: 0;
  }
`;

export const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 35px;
  color: #111111;
  @media ${device.mobileM} {
    text-align: center;
    font-size: 25px;
    width: 375px;
  }
`;

export const Description = styled.div`
  text-align: right;
  font-size: 16px;
  color: #222222;
  @media ${device.mobileM} {
    display: none;
  }
`;

export const IconArea = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active === props.step ? "#0dc90a" : "#d3d3d3"};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0px 10px 25px rgba(49, 229, 157, 0.4);
  }
  @media ${device.mobileM} {
  }
`;

export const Point = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid #494a7c;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -6.5px;
  background-color: ${(props) =>
    props.active === props.step ? "#0dc90a" : "#d3d3d3"};
  @media ${device.mobileM} {
    margin: 8px 0 0 0;
  }
`;
