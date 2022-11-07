import styled from "styled-components";

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
    height: 40%;
    display: flex;
    align-items: center;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    padding: 16px;
    img {
      width: 68%;
      @media (min-width: 1000px) {
        width: 100%;
      }
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;

    .containerRegisterLogin {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 73%;
      border-radius: 20px 0px 0px 20px;
    }
  }
`;
