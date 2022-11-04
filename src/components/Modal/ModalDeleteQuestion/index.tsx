import { StyledButton } from "../../../style/button/style";
import { ModalContainer } from "../ModalContainer";
import { StyledDeleteQuestion } from "./styles";

export const ModalDeleteQuestion = () => {
  return (
    <div>
      <ModalContainer>
        <StyledDeleteQuestion>
          <p>Deseja deletar a pergunta?</p>
          <div>
            <StyledButton variant="default">Sim</StyledButton>
            <StyledButton variant="theme-modal-red">Não</StyledButton>
          </div>
        </StyledDeleteQuestion>
      </ModalContainer>
    </div>
  );
};
