import React from "react";
import * as C from "./AppStyles";

import { Header } from "./components/Header";
import { Button } from "./components/Button";

import Mockup1 from "./assets/mockup1.png";
import Mockup2 from "./assets/mockup2.png";
import Mockup3 from "./assets/mockupcelgif.gif";
import Case from "./assets/mobilecase.png";

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
      <C.MainContent2>
        <C.Mockup2 src={Mockup2} />
        <C.ContentTextArea2>
          <C.Text1>Simple, Easy and Fast.</C.Text1>
          <C.Text2>
            Out of time? Create a professional website in minutes. No code,
            seriously. <br />
            Don't worry about the price, it's completely free until your first
            sale.
          </C.Text2>
          <Button BGColor TxtColor>
            GET STARTED NOW
          </Button>
        </C.ContentTextArea2>
      </C.MainContent2>
      <C.MainContent3>
        <C.ContentTextArea3>
          <C.Text1>Build modern and fully responsive websites.</C.Text1>
          <C.Text2>
            We guarantee your website's compatibility with any type and size of
            screen, so you don't lose customers and can serve any audience.
          </C.Text2>
          <Button BGColor TxtColor>
            CREATE MY WEBSITE
          </Button>
        </C.ContentTextArea3>
        <C.Case src={Case} />
        <C.Div3d>
          <C.Mockup3 src={Mockup3} />
        </C.Div3d>
      </C.MainContent3>
      <C.TipsBar>
        <C.TipContent>
          <C.TipText1>
            Are you going to create a website for your business?
          </C.TipText1>
          <C.TipText2 href="#">Check out our tips and ideas &#8594;</C.TipText2>
        </C.TipContent>
        <C.TipContent>
          <C.TipText1>
            What types of websites can I create for my business?
          </C.TipText1>
          <C.TipText2 href="#">See more &#8594;</C.TipText2>
        </C.TipContent>
        <C.TipContent>
          <C.TipText1>
            Website Builder: A solution to start your online presence
          </C.TipText1>
          <C.TipText2 href="#">See more &#8594;</C.TipText2>
        </C.TipContent>
      </C.TipsBar>
      <C.SignUpArea>
        <C.SignUpText1>Sign up for free</C.SignUpText1>
        <C.SignUpText2>
          JOIN THE THOUSANDS OF BUSINESS LEADERS WINNING WITH GROW
        </C.SignUpText2>
        <C.InputArea>
          <C.InputText>First Name*</C.InputText>
          <C.Input type={"text"} />
          <C.InputText>Last Name*</C.InputText>
          <C.Input type={"text"} />
          <C.InputText>Work Email*</C.InputText>
          <C.Input type={"email"} />
          <C.InputText>Mobile Number*</C.InputText>
          <C.Input type={"number"} />
          <C.InputButton>Submit</C.InputButton>
        </C.InputArea>
      </C.SignUpArea>
    </C.Container>
  );
};
