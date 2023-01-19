import { useModalContext } from "../../../contexts/ModalContext";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { ModalContainer } from "../ModalContainer";
import { StyledDeleteQuestion } from "./styles";

export const ModalDeleteQuestion = () => {
  const { deleteQuestion, questionId } = useQuestionContext();
  const { setIsModDeleteQuestOpen } = useModalContext();

  return (
    <div>
      <ModalContainer setIsModOpen={setIsModDeleteQuestOpen}>
        <StyledDeleteQuestion>
          <p>Deseja deletar a pergunta?</p>
          <div>
            <StyledButton
              variant="default"
              onClick={() => {
                deleteQuestion(questionId);
                setIsModDeleteQuestOpen(false);
              }}
            >
              Sim
            </StyledButton>
            <StyledButton variant="theme-modal-red" onClick={() => setIsModDeleteQuestOpen(false)}>
              Não
            </StyledButton>
          </div>
        </StyledDeleteQuestion>
      </ModalContainer>
    </div>
  );
};
