import styled from "styled-components"

export const StyledResponseCard = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  color: var(--gray-0);
  margin-bottom: 10px;
  gap: 0.5rem;
  transition: 0.5s;

  &:hover > div {
    background: #4f4d8c;
    background: linear-gradient(90deg, #4f4d8c 0%, #807ddb 55%, #5f5da6 100%);
    background: -webkit-linear-gradient(90deg, #4f4d8c 0%, #807ddb 55%, #5f5da6 100%);
    box-shadow: 10px 10px 20px black;
  }

  span {
    padding: 0 20px;
    width: 100%;
    text-align: right;
    font-size: 0.9rem;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    padding: 60px 35px;
    background: #434343;
    background: -webkit-linear-gradient(90deg, #434343 0%, #7b7e7b 100%);
    background: linear-gradient(90deg, #434343 0%, #7b7e7b 100%);
    border: 1px solid var(--gray-1);
    border-radius: 20px;
    transition: 0.5s;

    .imageContainer {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 0;
      background: none;
      border: none;
      border-radius: 50%;
      cursor: pointer;

      figure {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        background: #000000;
        background: -webkit-linear-gradient(to left, #000000, #434343);
        background: linear-gradient(to left, #000000, #434343);
        box-shadow: 5px 10px 10px var(--gray-3);
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .textContainer {
      position: relative;
      flex-direction: column;
      flex-wrap: wrap;
      padding: 0;
      background: none;
      border: none;
      border-radius: none;
      width: 86%;
    }

    div {
      padding: 0;
      background: none;
      border: none;
      border-radius: none;

      div {
        .containerTech {
          position: absolute;
          right: 0;
          top: -40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          width: auto;
          font-size: 0.9rem;
          font-weight: 300;

          div {
            margin-right: 10px;
            border: 1px solid var(--gray-1);
            border-radius: 3px;
            padding: 5px 25px;
          }
        }
      }
    }

    .buttonEdit {
      transform: scale(2.5);

      &:hover {
        transform: scale(3);
        transition: 0.5s;
      }
    }
  }

  @media (min-width: 768px) {
    div {
      padding: 35px;

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
        padding: 0;
        background: none;
        border: none;
        border-radius: none;

        div {
          .containerTech {
            position: static;
          }
        }
      }
      .buttonEdit {
        cursor: pointer;
        transform: scale(2);

        &:hover {
          transform: scale(2.5);
        }
      }
    }
  }
`
