import { StyledRegister } from "../SignupPage/style";
import { FormLogin } from "./components/FormLogin";
import Background from"../../assets/Landing2.jpg"
import Login from"../../assets/Login1.png"
import { StyledButtonLink } from "../../style/buttonLink/style";

export const LoginPage = () => {
  return (
    <StyledRegister style={{ backgroundImage: `url(${Background})` }}>
       <div className="containerRegisterLogin" style={{ backgroundImage: `url(${Login})`, backgroundPosition: "center" }}>
        <StyledButtonLink variant="theme-register-login" to="/signup" className="btnLogin">Login</StyledButtonLink> 
      </div>
      <FormLogin />
    </StyledRegister>
  );
};
