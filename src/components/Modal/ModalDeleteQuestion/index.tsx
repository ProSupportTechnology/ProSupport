import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { ModalContainer } from "../ModalContainer";
import { StyledDeleteQuestion } from "./styles";

export const ModalDeleteQuestion = () => {
  const { setIsModDeleteQuestOpen } = useQuestionContext();

  return (
    <div>
      <ModalContainer setIsModOpen={setIsModDeleteQuestOpen}>
        <StyledDeleteQuestion>
          <p>Deseja deletar a pergunta?</p>
          <div>
            <StyledButton variant="default">Sim</StyledButton>
            <StyledButton
              onClick={() => {
                setIsModDeleteQuestOpen(false);
              }}
              variant="theme-modal-red"
            >
              Não
            </StyledButton>
          </div>
        </StyledDeleteQuestion>
      </ModalContainer>
    </div>
  );
};
