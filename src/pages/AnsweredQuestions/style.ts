import styled from "styled-components";
import { StyledDashboard } from "../Dashboard/DashboardAdm/style";

export const StyledAnsweredQuestions = styled(StyledDashboard)`
  .containerDash {
    & > div {
      display: none;
      @media (min-width: 768px) {
        display: flex;
        width: 99%;
      }
    }
    .questionArea {
      margin-top: 0;
      @media (min-width: 768px) {
        margin-top: 1rem;
      }
    }

    .noQuestions {
      font-size: 1rem;
      color: var(--white);
      text-align: center;
    }
  }
`;
