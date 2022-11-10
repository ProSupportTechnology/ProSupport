import styled from "styled-components";

export const Modal = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99999;


  .content {
    & > span {
      color: white;
      position: absolute;
      right: 10px;
      margin: 15px;
      cursor: pointer;
    }
    position: fixed;
    display: flex;
    justify-content: center;
    width: 90%;
    max-width: 400px;
    min-width: 300px;
    min-height: 200px;
    border: 2px solid var(--gray-1);
    background-color: #434343;
    border-radius: 30px;
    padding: 5px;

    @media (min-width: 768px) {
      width: 570px;
      min-height: 270px;
    }
  }
`;
