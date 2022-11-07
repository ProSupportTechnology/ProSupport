import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { ModalContainer } from "../ModalContainer";
import { StyledDeleteUser } from "../ModalDeleteUser/style";

export const ModalDeleteResponse = () => {
  const { setIsModDeleteUser } = useQuestionContext();

  return (
    <div>
      <ModalContainer setIsModOpen={setIsModDeleteUser}>
        <StyledDeleteUser>
          <p>Deseja deletar sua resposta?</p>
          <div>
            <StyledButton variant="default">Sim</StyledButton>
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
