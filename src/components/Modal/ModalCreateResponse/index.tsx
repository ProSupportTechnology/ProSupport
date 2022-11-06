import { CgClose } from "react-icons/cg";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { StyledModalResponse } from "../../../style/modalResponse/style";
import { StyledTextArea } from "../../TextArea/style";
import { ModalContainer } from "../ModalContainer";

export const ModalCreateResponse = () => {
  const { isModCreateRespOpen, setIsModCreateRespOpen } = useQuestionContext();

  return (
    <ModalContainer>
      <StyledModalResponse>
        <span
          onClick={() => {
            setIsModCreateRespOpen(!isModCreateRespOpen);
          }}
        >
          <CgClose />
        </span>
        <p>Resposta</p>
        <form>
          <StyledTextArea placeholder="Insira sua resposta aqui" />
          <StyledButton variant="default">Responder</StyledButton>
        </form>
      </StyledModalResponse>
    </ModalContainer>
  );
};
