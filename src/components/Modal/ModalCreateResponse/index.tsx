import { StyledButton } from "../../../style/button/style";
import { ModalResponse } from "../../../style/modalResponse/style";
import { ModalContainer } from "../ModalContainer";

export const ModalCreateResponse = () => {
  return (
    <ModalContainer>
      <ModalResponse>
        <p>Resposta</p>
        <textarea
          name="textResponse"
          id="textResponse"
          placeholder="Insira sua resposta aqui..."
        ></textarea>
        <StyledButton variant="default">Responder</StyledButton>
      </ModalResponse>
    </ModalContainer>
  );
};
