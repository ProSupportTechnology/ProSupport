import styled from "styled-components"

export const StyledRegister = styled.div`
  background-image: url("Bg-images/Landing2.jpg");
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  align-items: center;

  .containerRegisterLogin {
    background-image: url("Bg-images/Bg-login-signup.png");
    width: 90%;
    max-width: 400px;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-size: cover;
    margin-top: 20px;
    justify-content: flex-end;
    padding-bottom: 140px;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;

    .containerRegisterLogin {
      width: 100%;
      height: 70%;
      margin-top: 0px;
      border-radius: 20px 0px 0px 20px;
      padding-bottom: 200px;
    }
  }
`
