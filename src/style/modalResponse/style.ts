import styled from "styled-components";

export const StyledModalResponse = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 100%;
  color: var(--gray-0);

  p {
    text-align: center;
    margin: 15px 0;
  }

  form {
    display: flex;
    flex-direction: column;

    button {
      width: 97px;
      height: 35px;
      align-self: flex-end;
      margin: 10px;
    }
  }

  @media (min-width: 768px) {
    width: 530px;
    font-size: 25px;

    p {
      margin: 25px 0;
    }

    form {
      textarea {
        height: 230px;
      }

      button {
        width: 120px;
        height: 40px;
        margin: 15px 0;
      }
    }
  }
`;
