import styled from "styled-components";

export const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionServices = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  .servicesContent {
    padding: 0 30px;

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 15px;
    }
  }

  .servicesImage {
    display: none;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .servicesContent {
      padding: 0;
    }

    .servicesImage {
      display: block;
    }
  }
`;

export const SectionTeam = styled.section`
  margin: 30px 0;

  ul {
    overflow: auto;
    display: flex;
    width: 100vw;
    gap: 10px;
    color: #ffff;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      min-width: 280px;
      height: 200px;
      background-color: #4f4d8c;
    }
  }

  .infoMember {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;

    img {
      margin: 5px 0;
      width: 60px;
      height: 60px;
      border-radius: 30px;
    }
  }

  .memberLinks {
    display: flex;
    flex-direction: column;
    margin-top: 5px;

    a {
      text-decoration: none;
      color: #ffff;
    }
  }
`;
