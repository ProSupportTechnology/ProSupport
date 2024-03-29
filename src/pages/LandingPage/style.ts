import styled from "styled-components";

export const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    margin-top: 120px;
  }

  @media (min-width: 1024px) {
    overflow-x: hidden;

    main {
      margin: 120px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  @media (min-width: 1440px) {
    justify-content: space-between;
  }
`;

export const SectionServices = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  .servicesContent {
    padding: 0 30px;
    color: var(--white);

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 15px;

      p {
        margin-bottom: 30px;
      }

      h1 {
        font-size: 2rem;
      }
    }
  }

  .servicesImage {
    display: none;
  }

  @media (min-width: 768px) {
    .servicesImage {
      align-self: center;
      display: block;

      img {
        margin-top: 10px;
        width: 400px;
        height: 300px;
      }
    }
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;

    .servicesImage {
      margin-left: 15px;

      img {
        margin-top: 0;
        width: 495px;
        height: 339px;
      }
    }

    .servicesContent {
      padding: 0;
    }
  }
`;

export const SectionTeam = styled.section`
  margin: 30px 0;

  ul {
    overflow: auto;
    display: flex;
    width: 100%;
    gap: 10px;
    color: var(--white);
    padding: 0 10px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      min-width: 260px;
      height: 200px;
      background: linear-gradient(90deg, #8d09ec 0%, #807ddb 55%, #8d09ec 100%);
    }

    @media (min-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    @media (min-width: 1440px) {
      justify-content: space-around;
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
      display: flex;
      gap: 5px;
      text-decoration: none;
      color: var(--white);
    }
  }
`;
