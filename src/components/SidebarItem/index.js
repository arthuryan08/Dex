import { Link, useParams } from "react-router-dom";
import * as C from "./styles";
import { GiSuitcase } from "react-icons/gi";
import { IoIosBrush } from "react-icons/io";
import { CgScreen } from "react-icons/cg";
import { useHistory } from "react-router-dom";

export const SidebarItem = ({ title, description, icon, path, active }) => {
  const history = useHistory();

  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active} step={history.location.pathname}>
          {icon === "profile" && <GiSuitcase fill="white" size="45px" />}
          {icon === "book" && <IoIosBrush fill="white" size="35px" />}
          {icon === "mail" && <CgScreen color="white" size='35px'/>}
        </C.IconArea>
        <C.Point active={active} step={history.location.pathname}></C.Point>
      </Link>
    </C.Container>
  );
};
