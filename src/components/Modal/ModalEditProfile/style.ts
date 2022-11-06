import styled from "styled-components";

export const StyledEditUser = styled.div`
  width: 90%;

  p {
    color: var(--white);
    margin-top: 50px;
    text-align: center;
    font-size: 25px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  label {
    color: white;
    margin-top: 5px;

    @media (max-width: 768px) {
      font-size: 5px;
    }
  }

  input {
    background-color: var(--background);
    width: 100%;
    color: white;

    @media (max-width: 768px) {
      height: 70px;
    }
  }

  button {
    margin-top: 30px;
    width: 100px;
    place-self: self-end;
    font-size: 16px;
    height: 40px;

    @media (max-width: 768px) {
      margin-bottom: 20px;
      font-size: 14px;
      height: 30px;
    }
  }
`;
