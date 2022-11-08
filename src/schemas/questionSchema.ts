import * as yup from "yup";

export const QuestionSchema = yup.object({
  title: yup.string().required("Título é obrigatório"),
  tech: yup.string().required("Tecnologia é obrigatória"),
  description: yup.string().required("Descrição é obrigatória"),
});
