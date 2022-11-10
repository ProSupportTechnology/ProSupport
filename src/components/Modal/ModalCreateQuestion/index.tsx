import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { StyledInput } from "../../Input/style";
import { StyledTextArea } from "../../TextArea/style";
import { StyledModalQuestion } from "../../../style/modalQuestion/style";
import { ModalContainer } from "../ModalContainer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { QuestionSchema } from "../../../schemas/questionSchema";
import { iDataQuestion } from "../../../contexts/QuestionContext/types";
import { StyledSelectTechs } from "../../SelectTechs/style";

export const ModalCreateQuestion = () => {
  const { setIsModCreateQuestOpen, createQuestion } = useQuestionContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataQuestion>({ resolver: yupResolver(QuestionSchema) });

  return (
    <ModalContainer setIsModOpen={setIsModCreateQuestOpen}>
      <StyledModalQuestion>
        <p>Informe sua duvida</p>
        <form onSubmit={handleSubmit(createQuestion)}>
          <StyledInput
            errors={errors.title}
            register={register("title")}
            label="Título"
            name="title"
            type="text"
            className="isModal"
            modalPlaceholder="Insira o título"
          />
          <label htmlFor="select" className="text one">
            Tecnologias
          </label>
          <StyledSelectTechs register={register("tech")} id="select" />
          <StyledTextArea
            register={register("description")}
            label="Descrição"
            placeholder="Insira a descrição"
          />
          <StyledButton type="submit" variant="default">
            Postar
          </StyledButton>
        </form>
      </StyledModalQuestion>
    </ModalContainer>
  );
};
