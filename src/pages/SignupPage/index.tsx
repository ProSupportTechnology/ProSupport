import { FormSignup } from "./components/FormSignup";
import Login from"../../assets/Login1.png"
import Background from"../../assets/Landing2.jpg"
import { StyledRegister } from "./style";
import { StyledButtonLink } from "../../style/buttonLink/style";


export const SignupPage = () => {
  return (
    <>
    <StyledRegister style={{ backgroundImage: `url(${Background})` }}>
      <div className="containerRegisterLogin">
        <img src={Login} alt="" className="loginBackground"/>
        <FormSignup />
      </div>
      <StyledButtonLink variant="theme-register-login" to="/login" className="btnLogin">Login</StyledButtonLink> 
    </StyledRegister>
    </>
  );
};
