import styled from "styled-components";

export const StyleProfile = styled.div`
  min-height: 100vh;
  display: flex;
  background-image: url("https://i.imgur.com/xNMEX8F.png");
  background-size: cover;
  background-repeat: no-repeat;
`;
export const StyleMain = styled.main`
  width: 100%;
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  h1 {
    color: white;
    width: 100%;
    text-align: left;
    font-size: 26px;
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
      min-height: 250px;
    }
  }
`;
export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & > button {
    width: min-content;
    white-space: nowrap;
    border: solid 2px var(--white);
    text-align: center;
    padding: 6px 9px;
  }
`;
