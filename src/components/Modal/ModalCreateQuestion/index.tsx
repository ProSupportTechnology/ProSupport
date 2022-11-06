import { CgClose } from "react-icons/cg";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { ModalQuestion } from "../../../style/modalQuestion/style";
import { StyledInput } from "../../Input/style";
import { StyledSelectTechs } from "../../SelectTechs";
import { StyledTextArea } from "../../TextArea/style";
import { ModalContainer } from "../ModalContainer";

export const ModalCreateQuestion = () => {
  const { isModCreateQuestOpen, setIsModCreateQuestOpen } =
    useQuestionContext();

  return (
    <ModalContainer>
      <ModalQuestion>
        <span
          onClick={() => {
            setIsModCreateQuestOpen(!isModCreateQuestOpen);
          }}
        >
          <CgClose />
        </span>
        <p>Insira sua questão</p>
        <form>
          <StyledInput
            label="Título"
            name="title"
            type="text"
            className="isModal"
            modalPlaceholder="Insira o título"
          />
          {/* <StyledSelectTechs /> */}
          <StyledInput
            label="Tecnologia"
            name="techs"
            type="text"
            className="isModal"
            modalPlaceholder="Insira a tecnologia"
          />
          <StyledTextArea label="Descrição" placeholder="Insira a descrição" />
          <StyledButton variant="default">Responder</StyledButton>
        </form>
      </ModalQuestion>
    </ModalContainer>
  );
};
