import * as yup from "yup";

export const ResponseSchema = yup.object({
  description: yup.string().required("Descrição é obrigatória"),
});
