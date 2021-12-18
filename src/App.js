import React from "react";
import * as C from "./AppStyles";

import { Header } from "./components/Header";
import { Button } from "./components/Button";

import Mockup1 from "./assets/mockup1.png";

export const App = () => {
  return (
    <C.Container>
      <Header />
      <C.MainContent1>
        <C.ContentTextArea>
          <C.Text1>Your website just a few clicks away from you.</C.Text1>
          <C.Text2>
            Dex is the easiest way for those who need a fast website in a super
            practical way. So, let's create a website?
          </C.Text2>
          <Button BGColor TxtColor>
            GET STARTED
          </Button>
        </C.ContentTextArea>
        <C.Mockup1 src={Mockup1} />
      </C.MainContent1>
      <C.MainContent2></C.MainContent2>
    </C.Container>
  );
};
