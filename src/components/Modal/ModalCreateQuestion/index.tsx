import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { StyledInput } from "../../Input/style";
import { StyledTextArea } from "../../TextArea/style";
import { StyledModalQuestion } from "../../../style/modalQuestion/style";
import { ModalContainer } from "../ModalContainer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { QuestionSchema } from "../../../schemas/questionSchema";

//mover essa interface para o contexto de questions, ajustar o parametro techs caso seja usado o selectTechs
export interface iDataQuestion {
  title: string;
  techs: string | string[];
  description: string;
}

export const ModalCreateQuestion = () => {
  const { setIsModCreateQuestOpen } = useQuestionContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(QuestionSchema) });

  //mover essa função para o contexto quando houver a lógica de pegar o id do usuário ao abrir modal
  //alterar a tipagem do data para o iDataQuestion
  function sendQuestion(data: any) {
    //pegar o id do user(simulei com um chumbado)
    const id = 1;
    const body = { ...data, userId: id };
    console.log(body);
    //realizar requisição da pergunta com o body acima
    //POST/questions
    //Toast correpondentes no try/catch
    //setIsModCreateQuestOpen(false) em caso de sucesso
  }

  return (
    <ModalContainer setIsModOpen={setIsModCreateQuestOpen}>
      <StyledModalQuestion>
        <p>Insira sua questão</p>
        <form onSubmit={handleSubmit(sendQuestion)}>
          <StyledInput
            errors={errors.title}
            register={register("title")}
            label="Título"
            name="title"
            type="text"
            className="isModal"
            modalPlaceholder="Insira o título"
          />
          <StyledInput
            errors={errors.techs}
            register={register("techs")}
            label="Tecnologia"
            name="techs"
            type="text"
            className="isModal"
            modalPlaceholder="Insira a tecnologia"
          />
          <StyledTextArea
            register={register("description")}
            label="Descrição"
            placeholder="Insira a descrição"
          />
          <StyledButton variant="default">Responder</StyledButton>
        </form>
      </StyledModalQuestion>
    </ModalContainer>
  );
};
