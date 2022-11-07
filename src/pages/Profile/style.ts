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
  margin-top: 120px;
  width: 100%;
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  h1 {
    color: white;
    width: 90%;
    text-align: left;
  }
  p {
    width: 90%;
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
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  button {
    width: min-content;
    white-space: nowrap;
    border: solid 2px var(--white);
    text-align: center;
    padding: 10px 15px;
  }
`;
export const ProfileDiv = styled.div`
  display: flex;
  gap: 16px;
  figure {
    position: static;
    width: 100px;
    height: 100px;
  }
`;
export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  h2 {
    color: white;
  }
  span {
    color: white;
  }
`;
