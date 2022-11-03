import styled from "styled-components";

export const StyledImageProfile = styled.figure`
  width: 150px;
  height: 150px;

  background-color: blue;

  border-radius: 20px;
  border: 1px solid black;

  position: absolute;

  button {
    width: 100%;
    height: 41px;

    background-color: var(--gray-3);
    color: white;

    border-radius: 0px 0px 20px 20px;

    position: relative;
    top: 74%;

    opacity: 20%;
  }

  button:hover {
    opacity: 100%;
  }
`;

export const StyledImageQuestion = styled.figure`
  width: 150px;
  height: 120px;

  border-radius: 20px;

  position: absolute;
`;
