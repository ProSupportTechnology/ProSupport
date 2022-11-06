import {
  Barra,
  CheckBox,
  HeaderContainer,
  ImgProfile,
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
import {
  HiHome,
  HiUser,
  HiChatBubbleLeftRight,
  HiUsers,
} from "react-icons/hi2";
import { GiEntryDoor } from "react-icons/gi";
import { useState } from "react";
import { InputSearch } from "../InputSearch";
import { StyledButtonLink } from "../../style/buttonLink/style";

export const Header = () => {
  const [navbarMobile, setNavbarMobile] = useState(false);
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <NavBar navbarMobile={navbarMobile}>
        <NavBarProfileContainer>
          <ImgProfile src={photo} alt="imagem-profile" />
          <h2 className="title three">Admin name</h2>
          <span className="text three">Expert Coach</span>
          <span className="text three">Status: Online</span>
          <span className="text three">Email: admin@admin.com</span>
        </NavBarProfileContainer>
        <div className="divInput">
          <InputSearch />
        </div>
        <UlNavBar>
          <LiNavBar>
            <StyledButtonLink variant="theme-menu" to={`/dashboard`}>
              <h3 className="title two">Home</h3>
              <div>
                <HiHome />
              </div>
            </StyledButtonLink>
          </LiNavBar>
          <LiNavBar>
            <StyledButtonLink variant="theme-menu" to={`/profile`}>
              <h3 className="title two">Perfil</h3>
              <div>
                <HiUser />
              </div>
            </StyledButtonLink>
          </LiNavBar>
          <LiNavBar>
            <StyledButtonLink variant="theme-menu" to={`/`}>
              <h3 className="title two">Perguntas/Respostas</h3>
              <div>
                <HiChatBubbleLeftRight />
              </div>
            </StyledButtonLink>
          </LiNavBar>
          <LiNavBar>
            <StyledButtonLink variant="theme-menu" to={`/`}>
              <h3 className="title two">Usuarios</h3>
              <div>
                <HiUsers />
              </div>
            </StyledButtonLink>
          </LiNavBar>
        </UlNavBar>
        <LogoutCont>
          <StyledButtonLink variant="theme-menu" to={`/`} onClick={() => localStorage.clear()}>
            <h3 className="title two">Sair</h3>
            <div>
              <GiEntryDoor />
            </div>
          </StyledButtonLink>
        </LogoutCont>
      </NavBar>
      <MenuMobile>
        <CheckBox
          type="checkbox"
          onChange={(event) => setNavbarMobile(event.target.checked)}
        />
        <label htmlFor="checkbox-menu">
          <Barra />
          <Barra />
          <Barra />
        </label>
      </MenuMobile>
    </HeaderContainer>
  );
};
