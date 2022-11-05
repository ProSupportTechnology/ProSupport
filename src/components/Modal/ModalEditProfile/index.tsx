import { StyledEditUserProfile } from "./style";
import { ModalContainer } from "../ModalContainer";

export const ModalEditProfile = () => {
  return (
    <div>
      <ModalContainer>
        <StyledEditUserProfile>
          <p>Editar perfil</p>
        </StyledEditUserProfile>
      </ModalContainer>
    </div>
  );
};
