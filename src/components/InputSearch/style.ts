import styled from "styled-components";

export const StyledForm = styled.div`
  background-color: #262626;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    background: transparent;
    color: white;
    width: 100%;
  }

  button {
    background: transparent;
    font-size: 15px;
    color: var(--white);
  }

  @media (min-width: 768px) {
    input {
      font-size: 20px;
    }

    button {
      font-size: 30px;
    }
  }
`;
