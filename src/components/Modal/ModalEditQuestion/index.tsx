import { CgClose } from "react-icons/cg";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { ModalQuestion } from "../../../style/modalQuestion/style";
import { StyledInput } from "../../Input/style";
import { StyledTextArea } from "../../TextArea/style";
import { ModalContainer } from "../ModalContainer";

export const ModalEditQuestion = () => {
  const { isModEditQuestOpen, setIsModEditQuestOpen } = useQuestionContext();

  return (
    <ModalContainer>
      <ModalQuestion>
        <span
          onClick={() => {
            setIsModEditQuestOpen(!isModEditQuestOpen);
          }}
        >
          <CgClose />
        </span>
        <p>Edite sua questão</p>
        <form>
          <StyledInput
            label="Título"
            name="title"
            type="text"
            className="isModal"
            modalPlaceholder="Edite o título"
          />
          <StyledInput
            label="Tecnologia"
            name="techs"
            type="text"
            className="isModal"
            modalPlaceholder="Edite a tecnologia"
          />
          <StyledTextArea label="Descrição" placeholder="Edite sua Descrição" />
          <StyledButton variant="default">Responder</StyledButton>
        </form>
      </ModalQuestion>
    </ModalContainer>
  );
};
