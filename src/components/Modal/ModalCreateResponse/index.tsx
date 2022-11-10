import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { iDataResponse } from "../../../contexts/QuestionContext/types";
import { ResponseSchema } from "../../../schemas/responseSchemas";
import { StyledButton } from "../../../style/button/style";
import { StyledModalResponse } from "../../../style/modalResponse/style";
import { StyledTextArea } from "../../TextArea/style";
import { ModalContainer } from "../ModalContainer";

export const ModalCreateResponse = () => {
  const { setIsModCreateRespOpen, answerQuestion } = useQuestionContext();

  const { register, handleSubmit } = useForm<iDataResponse>({
    resolver: yupResolver(ResponseSchema),
  });

  return (
    <ModalContainer setIsModOpen={setIsModCreateRespOpen}>
      <StyledModalResponse>
        <p>Responder</p>
        <form onSubmit={handleSubmit(answerQuestion)}>
          <StyledTextArea
            register={register("description")}
            label="Resposta"
            placeholder="Insira sua resposta aqui"
          />
          <StyledButton type="submit" variant="default">
            Responder
          </StyledButton>
        </form>
      </StyledModalResponse>
    </ModalContainer>
  );
};
