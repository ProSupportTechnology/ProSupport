import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { StyledModalResponse } from "../../../style/modalResponse/style";
import { StyledTextArea } from "../../TextArea/style";
import { ModalContainer } from "../ModalContainer";

export const ModalCreateResponse = () => {
  const { setIsModCreateRespOpen } = useQuestionContext();

  return (
    <ModalContainer setIsModOpen={setIsModCreateRespOpen}>
      <StyledModalResponse>
        <p>Resposta</p>
        <form>
          <StyledTextArea placeholder="Insira sua resposta aqui" />
          <StyledButton variant="default">Responder</StyledButton>
        </form>
      </StyledModalResponse>
    </ModalContainer>
  );
};
