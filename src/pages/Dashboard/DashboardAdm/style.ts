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
    margin: 40px 0px 20px 0px;
    margin-left: 50px;

    align-self: baseline;

    color: var(--white);
  }

  .questionArea {
    height: 100%;

    overflow: hidden;
    overflow-y: scroll;

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

  .questionAreaTitle {
    margin-top: 70px;
    margin: 20px;
  }

  .search {
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 770px) {
    flex-direction: column;

    margin: 100px 0px 0px 0px;

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
