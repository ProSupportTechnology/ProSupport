import styled from "styled-components";

export const StyledQuestionCard = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 200px;
  width: 98%;
  color: var(--gray-0);
  gap: 8px;
  transition: 0.5s;
  background: -webkit-linear-gradient(to left, #000000, #434343);
  background: linear-gradient(to left, #000000, #434343);
  border: 2px solid var(--gray-1);
  border-radius: 20px;

  &:hover {
    background: #4f4d8c;
    background: linear-gradient(90deg, #4f4d8c 0%, #807ddb 55%, #5f5da6 100%);
    background: -webkit-linear-gradient(
      90deg,
      #4f4d8c 0%,
      #807ddb 55%,
      #5f5da6 100%
    );
    box-shadow: 10px 10px 20px black;
  }
  .imageContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 145px;
  }

  .textContainer {
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 16px;
  }
  .btnContainer {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .techConatiner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
      background-color: transparent;
      color: var(--white);
      font-size: 1rem;
      &:hover {
      transform: scale(1.2);
      transition: 0.1s;
    }
    }
  }

  .buttonReply {
    align-self: flex-end;
  }

  @media (min-width: 768px) {
    height: 200px;

    .imageContainer {
      border-radius: 20px;

      figure {
        width: 150px;
        height: 150px;
        border-radius: 20px;
      }

      img {
        border-radius: 20px;
      }
    }

    div {
      padding: 10px;
      background: none;
      border-radius: none;
    }
    .button {
      cursor: pointer;
      transform: scale(1);

      &:hover {
        transform: scale(1.5);
      }
    }

    .questionContent {
      min-height: 200px;
      background-color: #4f4d8c;
    }
  }
`;
