import React from "react";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { useHistory } from "react-router-dom";

export const Step3 = () => {
  const history = useHistory();

  const handleBackStep = () => {
    history.push("/step2");
  };

  return (
    <Theme>
      <C.Container>
        <C.Area1>
          <p>Step 3/3</p>
          <C.Title1>
            Your website is almost ready, just fill in the information.
          </C.Title1>
        </C.Area1>
        <C.Area2>
          <C.InputArea>
            <C.InputText>Your Name or Company Name</C.InputText>
            <C.Input type={"text"} />
            <C.InputText>Cellphone</C.InputText>
            <C.Input type={"text"} />
            <C.InputText>Number of products per line</C.InputText>
            <C.Input type={"number"} />
          </C.InputArea>
          <C.InputArea>
            <C.InputText>Catchphrase or slogan</C.InputText>
            <C.Input type={"text"} />
            <C.InputText>Your Email</C.InputText>
            <C.Input type={"text"} />
            <C.InputText>Password</C.InputText>
            <C.Input type={"email"} />
          </C.InputArea>
        </C.Area2>
        <C.ButtonBack onClick={handleBackStep}>
          <span>Back</span>
        </C.ButtonBack>
        <C.ButtonNext>
          <span>Done</span>
        </C.ButtonNext>
      </C.Container>
    </Theme>
  );
};
