import { StyledButton } from "../../../style/button/style";
import { ModalResponse } from "../../../style/modalResponse/style";
import { ModalContainer } from "../ModalContainer";

export const ModalEditResponse = () => {
  return (
    <ModalContainer>
      <ModalResponse>
        <p>Editar resposta</p>
        <textarea
          name="textResponse"
          id="textResponse"
          placeholder="Insira sua resposta aqui..."
        ></textarea>
        <StyledButton variant="default">Editar</StyledButton>
      </ModalResponse>
    </ModalContainer>
  );
};
