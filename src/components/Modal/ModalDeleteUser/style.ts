import styled from "styled-components";

export const StyledDeleteUser = styled.div`
  p {
    color: var(--white);
    margin-top: 50px;
    display: flex;
    font-size: 25px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    margin-top: 60px;

    @media (max-width: 768px) {
      margin-top: 40px;
    }

    button {
      color: var(--white);
      font-weight: 700;
      width: 130px;
      height: 40px;
      font-size: 20px;

      @media (max-width: 768px) {
        width: 90px;
        font-size: 15px;
      }
    }
  }
`;
