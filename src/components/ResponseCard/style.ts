import styled from "styled-components";

export const StyledResponseCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  color: var(--gray-0);
  margin-bottom: 10px;
  gap: 0.5rem;
  transition: 0.5s;
  padding: 0px;
  margin-bottom: 20px;

  &:hover > div {
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


  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    padding: 60px 35px;
    background-color: var(--color-primary);
    border: 1px solid var(--gray-1);
    border-radius: 20px;
    transition: 0.5s;
    width: 97%;
    padding: 10px;

    .imageContainer {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 0;
      min-width: 50px;
      min-height: 50px;
      background: none;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      width: 20%;

      figure {
        border-radius: 50%;
        width: 90px;
        height: 90px;
        background: #000000;
        background: -webkit-linear-gradient(to left, #000000, #434343);
        background: linear-gradient(to left, #000000, #434343);
        box-shadow: 5px 10px 10px var(--gray-3);
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .textContainer {
      display: flex;
      flex-direction: row;
      background: none;
      border: none;
      border-radius: none;
      width: 100%;

      padding: 0px;
      background: none;
      border: none;
      align-items: center;
      width: 100%;
      height: 100%;

      h2{
        font-size: 1rem;
        height: auto;
      }

      .questionContent{
        border: none;
        overflow: auto;
        min-height: 100%;
        padding: 5px;
        text-align: center;
        background: none;
        overflow-y: auto;
      }
    }

    .techContainer{
      width: 100%;
      height: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      align-self: end;
      border: none;
      background: none;

      div{
        border: 1px solid var(--gray-1);
        border-radius: 5px;
        height: 25px;
        width: 50%;
        background: none;
        display: flex;
        align-items: center;
        padding: 4px;
        min-width: 85px;
        max-width: 100px;
      }

      h2{
        font-size: 0.8rem;
        padding: 0px;
      }
    }

    .buttonClose {
      transform: scale(2);

      &:hover {
        transform: scale(2.5);
        transition: 0.5s;
      }
    }
  }

  @media (min-width: 768px) {

      padding: 10px;
      height: 250px;

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
        border-radius: none;
      }
      .buttonClose {
        cursor: pointer;
        transform: scale(1);

        &:hover {
          transform: scale(1.5);
        }
      }

      .questionContent{
      min-height: 200px;
    }
    }

`;
