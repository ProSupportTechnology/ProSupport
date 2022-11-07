import { FormSignup } from "./components/FormSignup"
import { StyledRegister } from "./style"
import { StyledButtonLink } from "../../style/buttonLink/style"

export const SignupPage = () => {
  return (
    <>
      <StyledRegister>
        <div className="containerRegisterLogin">
          <StyledButtonLink variant="theme-register-login" to="/login">
            Login
          </StyledButtonLink>
        </div>
        <FormSignup />
      </StyledRegister>
    </>
  )
}
