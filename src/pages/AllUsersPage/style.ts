import styled from "styled-components";

export const StyledAllUsersPage = styled.div`
  main {
    h1 {
      color: var(--gray-0);
      margin-bottom: 12px;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      color: var(--gray-0);
      overflow: auto;
      height: 586px;
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
      ::-webkit-scrollbar-track-piece {
        background: var(--gray-1);
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb {
        background: var(--gray-3);
        border-radius: 5px;
      }

      li {
        width: 99%;
        display: flex;
        justify-content: space-between;
        background-color: var(--gray-3);
        padding: 16px;
        border-radius: 20px;
        &:hover {
          background: #4f4d8c;
          background: linear-gradient(
            90deg,
            #4f4d8c 0%,
            #807ddb 55%,
            #5f5da6 100%
          );
          background: -webkit-linear-gradient(
            90deg,
            #4f4d8c 0%,
            #807ddb 55%,
            #5f5da6 100%
          );
          box-shadow: 10px 10px 20px black;
        }

        figure {
          width: 100px;
          min-width: 100px;
          height: 110px;

          @media (min-width: 768px) {
            width: 110px;
            min-width: 110px;
            height: 120px;
          }
        }

        div {
          max-height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          flex: 1 1 auto;
          padding: 0 20px;
          word-break: break-all;

          @media (min-width: 768px) {
            max-height: 150px;
          }

          span {
            overflow: auto;
            ::-webkit-scrollbar {
              width: 10px;
              height: 10px;
            }
            ::-webkit-scrollbar-track-piece {
              background: var(--gray-1);
              border-radius: 5px;
            }
            ::-webkit-scrollbar-thumb {
              background: var(--gray-3);
              border-radius: 5px;
            }
          }
        }

        button {
          min-width: 20px;
          height: fit-content;
          color: var(--gray-0);
          background-color: transparent;
          font-size: 1rem;
          transition: 0.1s;

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }
`;
