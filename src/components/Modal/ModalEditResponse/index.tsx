import { CgClose } from "react-icons/cg";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { StyledModalResponse } from "../../../style/modalResponse/style";
import { StyledTextArea } from "../../TextArea/style";
import { ModalContainer } from "../ModalContainer";

export const ModalEditResponse = () => {
  const { isModEditRespOpen, setIsModEditRespOpen } = useQuestionContext();

  return (
    <ModalContainer>
      <StyledModalResponse>
        <span
          onClick={() => {
            setIsModEditRespOpen(isModEditRespOpen);
          }}
        >
          <CgClose />
        </span>
        <p>Editar resposta</p>
        <form>
          <StyledTextArea placeholder="Edite sua resposta aqui" />
          <StyledButton variant="default">Editar</StyledButton>
        </form>
      </StyledModalResponse>
    </ModalContainer>
  );
};
