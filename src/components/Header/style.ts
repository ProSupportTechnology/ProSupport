import styled from "styled-components";
import { iNavbarProps } from "./types";
import "animate.css";

export const HeaderContainer = styled.header`
  position: fixed;
  inset: 0;
  z-index: 1;
  width: 100vw;
  height: 100px;
  background-color: var(--gray-3);
  display: flex;
  align-content: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: column;
    width: 130px;
    height: 100vh;
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
  margin-right: 1.6rem;
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
  height: max-content;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--gray-2);
  border-radius: 0 0 0 15px;
  animation-duration: 1s;
  .divInput {
    margin: 10px 5px;
    @media (min-width: 768px) {
      display: none;
    }
  }
  @media (min-width: 768px) {
    height: 100%;
    position: static;
    background-color: transparent;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    width: 100%;
  }
`;
export const NavBarProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  padding: 1rem;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  h2 {
    color: var(--gray-0);
    height: max-content;
  }
  span {
    color: var(--gray-0);
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const UlNavBar = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: auto;
  height: 140px;
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 1px;
  }
  ::-webkit-scrollbar-track {
    display: hidden;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: var(--white);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--white);
  }
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
    height: 100%;
    padding-top: 0.3rem;
  }
`;
export const LiNavBar = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  @media (min-width: 768px) {
    height: 45px;
    width: 45px;
  }
  a {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem;
    margin-left: 0;
    margin-right: 0;
    @media (min-width: 768px) {
      padding: 0;
    }
    div {
      height: 100%;
      display: flex;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      @media (min-width: 768px) {
        width: 50px;
      }
    }
  }
  svg {
    font-size: 1.5rem;
    color: var(--gray-0);
    @media (min-width: 768px) {
      font-size: 2rem;
    }
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
  height: 50px;
  @media (min-width: 768px) {
    height: 45px;
    width: 45px;
  }
  a {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem;
    margin-left: 0;
    margin-right: 0;
    border-radius: 0 0 0 15px;
    @media (min-width: 768px) {
      padding: 0;
    }
    div {
      height: 100%;
      display: flex;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      @media (min-width: 768px) {
        width: 50px;
      }
    }
  }
  svg {
    font-size: 1.5rem;
    color: var(--gray-0);
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
  h3 {
    color: var(--gray-0);
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
