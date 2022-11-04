import { StyledButton } from "../../../style/button/style";
import { ModalContainer } from "../ModalContainer";
import { StyledEditResponse } from "./style";

export const ModalEditResponse = () => {
  return (
    <ModalContainer>
      <StyledEditResponse>
        <p>Editar resposta</p>
        <textarea
          name="textResponse"
          id="textResponse"
          placeholder="Insira sua resposta aqui..."
        ></textarea>
        <StyledButton variant="default">Editar</StyledButton>
      </StyledEditResponse>
    </ModalContainer>
  );
};
