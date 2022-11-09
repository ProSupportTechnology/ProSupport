import styled from "styled-components";

export const StyledImageProfile = styled.figure`
  width: 100px;
  min-width: 100px;
  height: 110px;

  @media (min-width: 768px) {
    width: 110px;
    min-width: 110px;
    height: 120px;
  }

  border-radius: 22px;
  border: 1px solid var(--white);

  position: relative;
  inset: 0;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  & > button {
    width: 100%;
    height: 41px;

    background-color: var(--gray-3);
    color: white;

    border-radius: 0px 0px 20px 20px;

    position: absolute;
    bottom: 0;
    left: 0;

    opacity: 20%;
    transition: 0.1s;

    &:hover {
      opacity: 100%;
    }
  }
`;

export const StyledImageQuestion = styled.figure`
  width: 100px;
  min-width: 100px;
  height: 110px;
  border-radius: 22px;

  border: 1px solid var(--white);

  @media (min-width: 768px) {
    width: 110px;
    min-width: 110px;
    height: 120px;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
