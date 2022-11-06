import styled from "styled-components";

export const StyledModalResponse = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  height: 280px;
  width: 290px;
  color: var(--gray-0);

  span {
    color: white;
    position: absolute;
    right: 10px;
    margin: 15px;
    cursor: pointer;
  }

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
    height: 400px;
    width: 530px;
    font-size: 25px;

    p {
      margin: 25px 0;
    }

    form {
      textarea {
        height: 250px;
      }

      button {
        width: 105px;
        height: 40px;
        margin: 15px 0;
      }
    }
  }
`;
