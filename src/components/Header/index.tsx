import {
  Barra,
  CheckBox,
  HeaderContainer,
  LiNavBar,
  Logo,
  LogoutCont,
  MenuMobile,
  NavBar,
  NavBarProfileContainer,
  UlNavBar,
} from "./style";
import logo from "../../assets/ProSupport.png";
import photoProfile from "../../assets/photo.png";
import { FaUserAlt, FaHome, FaUsers } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { GiEntryDoor } from "react-icons/gi";
import { useState } from "react";
import { InputSearch } from "../InputSearch";
import { StyledButtonLink } from "../../style/buttonLink/style";
import { useUserContext } from "../../contexts/UserContext";
import { StyledImageQuestion } from "../ImageProfile/style";
import { useLocation } from "react-router-dom";
import { LoadingPage } from "../../pages/LoadingPage";

export const Header = () => {
  const [navbarMobile, setNavbarMobile] = useState(false);
  const { user } = useUserContext();
  const location = useLocation();

  const { email, name, isAdm, image } = user;

  if (!user) return <LoadingPage />;

  const search =
    location.pathname === `/profile` || location.pathname === `/users`
      ? false
      : true;
  const searchUser =
    location.pathname === `/profile` || location.pathname === `/dashboard`
      ? false
      : true;
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <NavBar navbarMobile={navbarMobile}>
        <NavBarProfileContainer>
          <StyledImageQuestion>
            <img src={image ? image : photoProfile} alt="foto de perfil" />
          </StyledImageQuestion>
          <h2 className="title three">{name}</h2>
          <span>{isAdm ? `Admin` : `Usuario`}</span>
          <span className="text three">{email}</span>
        </NavBarProfileContainer>
        {isAdm
          ? search && (
              <div className="divInput">
                <InputSearch />
              </div>
            )
          : searchUser && (
              <div className="divInput">
                <InputSearch />
              </div>
            )}
        <UlNavBar>
          <LiNavBar>
            <StyledButtonLink variant="theme-menu" to={`/dashboard`}>
              <h3 className="title two">Home</h3>
              <div title="Home">
                <FaHome />
              </div>
            </StyledButtonLink>
          </LiNavBar>
          <LiNavBar>
            <StyledButtonLink variant="theme-menu" to={`/profile`}>
              <h3 className="title two">Perfil</h3>
              <div title="Perfil">
                <FaUserAlt />
              </div>
            </StyledButtonLink>
          </LiNavBar>
          {isAdm && (
            <>
              <LiNavBar>
                <StyledButtonLink
                  variant="theme-menu"
                  to={`/answeredQuestions`}
                >
                  <h3 className="title two">Perguntas/Respostas</h3>
                  <div title="Perguntas/Respostas">
                    <IoMdChatbubbles />
                  </div>
                </StyledButtonLink>
              </LiNavBar>
              <LiNavBar>
                <StyledButtonLink variant="theme-menu" to={`/users`}>
                  <h3 className="title two">Usuarios</h3>
                  <div title="Usuario">
                    <FaUsers />
                  </div>
                </StyledButtonLink>
              </LiNavBar>
            </>
          )}
        </UlNavBar>
        <LogoutCont>
          <StyledButtonLink
            variant="theme-menu"
            to={`/`}
            onClick={() => localStorage.clear()}
          >
            <h3 className="title two">Sair</h3>
            <div title="Sair">
              <GiEntryDoor />
            </div>
          </StyledButtonLink>
        </LogoutCont>
      </NavBar>
      <MenuMobile>
        <CheckBox
          type="checkbox"
          onChange={(event) => [setNavbarMobile(event.target.checked)]}
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
