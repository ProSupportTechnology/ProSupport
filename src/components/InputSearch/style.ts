import styled from "styled-components";

<<<<<<< HEAD
export const StyledForm = styled.div`
  background-color: #262626;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
=======
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
>>>>>>> 2c046015fb296b74a09b0801156ce3ac1b252553

  input {
    background: transparent;
    color: white;
    width: 100%;
  }

  button {
    background: transparent;
    font-size: 15px;
    color: var(--white);
    svg {
    font-size: 1.5rem;
    color: var(--gray-0);
  }
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
