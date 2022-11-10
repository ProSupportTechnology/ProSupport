import styled from "styled-components";

export const StyledHeaderLandingPage = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: var(--gray-3);
  width: 100vw;
  height: 120px;
  position: fixed;
  padding: 0 1rem;
  div {
    img {
      width: 230px;
      min-width: 230px;
      height: 165px;
    }

    p {
      color: var(--white);
    }
  }

  .headerDetails {
    display: none;
  }

  .headerButtons {
    a {
      padding: 10px 0;
      border-radius: 30px;
      width: 110px;
      text-align: center;
      text-decoration: none;
      border: 2px solid var(--white);
      color: var(--white);
      @media (min-width: 534px) {
        width: 210px;
      }
    }
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: 2rem;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    height: 120px;

    .headerButtons {
      flex-direction: row;
      gap: 20px;
      margin-right: 50px;
    }
  }

  @media (min-width: 1060px) {
    align-items: center;

    .headerDetails {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .headerInfos {
      display: flex;
      align-items: center;
    }
  }
`;
