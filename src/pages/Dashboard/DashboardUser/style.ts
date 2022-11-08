import styled from "styled-components";

export const StyledAskQuestionsArea = styled.div`
  width: 100%;
  height: 90px;
  padding: 20px;

  border: 1px solid var(--gray-1);
  border-radius: 20px;

  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledMainUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  height: 100vh;
  margin-top: 50px;

  .title {
    color: var(--white);
    text-align: left;
    font-size: 1rem;
    
    margin: 30px 10px;
    height: auto;
  }

  .noQuestions {
    font-size: 1rem;
    color: var(--white);
    text-align: left;
  }

  .userQuestionArea {
    width: 90%;
    min-height: 300px;
    overflow-y: scroll;

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

