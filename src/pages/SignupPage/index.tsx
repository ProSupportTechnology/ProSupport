import { FormSignup } from "./components/FormSignup"
import { StyledRegister } from "./style"
import { StyledButtonLink } from "../../style/buttonLink/style"
import logo from "../../assets/logo.png"

export const SignupPage = () => {
  return (
    <>
      <StyledRegister>
        <div className="containerRegisterLogin">
          <img src={logo} alt="Logo Pro Support" />
          <StyledButtonLink variant="theme-register-login" to="/login">
            Login
          </StyledButtonLink>
        </div>
        <FormSignup />
      </StyledRegister>
    </>
  )
}
