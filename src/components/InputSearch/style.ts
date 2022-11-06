import styled from "styled-components";
import { iSearch } from "./types";

export const StyledForm = styled.div<iSearch>`
  ${(props) =>
    props.inputAnimation &&
    `
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #262626;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-itens: center;
      height: 90px;

      @media (max-width: 500px) {
        height: 60px
      }

      @media (max-width: 600px) {
        height: 55px;
      }

      @media (max-width: 400px) {
        height: 50px
      }

      @media (max-width: 340px) {
        height: 40px
      }


    input{
      border: none;
      background: none;
      color: white;
      font-size: 15px;
      line-height: 40px;
      width: 0;
      transition; 0.5;
      padding: 10px;
      font-size: 20px;

      @media (max-width: 600px) {
        font-size: 15px;
      }

      @media (max-width: 400px) {
        font-size: 13px;
      }
    }

    button {
      background: none;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-size: 40px;
      margin-right: 25px;

      @media (max-width: 600px) {
        font-size: 30px;
      }

      @media (max-width: 400px) {
        font-size: 20px;
      }
    }

    &&:hover > input {
      width: 500px;
      padding: 0 10px;

      @media (max-width: 500px) {
        width: 250px;
      }

      @media (max-width: 600px) {
        width: 200px;
      }

      @media (max-width: 400px) {
        width: 170px;
      }
    }
  `}

  ${(props) =>
    props.inputFixed &&
    `
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #262626;
    padding: 25px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    @media (max-width: 700px) {
      padding: 20px;
    }

    @media (max-width: 600px) {
      padding: 15px;
    }

    @media (max-width: 400px) {
      padding: 10px;
    }

    @media (max-width: 320px) {
      padding: 7px;
    }

    input {
      width: 100%;
      heigth: 70px;
      border: none;
      background: none;
      outline: none;
      color: white;
      font-size: 20px;
    }

    @media (max-width: 400px) {
      font-size: 10px;
    }

    button {
      background-color: transparent;
      padding: 5px
    }

    button > svg {
      color: white;
      font-size: 30px;
    }
  `}

${(props) =>
    props.inputFixedMenu &&
    `

      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #262626;
      padding: 10px;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 70%;


    input {
      width: 100%;
      heigth: 70px;
      border: none;
      background: none;
      outline: none;
      color: white;
      font-size: 20px;
      @media (max-width: 400px) {
        font-size: 10px;
      }
    }


    button {
      background-color: transparent;
      padding: 5px
    }

    button > svg {
      color: white;
      font-size: 15px;
    }

  `}
`;
