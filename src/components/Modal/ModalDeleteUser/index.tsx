import { useQuestionContext } from "../../../contexts/QuestionContext";
import { useUserContext } from "../../../contexts/UserContext";
import { StyledButton } from "../../../style/button/style";
import { ModalContainer } from "../ModalContainer";
import { StyledDeleteUser } from "./style";

export const ModalDeleteUser = () => {
  const { setIsModDeleteUser } = useQuestionContext();
  const { deleteUser, idUserToDelete } = useUserContext();

  return (
    <div>
      <ModalContainer setIsModOpen={setIsModDeleteUser}>
        <StyledDeleteUser>
          <p>Deseja deletar o usuário?</p>
          <div>
            <StyledButton
              variant="default"
              onClick={() => {
                deleteUser(idUserToDelete);
                setIsModDeleteUser(false);
              }}
            >
              Sim
            </StyledButton>
            <StyledButton
              onClick={() => {
                setIsModDeleteUser(false);
              }}
              variant="theme-modal-red"
            >
              Não
            </StyledButton>
          </div>
        </StyledDeleteUser>
      </ModalContainer>
    </div>
  );
};
