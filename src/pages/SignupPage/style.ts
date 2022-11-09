import styled from "styled-components";

export const StyledRegister = styled.div`
  background-image: url("Bg-images/Landing2.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  min-height: 100vh;

  align-items: center;

  .containerRegisterLogin {
    background-image: url("Bg-images/Bg-login-signup.png");
    width: 90%;
    max-width: 400px;
    min-height: 270px;
    height: 40%;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    border-radius: 20px 20px 0px 0px;
    a {
      padding: 8px 15px;
      @media (min-width: 379px) {
        padding: 15px 30px;
      }
    }
    img {
      width: 100%;
      @media (min-width: 1000px) {
        width: 100%;
      }
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    
    .containerRegisterLogin {
      height: 444px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      border-radius: 20px 0px 0px 20px;
    }
  }
`;
