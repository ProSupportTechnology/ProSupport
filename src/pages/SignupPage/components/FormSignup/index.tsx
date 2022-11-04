import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiUser3Fill } from "react-icons/ri";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { StyledFormSignup } from "./style";
import { StyledInput } from "../../../../components/Input/style";
import { StyledButtonLink } from "../../../../style/buttonLink/style";

export const FormSignup = () => {
  const [password, SetPassword] = useState(false);
  const [confirmPassword, SetConfirmPassword] = useState(false);
  return (
    <>
      <StyledFormSignup>
        <h1>Cadastras-se</h1>
        <div>
          <StyledInput type="text" name="name" label="Nome do Usuario" />
          <RiUser3Fill />
        </div>
        <div>
          <StyledInput type="email" name="email" label="Email do Usuario" />
          <MdEmail />
        </div>
        <div>
          <StyledInput
            type={password ? "password" : "text"}
            name="password"
            label="Senha do Usuario"
          />
          {password ? (
            <AiFillEye onClick={() => SetPassword(true)} />
          ) : (
            <AiFillEyeInvisible onClick={() => SetPassword(false)} />
          )}
        </div>
        <div>
          <StyledInput
            type={confirmPassword ? "password" : "text"}
            name="confirmpassword"
            label="Confirme sua senha"
          />
          {confirmPassword ? (
            <AiFillEye onClick={() => SetConfirmPassword(true)} />
          ) : (
            <AiFillEyeInvisible onClick={() => SetConfirmPassword(false)} />
          )}
        </div>
        <StyledButtonLink variant="theme-3" to="./singnup">
          Cadastrar
        </StyledButtonLink>
      </StyledFormSignup>
    </>
  );
};
