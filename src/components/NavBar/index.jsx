import { ContainerNavBar } from "./localStyle";
import { NotificatioIcon } from "../../assets/icons/NotificatioIcon";
import { ScreenShareIcon } from "../../assets/icons/ScreenShareIcon";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { YoutubeSvg } from "../../assets/logo/youtubeSvg";
import Avatar from "../Avatar";

const NavBar = () => {
  return (
    <ContainerNavBar>
      <YoutubeSvg />

      <ul>
        <li>
          {" "}
          <ScreenShareIcon />{" "}
        </li>
        <li>
          {" "}
          <NotificatioIcon />{" "}
        </li>
        <li>
          {" "}
          <SearchIcon />{" "}
        </li>
        <li>
          {" "}
          <Avatar />{" "}
        </li>
      </ul>
    </ContainerNavBar>
  );
};
export default NavBar;
