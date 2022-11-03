import styled from "styled-components";

export const StyledHeaderLandingPage = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #262626;
  width: 100vw;
  height: 390px;

  div {
    img {
      width: 209px;
      height: 165px;
    }

    p {
      color: #ffffff;
    }
  }

  .headerDetails {
    display: none;
  }

  .headerButtons {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 171px;

    .headerInfos {
      display: flex;
      align-items: center;
      gap: 50px;
    }

    .headerDetails {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .headerButtons {
      flex-direction: row;
      gap: 20px;
      margin-right: 50px;
    }
  }
`;
