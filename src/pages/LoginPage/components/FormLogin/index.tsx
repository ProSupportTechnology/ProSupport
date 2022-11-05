import { useForm } from "react-hook-form";
import { StyledInput } from "../../../../components/Input/style";
import { StyledFormLogin } from "./style";
import { iLogin } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loginschema } from "../../../../schemas/loginSchema";
import { useUserContext } from "../../../../contexts/UserContext";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({ resolver: yupResolver(Loginschema) });

  const { handleLogin } = useUserContext()

  return (
    <>
      <StyledFormLogin onSubmit={handleSubmit(handleLogin)}>
        <h1 className="title one">Login</h1>
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
        <button type="submit">Logar</button>
      </StyledFormLogin>
    </>
  );
};
