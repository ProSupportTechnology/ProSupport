import { StyledButton } from "../../../style/button/style";
import { ModalContainer } from "../ModalContainer";
import { StyledCreateResponse } from "./style";

export const ModalCreateResponse = () => {
  return (
    <ModalContainer>
      <StyledCreateResponse>
        <p>Resposta</p>
        <textarea
          name="textResponse"
          id="textResponse"
          placeholder="Insira sua resposta aqui..."
        ></textarea>
        <StyledButton variant="default">Responder</StyledButton>
      </StyledCreateResponse>
    </ModalContainer>
  );
};
