import styled from "styled-components";

export const MenuMobile = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  label {
    cursor: pointer;
    position: relative;
    display: block;
    height: 22px;
    width: 30px;
  }
`;
export const CheckBox = styled.input`
  position: absolute;
  opacity: 0;
`;
export const Barra = styled.span`
  position: absolute;
  display: block;
  height: 5px;
  width: 100%;
  border-radius: 30px;
  background-color: grey;
  transition: 0.25s ease-in-out;
`;
