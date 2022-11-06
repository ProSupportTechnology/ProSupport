import styled from "styled-components"

export const StyledAllUsersPage = styled.div`
  &.backgroundDash {
    background-image: url("Bg-images/Background1.png");
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
  }

  .containerMain {
    padding: 130px 15px 40px 15px;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
      padding: 50px 50px 40px 180px;
    }

    h1 {
      color: var(--gray-0);
      margin-bottom: 12px;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      color: var(--gray-0);

      li {
        display: flex;
        justify-content: space-between;
        background-color: var(--gray-3);
        padding: 16px;
        border-radius: 20px;

        figure {
          width: 100px;
          height: 100px;

          @media (min-width: 768px) {
            width: 150px;
            height: 150px;
          }

          button {
            display: none;
          }
        }

        div {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          flex: 1 1 auto;
          padding: 0 20px;
        }

        button {
          height: fit-content;
          color: var(--gray-0);
          background-color: transparent;
          font-size: 16px;
          transition: 0.1s;

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }
`
