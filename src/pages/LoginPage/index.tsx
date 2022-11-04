import { StyledInput } from "../../components/Input/style"

export const LoginPage = () => {
  return (
    <div>
      <br />
      <br />
      <StyledInput name="name" label="Nome" type="text" />
      <br />
      <StyledInput name="email" label="Email" type="email" />
      <br />
      <StyledInput name="password" label="Senha" type="password" />
      <br />
      <StyledInput name="confirmPassword" label="Confirmar senha" type="password" />
    </div>
  )
}
