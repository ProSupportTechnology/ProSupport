import styled from "styled-components";

export const StyledHeaderLandingPage = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  width: 100vw;
  height: 320px;

  div {
    img {
      width: 230px;
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
    display: flex;
    flex-direction: column;
    gap: 20px;

    a {
      padding: 10px 0;
      border-radius: 30px;
      width: 210px;
      text-align: center;
      text-decoration: none;
      border: 2px solid var(--white);
      color: var(--white);
    }
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

  @media (min-width: 1024px) {
    align-items: center;

    .headerDetails {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .headerInfos {
      display: flex;
      align-items: center;
      gap: 50px;
    }
  }
`;
