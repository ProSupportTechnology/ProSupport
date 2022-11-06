import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { ModalContainer } from "../ModalContainer";
import { StyledDeleteUser } from "./style";

export const ModalDeleteUser = () => {
  const { setIsModDeleteUser } = useQuestionContext();

  return (
    <div>
      <ModalContainer setIsModOpen={setIsModDeleteUser}>
        <StyledDeleteUser>
          <p>Deseja deletar o usuário?</p>
          <div>
            <StyledButton variant="default">Sim</StyledButton>
            <StyledButton variant="theme-modal-red">Não</StyledButton>
          </div>
        </StyledDeleteUser>
      </ModalContainer>
    </div>
  );
};
