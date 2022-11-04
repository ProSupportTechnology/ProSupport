import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { HiUser } from "react-icons/hi2";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { StyledContainer, StyledFormSignup } from "./style";
import { StyledInput } from "../../../../components/Input/style";
import { useForm } from "react-hook-form";
import { iSignup } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
// Oi
export const FormSignup = () => {
  const [password, SetPassword] = useState(false);
  const [confirmPassword, SetConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSignup>({ resolver: yupResolver() });

  return (
    <>
      <StyledFormSignup onSubmit={handleSubmit()}>
        <h1 className="title one">Cadastra-se</h1>
        <StyledContainer>
          <StyledInput
            errors={errors.name}
            register={register(`name`)}
            type="text"
            name="name"
            label="Nome do Usuario"
          />
          <HiUser />
        </StyledContainer>
        <StyledContainer>
          <StyledInput
            errors={errors.email}
            register={register(`email`)}
            type="email"
            name="email"
            label="Email do Usuario"
          />
          <MdEmail />
        </StyledContainer>
        <StyledContainer>
          <StyledInput
            type={password ? "text" : "password"}
            name="password"
            label="Senha do Usuario"
            errors={errors.password}
            register={register(`password`)}
          />
          {password ? (
            <AiFillEye onClick={() => SetPassword(false)} />
          ) : (
            <AiFillEyeInvisible onClick={() => SetPassword(true)} />
          )}
        </StyledContainer>
        <StyledContainer>
          <StyledInput
            type={confirmPassword ? "text" : "password"}
            name="confirmPassword"
            label="Confirme sua senha"
            errors={errors.confirmPassword}
            register={register(`confirmPassword`)}
          />
          {confirmPassword ? (
            <AiFillEye onClick={() => SetConfirmPassword(false)} />
          ) : (
            <AiFillEyeInvisible onClick={() => SetConfirmPassword(true)} />
          )}
        </StyledContainer>
        <button type="submit">Cadastrar</button>
      </StyledFormSignup>
    </>
  );
};
