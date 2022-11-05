import styled from "styled-components";

export const StyledCreateResponse = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  height: 320px;
  width: 290px;
  color: var(--gray-0);

  p {
    margin: 15px 0;
  }

  textarea {
    padding: 10px;
    color: var(--gray-0);
    resize: none;
    align-self: center;
    width: 280px;
    height: 220px;
    border-radius: 30px;
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
    height: 400px;
    width: 530px;
    font-size: 25px;

    p {
      margin: 25px 0;
    }

    textarea {
      font-size: 20px;
      height: 260px;
      width: 100%;
    }

    button {
      width: 105px;
      height: 40px;
      margin: 15px 0;
    }
  }
`;
