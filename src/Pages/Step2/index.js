import React, { useState } from "react";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import template1 from "../../assets/template5.jpg";
import template2 from "../../assets/template4.png";
import { useHistory } from "react-router-dom";

export const Step2 = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const HandleTemplate1 = () => {
    setChecked1(!checked1);
    setChecked2(false);
  };
  const HandleTemplate2 = () => {
    setChecked2(!checked2);
    setChecked1(false);
  };

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
          <C.TemplateArea>
            <C.Option id="1" />
            <C.OptionBtn for="1" checked={checked1}></C.OptionBtn>
            <C.CaseTemplate>
              <C.Template1 src={template1} onClick={HandleTemplate1} />
            </C.CaseTemplate>
          </C.TemplateArea>
          <C.TemplateArea>
            <C.Option id="2" />
            <C.OptionBtn2 for="2" checked={checked2}></C.OptionBtn2>
            <C.CaseTemplate>
              <C.Template2 src={template2} onClick={HandleTemplate2} />
            </C.CaseTemplate>
          </C.TemplateArea>
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
