import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledTextArea } from "../../TextArea/style";
import { StyledButton } from "../../../style/button/style";
import { StyledModalResponse } from "../../../style/modalResponse/style";
import { ModalContainer } from "../ModalContainer";

export const ModalEditResponse = () => {
  const { setIsModEditRespOpen } = useQuestionContext();

  return (
    <ModalContainer setIsModOpen={setIsModEditRespOpen}>
      <StyledModalResponse>
        <p>Editar resposta</p>
        <form>
          <StyledTextArea
            placeholder="Edite sua resposta aqui"
            label="Edite sua resposta"
          />
          <StyledButton variant="default">Editar</StyledButton>
        </form>
      </StyledModalResponse>
    </ModalContainer>
  );
};
