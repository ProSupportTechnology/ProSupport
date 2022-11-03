import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: black;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;
export const Logo = styled.img`
  width: 130px;
  height: 100%;
`;
export const MenuMobile = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
export const NavBar = styled.nav`
  position: fixed;
  top: 100px;
  right: 0;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  background: #434343;
  border-radius: 0 0 0 15px;
`;
export const NavBarProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 180px;
  gap: 0.3rem;
  background: var(--color-primary);
  h2 {
    color: var(--gray-0);
  }
  span {
    color: var(--gray-0);
  }
`;
export const ImgProfile = styled.img`
  width: 60px;
  height: 60px;
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
  }
  input {
    height: 100%;
    width: 87%;
    background-color: var(--gray-3);
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
  justify-content: space-between;
  height: 40px;
  margin: 0 0.3rem;
  a {
    height: 100%;
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 2rem;
    color: var(--gray-0);
  }
  h3 {
    color: var(--gray-0);
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
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 2rem;
    color: var(--gray-0);
  }
  h3 {
    color: var(--gray-0);
  }
`;
