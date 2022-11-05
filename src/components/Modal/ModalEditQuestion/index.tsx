import { StyledButton } from "../../../style/button/style";
import { ModalQuestion } from "../../../style/modalQuestion/style";
import { Input } from "../../Input";
import { ModalContainer } from "../ModalContainer";

export const ModalEditQuestion = () => {
  return (
    <ModalContainer>
      <form>
        <ModalQuestion>
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
        </ModalQuestion>
      </form>
    </ModalContainer>
  );
};
