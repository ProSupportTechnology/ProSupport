import { StyledFormSignup } from "./style";
import { StyledInput } from "../../../../components/Input/style";
import { useForm } from "react-hook-form";
import { iSignup } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../../schemas/signupSchema";
import { useUserContext } from "../../../../contexts/UserContext";

export const FormSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSignup>({ resolver: yupResolver(registerSchema) });

  const { handleRegister } = useUserContext()

  return (
    <>
      <StyledFormSignup onSubmit={handleSubmit(handleRegister)}>
        <h1 className="title one">Cadastra-se</h1>
        <StyledInput
          errors={errors.name}
          register={register(`name`)}
          type="text"
          name="name"
          label="Nome do Usuario"
        />
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
        <StyledInput
          type="password"
          name="confirmPassword"
          label="Confirme sua senha"
          errors={errors.confirmPassword}
          register={register(`confirmPassword`)}
        />
        <button type="submit">Cadastrar</button>
      </StyledFormSignup>
    </>
  );
};
