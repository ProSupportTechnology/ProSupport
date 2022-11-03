import styled from "styled-components";
import { iNavbarProps } from "./types";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: black;
  display: flex;
  align-content: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: column;
    width: 130px;
    height: 100%;
  }
`;
export const Logo = styled.img`
  width: 130px;
  height: 100%;
  @media (min-width: 768px) {
    width: 100%;
    height: 100px;
  }
`;
export const MenuMobile = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  margin-right: 1rem;
  position: relative;
  inset: 0;
  label {
    cursor: pointer;
    position: relative;
    display: block;
    height: 22px;
    width: 30px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const CheckBox = styled.input`
  width: 100%;
  height: 16px;
  position: absolute;
  opacity: 0;
  z-index: 1;
  :checked + label span:nth-child(1) {
    transform: rotate(-45deg);
    top: 8px;
  }
  :checked + label span:nth-child(2) {
    opacity: 0;
  }
  :checked + label span:nth-child(3) {
    transform: rotate(45deg);
    top: 8px;
  }
`;
export const Barra = styled.span`
  position: absolute;
  display: block;
  height: 5px;
  width: 100%;
  border-radius: 30px;
  background-color: grey;
  transition: 0.25s ease-in-out;
  :nth-child(1) {
    top: 0;
  }
  :nth-child(2) {
    top: 8px;
  }
  :nth-child(3) {
    top: 16px;
  }
`;
export const NavBar = styled.nav<iNavbarProps>`
  position: fixed;
  top: 100px;
  right: ${({ navbarMobile }) => (!navbarMobile ? "-325px" : "0")};
  width: 80%;
  max-width: 320px;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  background: #434343;
  border-radius: 0 0 0 15px;
  @media (min-width: 768px) {
    position: static;
    background-color: transparent;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.3rem;
    width: 100%;
  }
`;
export const NavBarProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 180px;
  gap: 0.3rem;
  margin-top: 0.3rem rem;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  h2 {
    color: var(--gray-0);
  }
  span {
    color: var(--gray-0);
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const ImgProfile = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 0.3rem;
`;
export const InputCont = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.3rem;
  border: 1px solid var(--gray-0);
  border-radius: 5px;
  background-color: var(--gray-3);
  svg {
    font-size: 2rem;
    color: var(--gray-0);
    width: 17%;
    height: 80%;
    display: flex;
    align-items: center;
  }
  input {
    height: 100%;
    width: 83%;
    background-color: var(--gray-3);
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const UlNavBar = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
export const LiNavBar = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  margin: 0 0.3rem;
  a {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    div {
      height: 100%;
      width: 40px;
      display: flex;
      background: radial-gradient(
        circle,
        rgba(63, 94, 251, 1) 0%,
        rgba(252, 70, 107, 1) 100%
      );
      border-radius: 5px;
      justify-content: center;
      align-items: center;
    }
  }
  svg {
    font-size: 2rem;
    color: var(--gray-0);
  }
  h3 {
    color: var(--gray-0);
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
export const LogoutCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin: 0 0.3rem;
  margin-top: 48px;
  a {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    div {
      height: 100%;
      width: 40px;
      display: flex;
      background: radial-gradient(
        circle,
        rgba(63, 94, 251, 1) 0%,
        rgba(252, 70, 107, 1) 100%
      );
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.3rem;
    }
  }
  svg {
    font-size: 2rem;
    color: var(--gray-0);
  }
  h3 {
    color: var(--gray-0);
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
