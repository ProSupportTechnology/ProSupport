import styled from "styled-components";

export const StyledModalQuestion = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--gray-0);

  span {
    color: white;
    position: absolute;
    right: 10px;
    margin: 15px;
    cursor: pointer;
  }

  p {
    font-size: 20px;
    margin: 10px 0;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;

    .isModal {
      margin-bottom: 30px;
    }
  }

  button {
    width: 97px;
    height: 35px;
    align-self: flex-end;
    margin: 5px 10px;
  }

  @media (min-width: 768px) {
    height: 500px;
    width: 530px;
    font-size: 25px;

    form {
      .isModal {
        margin-bottom: 35px;
      }
    }

    p {
      margin: 20px 0;
    }

    button {
      width: 105px;
      margin: 15px 0;
    }
  }
`;
