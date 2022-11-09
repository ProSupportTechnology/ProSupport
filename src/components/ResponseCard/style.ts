import styled from "styled-components";
import { StyledQuestionCard } from "../QuestionCard/style";

export const StyledResponseCard = styled(StyledQuestionCard)`
  background: var(--gray-4);
  .techConatiner {
    justify-content: flex-end;
    gap: 1rem;
    & > button {
      font-size: 20px;
    }
  }
`;
