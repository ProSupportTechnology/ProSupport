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
  const { setIsModCreateRespOpen } = useQuestionContext();

  const { register, handleSubmit } = useForm<iDataResponse>({
    resolver: yupResolver(ResponseSchema),
  });

  function sendResponse(data: iDataResponse) {
    //recebe userId
    //recebe questionId
    const body = { ...data, questionId: 1, userId: 1 };
    console.log(body);
    //realizar requisição da pergunta com o body acima
    //POST/responses
    //Toast correpondentes no try/catch
    //setIsModCreateRespOpen(false) em caso de sucesso
  }

  return (
    <ModalContainer setIsModOpen={setIsModCreateRespOpen}>
      <StyledModalResponse>
        <p>Responder</p>
        <form onSubmit={handleSubmit(sendResponse)}>
          <StyledTextArea
            register={register("description")}
            label="Resposta"
            placeholder="Insira sua resposta aqui"
          />
          <StyledButton variant="default">Responder</StyledButton>
        </form>
      </StyledModalResponse>
    </ModalContainer>
  );
};
