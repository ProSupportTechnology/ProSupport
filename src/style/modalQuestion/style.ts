import styled from "styled-components";

export const ModalQuestion = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 340px;
  width: 290px;
  color: var(--gray-0);

  p {
    font-size: 20px;
    margin: 15px 0;
  }

  label {
    font-size: 12px;
    display: flex;
    margin-left: 10px;
  }

  input {
    font-size: 10px;
    padding: 0 10px;
    margin-bottom: 10px;
    width: 280px;
    height: 35px;
    border-radius: 5px;
    color: var(--gray-0);
    border: 1px solid var(--gray-1);
    background-color: var(--background);
  }

  textarea {
    padding: 10px;
    color: var(--gray-0);
    resize: none;
    align-self: center;
    width: 280px;
    height: 140px;
    border-radius: 10px;
    border: 1px solid var(--gray-1);
    background-color: var(--background);
  }

  button {
    width: 97px;
    height: 35px;
    align-self: flex-end;
    margin: 5px 10px;
  }

  @media (min-width: 768px) {
    height: 450px;
    width: 530px;
    font-size: 25px;

    p {
      margin: 25px 0;
    }

    textarea {
      font-size: 20px;
      width: 100%;
    }

    label {
      margin-left: 0;
    }

    input {
      width: 100%;
      height: 45px;
    }

    button {
      width: 105px;
      height: 40px;
      margin: 15px 0;
    }
  }
`;
