import * as yup from "yup";

export const ResponseSchema = yup.object({
  description: yup.string().required("Descrição é obrigatória"),
  questionId: yup.number().required("Id é obrigatório"),
  userId: yup.number().required("Id é obrigatório"),
});

export const EditResponseSchema = yup.object({
  description: yup.string().required("Descrição é obrigatória"),
});
