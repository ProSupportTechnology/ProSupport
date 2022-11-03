import {
  Barra,
  CheckBox,
  HeaderContainer,
  ImgProfile,
  InputCont,
  LiNavBar,
  Logo,
  LogoutCont,
  MenuMobile,
  NavBar,
  NavBarProfileContainer,
  UlNavBar,
} from "./style";
import logo from "../../assets/ProSupport.png";
import photo from "../../assets/photo.png";
import { Link } from "react-router-dom";
import {
  HiHome,
  HiUser,
  HiChatBubbleLeftRight,
  HiUsers,
} from "react-icons/hi2";
import { GiEntryDoor, GiMagnifyingGlass } from "react-icons/gi";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <NavBar>
        <NavBarProfileContainer>
          <ImgProfile src={photo} alt="imagem-profile" />
          <h2 className="title three">Admin name</h2>
          <span className="text three">Expert Coach</span>
          <span className="text three">Status: Online</span>
          <span className="text three">Email: admin@admin.com</span>
        </NavBarProfileContainer>
        <InputCont>
          <input type="text" />
          <GiMagnifyingGlass />
        </InputCont>
        <UlNavBar>
          <LiNavBar>
            <h3 className="title two">Home</h3>
            <Link to={`/`}>
              <HiHome />
            </Link>
          </LiNavBar>
          <LiNavBar>
            <h3 className="title two">Perfil</h3>
            <Link to={`/`}>
              <HiUser />
            </Link>
          </LiNavBar>
          <LiNavBar>
            <h3 className="title two">Perguntas/Respostas</h3>
            <Link to={`/`}>
              <HiChatBubbleLeftRight />
            </Link>
          </LiNavBar>
          <LiNavBar>
            <h3 className="title two">Usuarios</h3>
            <Link to={`/`}>
              <HiUsers />
            </Link>
          </LiNavBar>
        </UlNavBar>
        <LogoutCont>
          <h3 className="title two">Sair</h3>
          <Link to={`/`}>
            <GiEntryDoor />
          </Link>
        </LogoutCont>
      </NavBar>
      <MenuMobile>
        <CheckBox type="checkbox" />
        <label htmlFor="checkbox-menu">
          <Barra />
          <Barra />
          <Barra />
        </label>
      </MenuMobile>
    </HeaderContainer>
  );
};
