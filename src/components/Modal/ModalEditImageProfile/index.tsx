import { ModalContainer } from "../ModalContainer";
import { StyledEditUserPhoto } from "./style";

export const ModalEditImageProfile = () => {
  return (
    <div>
      <ModalContainer>
        <StyledEditUserPhoto>
          <p>Editar foto de perfil</p>
        </StyledEditUserPhoto>
      </ModalContainer>
    </div>
  );
};
