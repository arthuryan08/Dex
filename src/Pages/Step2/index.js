import React from "react";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import template1 from "../../assets/template5.jpg";
import template2 from "../../assets/template4.png";
import { useHistory } from "react-router-dom";

export const Step2 = () => {
  const history = useHistory();

  const handleBackStep = () => {
    history.push("/step1");
  };

  const handleNextStep = () => {
    history.push("/step3");
  };

  return (
    <Theme>
      <C.Container>
        <C.Area1>
          <p>Step 2/3</p>
          <C.Title1>
            Do we have these templates for <text>Commerce</text> -{" "}
            <text>Clothing</text>?
          </C.Title1>
          <C.Title1>Which one do you want?</C.Title1>
        </C.Area1>

        <C.Area2>
          <C.CaseTemplate>
            <C.Template1 src={template1} />
          </C.CaseTemplate>
          <C.CaseTemplate>
            <C.Template2 src={template2} />
          </C.CaseTemplate>
        </C.Area2>
        <C.ButtonBack onClick={handleBackStep}>
          <span>Back</span>
        </C.ButtonBack>
        <C.ButtonNext onClick={handleNextStep}>
          <span>Next</span>
        </C.ButtonNext>
      </C.Container>
    </Theme>
  );
};
