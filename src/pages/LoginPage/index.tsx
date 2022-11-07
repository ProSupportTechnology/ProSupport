import { StyledRegister } from "../SignupPage/style"
import { FormLogin } from "./components/FormLogin"
import { StyledButtonLink } from "../../style/buttonLink/style"

export const LoginPage = () => {
  return (
    <StyledRegister>
      <div className="containerRegisterLogin">
        <StyledButtonLink variant="theme-register-login" to="/signup">
          Cadastre-se
        </StyledButtonLink>
      </div>
      <FormLogin />
    </StyledRegister>
  )
}
