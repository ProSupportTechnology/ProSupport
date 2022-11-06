import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { StyledInput } from "../../Input/style";
import { StyledSelectTechs } from "../../SelectTechs";
import { StyledTextArea } from "../../TextArea/style";
import { StyledModalQuestion } from "../../../style/modalQuestion/style";
import { ModalContainer } from "../ModalContainer";

export const ModalCreateQuestion = () => {
  const { setIsModCreateQuestOpen } = useQuestionContext();

  return (
    <ModalContainer setIsModOpen={setIsModCreateQuestOpen}>
      <StyledModalQuestion>
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
      </StyledModalQuestion>
    </ModalContainer>
  );
};
