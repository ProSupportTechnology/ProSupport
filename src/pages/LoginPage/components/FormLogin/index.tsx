import { useForm } from "react-hook-form";
import { StyledInput } from "../../../../components/Input/style";
import { StyledFormLogin } from "./style";
import { iLogin } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loginschema } from "../../../../schemas/loginSchema";
import { useUserContext } from "../../../../contexts/UserContext";
import { StyledButtonLink } from "../../../../style/buttonLink/style";
import { StyledButton } from "../../../../style/button/style";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({ resolver: yupResolver(Loginschema) });

  const { handleLogin } = useUserContext();

  return (
    <>
      <StyledFormLogin onSubmit={handleSubmit(handleLogin)}>
        <div className="divClose">
          <h1 className="title one">Login</h1>
          <StyledButtonLink to="/" variant="theme-register-login">Voltar</StyledButtonLink>
        </div>
        <StyledInput
          errors={errors.email}
          register={register(`email`)}
          type="email"
          name="email"
          label="Email do Usuario"
        />
        <StyledInput
          type="password"
          name="password"
          label="Senha do Usuario"
          errors={errors.password}
          register={register(`password`)}
        />
        <StyledButton variant="theme-register-login" type="submit">Logar</StyledButton>
      </StyledFormLogin>
    </>
  );
};
