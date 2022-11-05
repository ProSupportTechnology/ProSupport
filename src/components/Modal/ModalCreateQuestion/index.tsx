import { StyledButton } from "../../../style/button/style";
import { Input } from "../../Input";
import { ModalContainer } from "../ModalContainer";
import { StyledCreateQuestion } from "./style";

export const ModalCreateQuestion = () => {
  return (
    <ModalContainer>
      <StyledCreateQuestion>
        <p>Insira sua questão</p>
        <Input type="text" label="Título" name="title" />
        <Input type="text" label="Tecnologia" name="technology" />
        <label htmlFor="textQuestion">Descrição</label>
        <textarea
          name="textQuestion"
          id="textQuestion"
          placeholder="Insira sua questão aqui..."
        ></textarea>
        <StyledButton variant="default">Responder</StyledButton>
      </StyledCreateQuestion>
    </ModalContainer>
  );
};
