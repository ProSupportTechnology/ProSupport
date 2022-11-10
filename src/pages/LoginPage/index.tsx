import { StyledRegister } from "../SignupPage/style";
import { FormLogin } from "./components/FormLogin";
import { StyledButtonLink } from "../../style/buttonLink/style";
import logo from "../../assets/logo.png";

export const LoginPage = () => {
  return (
    <StyledRegister>
      <div className="containerRegisterLogin">
        <img src={logo} alt="Logo Pro Support" />
        <StyledButtonLink variant="theme-register-login" to="/signup">
          Cadastre-se
        </StyledButtonLink>
      </div>
      <FormLogin />
    </StyledRegister>
  );
};
