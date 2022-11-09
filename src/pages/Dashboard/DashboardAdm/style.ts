import styled from "styled-components";

export const StyledDashboard = styled.div`
  .userBio {
    color: white;

    height: 150px;

    border: 1px solid var(--gray-1);
    border-radius: 20px;
    padding: 10px;
    margin-top: 30px;

    overflow-y: auto;
    p {
      text-align: center;
      word-break: break-all;
    }
  }

  .userBio::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .userBio::-webkit-scrollbar-track-piece {
    background: var(--gray-1);
    border-radius: 5px;
  }
  .userBio::-webkit-scrollbar-thumb {
    background: var(--gray-3);
    border-radius: 5px;
  }

  h2 {
    width: 100%;
    height: 100px;

    text-align: center;
    word-break: break-all;
  }

  .questionAreaTitle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--white);
  }

  .questionArea {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    height: 100%;

    overflow: hidden;
    overflow-y: auto;

    margin-top: 30px;
  }

  .questionArea::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .questionArea::-webkit-scrollbar-track-piece {
    background: var(--gray-1);
    border-radius: 5px;
  }
  .questionArea::-webkit-scrollbar-thumb {
    background: var(--gray-3);
    border-radius: 5px;
  }

  .questionCard {
    width: 100%;
    height: 150px;

    border: 2px solid var(--gray-1);
    border-radius: 20px;

    margin-top: 30px;

    color: var(--white);
    font-size: 0.7rem;
  }

  .searchArea {
    display: flex;
    align-self: flex-end;

    width: 70%;
    height: 60px;

    div {
      width: 100%;
    }
  }

  .search {
    margin-top: 1rem;
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div {
      margin-right: 14px;
      width: 70%;
      display: none;
      @media (min-width: 768px) {
        display: flex;
      }
    }
  }

  .noQuestions {
    font-size: 1rem;
    color: var(--white);
    text-align: center;
  }

  @media (max-width: 770px) {
    flex-direction: column;

    .searchArea {
      display: none;
    }

    .questionAreaTitle {
      margin: 20px;
    }
    .search {
      justify-content: flex-start;
    }
  }
`;

export const StyledAdminCard = styled.div`
  display: flex;

  img {
    width: 100%;
    height: 100%;
  }

  .userContent {
    display: flex;
    flex-direction: column;

    margin-left: 40px;

    color: var(--white);
    font-size: 0.7rem;

    width: 50%;
    height: 100px;
  }

  span {
    color: var(--white);
  }
`;
