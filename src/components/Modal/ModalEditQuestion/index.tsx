import { StyledButton } from "../../../style/button/style";
import { Input } from "../../Input";
import { ModalContainer } from "../ModalContainer";
import { StyledEditQuestion } from "./style";

export const ModalEditQuestion = () => {
  return (
    <ModalContainer>
      <StyledEditQuestion>
        <p>Edite sua questão</p>
        <Input type="text" label="Título" name="title" />
        <Input type="text" label="Tecnologia" name="technology" />
        <label htmlFor="textQuestion">Descrição</label>
        <textarea
          name="textQuestion"
          id="textQuestion"
          placeholder="Edite sua questão aqui..."
        ></textarea>
        <StyledButton variant="default">Responder</StyledButton>
      </StyledEditQuestion>
    </ModalContainer>
  );
};
