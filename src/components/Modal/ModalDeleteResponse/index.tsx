import { useModalContext } from "../../../contexts/ModalContext";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { ModalContainer } from "../ModalContainer";
import { StyledDeleteUser } from "../ModalDeleteUser/style";

export const ModalDeleteResponse = () => {
  const { deleteAnswer } = useQuestionContext();
  const { setIsModDeleteRespOpen } = useModalContext();

  return (
    <div>
      <ModalContainer setIsModOpen={setIsModDeleteRespOpen}>
        <StyledDeleteUser>
          <p>Deseja deletar sua resposta?</p>
          <div>
            <StyledButton
              onClick={() => {
                deleteAnswer();
                setIsModDeleteRespOpen(false);
              }}
              variant="default"
            >
              Sim
            </StyledButton>
            <StyledButton variant="theme-modal-red" onClick={() => setIsModDeleteRespOpen(false)}>
              Não
            </StyledButton>
          </div>
        </StyledDeleteUser>
      </ModalContainer>
    </div>
  );
};
