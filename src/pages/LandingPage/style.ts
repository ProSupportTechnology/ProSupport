import styled from "styled-components";

export const SectionServices = styled.section`
  margin-top: 50px;
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

export const SectionTeam = styled.section``;
