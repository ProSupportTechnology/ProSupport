import styled from "styled-components";

export const StyleProfile = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  background-image: url("https://i.imgur.com/xNMEX8F.png");
  background-size: cover;
  background-repeat: no-repeat;
`;
export const StyleMain = styled.main`
  margin-top: 120px;
  width: 100%;
  height: 100vh;
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
    text-align: center;
    border-radius: 15px;
    background-color: grey;
    padding: 30px;
  }
`;
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  button {
    width: 120px;
    padding: 8px 20px;
    background-color: transparent;
    border: solid 2px white;
    border-radius: 15px;
    color: white;
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
