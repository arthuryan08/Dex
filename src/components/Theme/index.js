import * as C from "./styles";
import { Header } from "../Header";
import { SidebarItem } from "../SidebarItem";
import { SideBar } from "../SideBar";

export const Theme = ({ children }) => {
  return (
    <C.Container>
      <Header noButton />
      <SideBar />
      <C.Area>
        <C.Steps>
          <C.Sidebar>
            <SidebarItem
              title="Step 1"
              description="Chose your area of expertise"
              icon="profile"
              path="/step1"
              active={"/step1"}
            />

            <SidebarItem
              title="Step 2"
              description="Choose what you like the most"
              icon="book"
              path="/step2"
              active={"/step2"}
            />

            <SidebarItem
              title="Step 3"
              description="Fill with your informations"
              icon="mail"
              path="/step3"
              active={"/step3"}
            />
          </C.Sidebar>

          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
