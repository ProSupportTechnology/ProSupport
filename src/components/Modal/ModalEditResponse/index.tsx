import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledTextArea } from "../../TextArea/style";
import { StyledButton } from "../../../style/button/style";
import { StyledModalResponse } from "../../../style/modalResponse/style";
import { ModalContainer } from "../ModalContainer";
import { useForm } from "react-hook-form";
import { iDataResponse } from "../../../contexts/QuestionContext/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResponseSchema } from "../../../schemas/responseSchemas";
import { useModalContext } from "../../../contexts/ModalContext";

export const ModalEditResponse = () => {
  const { editAnswer } = useQuestionContext();
  const { setIsModEditRespOpen } = useModalContext();

  const { register, handleSubmit } = useForm<iDataResponse>({
    resolver: yupResolver(ResponseSchema),
  });

  return (
    <ModalContainer setIsModOpen={setIsModEditRespOpen}>
      <StyledModalResponse>
        <p>Editar resposta</p>
        <form onSubmit={handleSubmit(editAnswer)}>
          <StyledTextArea
            register={register("description")}
            placeholder="Edite sua resposta aqui"
            label="Edite sua resposta"
          />
          <StyledButton variant="default">Editar</StyledButton>
        </form>
      </StyledModalResponse>
    </ModalContainer>
  );
};
