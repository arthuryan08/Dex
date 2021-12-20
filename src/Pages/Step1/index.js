import React, { useState } from "react";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { useHistory } from "react-router-dom";

export const Step1 = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  const [checked9, setChecked9] = useState(false);

  const history = useHistory();

  const handleNextStep = () => {
    history.push("/step2");
  };

  return (
    <Theme>
      <C.Container>
        <C.Area1>
          <p>Step 1/3</p>
          <C.Title1>
            Let's create your website, just follow the step by step
          </C.Title1>
          <C.Title1>
            First, what industry do you want your site to be in?
          </C.Title1>
          <C.ButtonArea>
            <C.Option id="1" onChange={() => setChecked1(!checked1)} />
            <C.OptionBtn for="1" checked={checked1}>
              Commerce
            </C.OptionBtn>
            <C.Option id="2" onChange={() => setChecked2(!checked2)} />
            <C.OptionBtn for="2" checked={checked2}>
              Services
            </C.OptionBtn>
            <C.Option id="3" onChange={() => setChecked3(!checked3)} />
            <C.OptionBtn for="3" checked={checked3}>
              Industry
            </C.OptionBtn>
          </C.ButtonArea>
        </C.Area1>

        <C.Area2>
          <C.Title2>What do you want to sell?</C.Title2>
          <C.ButtonArea>
            <C.Option id="4" onChange={() => setChecked4(!checked4)} />
            <C.OptionBtn for="4" checked={checked4}>
              Clothing
            </C.OptionBtn>
            <C.Option id="5" onChange={() => setChecked5(!checked5)} />
            <C.OptionBtn for="5" checked={checked5}>
              Cosmetics
            </C.OptionBtn>
            <C.Option id="6" onChange={() => setChecked6(!checked6)} />
            <C.OptionBtn for="6" checked={checked6}>
              Beverages
            </C.OptionBtn>
            <C.Option id="7" onChange={() => setChecked7(!checked7)} />
            <C.OptionBtn for="7" checked={checked7}>
              Food
            </C.OptionBtn>
            <C.Option id="8" onChange={() => setChecked8(!checked8)} />
            <C.OptionBtn for="8" checked={checked8}>
              Accessories
            </C.OptionBtn>
            <C.Option id="9" onChange={() => setChecked9(!checked9)} />
            <C.OptionBtn for="9" checked={checked9}>
              Jewelry
            </C.OptionBtn>
          </C.ButtonArea>
        </C.Area2>
        <C.ButtonNext onClick={handleNextStep}>
          <span>Next</span>
        </C.ButtonNext>
      </C.Container>
    </Theme>
  );
};
