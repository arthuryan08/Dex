import React from "react";
import * as C from "./AppStyles";
import { useHistory } from "react-router-dom";

import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";
import { Button } from "./components/Button";

import Mockup1 from "./assets/mockup1.png";
import Mockup2 from "./assets/mockup2.png";
import Mockup3 from "./assets/mockupcelgif.gif";
import Case from "./assets/mobilecase.png";
import Logo from "./assets/logo.svg";
import FacebookIcon from "./assets/facebook.svg";
import InstagramIcon from "./assets/instagram.svg";
import TwitterIcon from "./assets/twitter.svg";
import LinkedinIcon from "./assets/linkedin.svg";

export const App = () => {
  const history = useHistory();

  const handleCreatePage = () => {
    history.push("/step1");
  };

  return (
    <C.Container>
      <SideBar />
      <Header />
      <C.MainContent1>
        <C.ContentTextArea>
          <C.Text1>Your website just a few clicks away from you.</C.Text1>
          <C.Text2>
            Dex is the easiest way for those who need a fast website in a super
            practical way. So, let's create a website?
          </C.Text2>
          <Button BGColor TxtColor onClick={handleCreatePage}>
            GET STARTED
          </Button>
        </C.ContentTextArea>
        <C.Mockup1 src={Mockup1} />
      </C.MainContent1>
      <C.MainContent2>
        <C.Mockup2 src={Mockup2} />
        <C.ContentTextArea2>
          <C.Text3>Simple, Easy and Fast.</C.Text3>
          <C.Text4>
            Out of time? Create a professional website in minutes. No code,
            seriously. <br />
            Don't worry about the price, it's completely free until your first
            sale.
          </C.Text4>
          <Button BGColor TxtColor>
            GET STARTED NOW
          </Button>
        </C.ContentTextArea2>
      </C.MainContent2>
      <C.MainContent3>
        <C.ContentTextArea3>
          <C.Text5>Build modern and fully responsive websites.</C.Text5>
          <C.Text6>
            We guarantee your website's compatibility with any type and size of
            screen, so you don't lose customers and can serve any audience.
          </C.Text6>
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
      <C.Footer>
        <C.FooterDivLogo>
          <C.LogoArea>
            <C.Logo src={Logo} />
            <C.LogoText>
              Have a question? We're here to help.
              <br />
              Call us at 000-123-4567
            </C.LogoText>
          </C.LogoArea>
          <C.SocialArea>
            <C.Link href="#">
              <C.Icon src={FacebookIcon} />
            </C.Link>
            <C.Link href="#">
              <C.Icon src={InstagramIcon} />
            </C.Link>
            <C.Link href="#">
              <C.Icon src={TwitterIcon} />
            </C.Link>
            <C.Link href="#">
              <C.Icon src={LinkedinIcon} />
            </C.Link>
            <C.LogoText>Ⓒ 2021 DEX | All Rights Reserved</C.LogoText>
          </C.SocialArea>
        </C.FooterDivLogo>
        <C.FooterDivInfo>
          <C.DivInfoTitle>Product &amp; Pricing</C.DivInfoTitle>
          <C.DivInfoContent href="#">Features</C.DivInfoContent>
          <C.DivInfoContent href="#">Vizualizations</C.DivInfoContent>
          <C.DivInfoContent href="#">Dashboad</C.DivInfoContent>
          <C.DivInfoContent href="#">Pricing</C.DivInfoContent>
          <C.DivInfoContent href="#">Premium Plans</C.DivInfoContent>
          <C.DivInfoContent href="#">New Releases Notes</C.DivInfoContent>
        </C.FooterDivInfo>
        <C.FooterDivInfo>
          <C.DivInfoTitle>Learn</C.DivInfoTitle>
          <C.DivInfoContent href="#">Summary</C.DivInfoContent>
          <C.DivInfoContent href="#">Getting Started</C.DivInfoContent>
          <C.DivInfoContent href="#">Help Center</C.DivInfoContent>
          <C.DivInfoContent href="#">Resources</C.DivInfoContent>
          <C.DivInfoContent href="#">FAQs</C.DivInfoContent>
          <C.DivInfoContent href="#">Developers</C.DivInfoContent>
        </C.FooterDivInfo>
        <C.FooterDivInfo>
          <C.DivInfoTitle>Account</C.DivInfoTitle>
          <C.DivInfoContent href="#">My Products</C.DivInfoContent>
          <C.DivInfoContent href="#">Renewal and Billing</C.DivInfoContent>
          <C.DivInfoContent href="#">Create Account</C.DivInfoContent>
          <C.DivInfoContent href="#"></C.DivInfoContent>
          <C.DivInfoContent href="#"></C.DivInfoContent>
          <C.DivInfoContent href="#"></C.DivInfoContent>
          <C.DivInfoContent href="#"></C.DivInfoContent>
        </C.FooterDivInfo>
        <C.FooterDivInfo>
          <C.DivInfoTitle>Company</C.DivInfoTitle>
          <C.DivInfoContent href="#">About Us</C.DivInfoContent>
          <C.DivInfoContent href="#">Carrers</C.DivInfoContent>
          <C.DivInfoContent href="#">Partners</C.DivInfoContent>
          <C.DivInfoContent href="#">Contact Us</C.DivInfoContent>
          <C.DivInfoContent href="#">Privacy Policy</C.DivInfoContent>
          <C.DivInfoContent href="#">Terms of Use</C.DivInfoContent>
        </C.FooterDivInfo>
      </C.Footer>
    </C.Container>
  );
};
