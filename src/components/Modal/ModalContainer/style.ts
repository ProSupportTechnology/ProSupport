import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;
  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
  }
  .content {
    position: relative;
    display: flex;
    justify-content: center;
    width: 300px;
    min-height: 300px;
    border: 2px solid var(--gray-1);
    background-color: #434343;
    border-radius: 30px;

    span {
      color: white;

      position: absolute;

      right: 10px;
      margin: 15px;

      cursor: pointer;
    }

    @media (min-width: 768px) {
      width: 570px;
    }
  }
`;
