import styled from "styled-components";

export const StyledQuestionCard = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  height: 150px;
  width: 99%;
  color: var(--gray-0);
  padding: 12px;
  transition: 0.5s;
  background: -webkit-linear-gradient(to left, #000000, #434343);
  background: linear-gradient(to left, #000000, #434343);
  border: 2px solid var(--gray-1);
  border-radius: 20px;
  @media (min-width: 768px) {
    height: 180px;
  }

  &:hover {
    background: #4f4d8c;
    background: linear-gradient(90deg, #4f4d8c 0%, #807ddb 55%, #5f5da6 100%);
    background: -webkit-linear-gradient(90deg, #4f4d8c 0%, #807ddb 55%, #5f5da6 100%);
    box-shadow: 10px 10px 20px black;
  }
  .mobileContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 70%;
    height: 100%;
    @media (min-width: 768px) {
      flex-direction: row;
      width: 100%;
    }
  }
  .imageContainer {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    width: 145px;
    @media (min-width: 768px) {
      align-items: center;
    }
    figure {
      display: none;
      @media (min-width: 768px) {
        display: unset;
      }
    }
    p {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .textContainer {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 16px;
  }
  .btnContainer {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 768px) {
      width: 20%;
    }
  }
  .techConatiner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > p {
      border: solid 1px var(--white);
      border-radius: 5px;
      display: flex;
      align-items: center;
      padding: 0 5px;
    }
    & > button {
      background-color: transparent;
      color: var(--white);
      font-size: 1rem;
      transition: 0.1s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
