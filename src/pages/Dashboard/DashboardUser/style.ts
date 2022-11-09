import styled from "styled-components";

export const StyledAskQuestionsArea = styled.div`
  width: 100%;
  height: 90px;
  padding: 10px;
  gap: 1rem;

  border: 1px solid var(--gray-1);
  border-radius: 20px;

  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 4rem;
  }
`;

export const StyledMainUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    color: var(--white);
    text-align: left;
    font-size: 1.5rem;

    margin: 30px 10px;
    height: auto;
  }

  .noQuestions {
    font-size: 1rem;
    color: var(--white);
    text-align: left;
  }

  .userQuestionArea {
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin-top: 30px;
  }

  .userQuestionArea::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .userQuestionArea::-webkit-scrollbar-track-piece {
    background: var(--gray-1);
    border-radius: 5px;
  }
  .userQuestionArea::-webkit-scrollbar-thumb {
    background: var(--gray-3);
    border-radius: 5px;
  }
`;
