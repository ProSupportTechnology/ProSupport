import { StyledButton } from "../../../style/button/style";
import { StyledInput } from "../../Input/style";
import { ModalContainer } from "../ModalContainer";
import { StyledEditUser } from "./style";

export const ModalEditImageProfile = () => {
  return (
    <div>
      <ModalContainer>
        <StyledEditUser>
          <p>Editar perfil</p>
          <div>
            <StyledInput
              name="URLphoto"
              type="text"
              label="Digite o novo nome"
            />

            <StyledInput
              name="URLphoto"
              type="text"
              label="Digite o Unovo email"
            />

            <StyledInput
              name="URLphoto"
              type="text"
              label="Digite a nova senha"
            />

            <StyledInput
              name="URLphoto"
              type="text"
              label="Digite a nova bio"
            />

            <StyledInput
              name="URLphoto"
              type="text"
              label="Digite o URL da nova imagem"
            />
            <StyledButton variant="default">Editar</StyledButton>
          </div>
        </StyledEditUser>
      </ModalContainer>
    </div>
  );
};
