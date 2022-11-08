import styled from "styled-components";

export const StyleProfile = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background-image: url("https://i.imgur.com/xNMEX8F.png");
  background-size: cover;
  background-repeat: no-repeat;
`;
export const StyleMain = styled.main`
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h1 {
    color: white;
    width: 100%;
    text-align: left;
  }
  p {
    width: 100%;
    color: white;
    height: max-content;
    min-height: 320px;
    text-align: justify;
    border-radius: 15px;
    background-color: grey;
    padding: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (min-width: 768px) {
      min-height: 300px;
    }
  }
`;
export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > button {
    width: min-content;
    white-space: nowrap;
    border: solid 2px var(--white);
    text-align: center;
    padding: 10px 15px;
  }
`;
