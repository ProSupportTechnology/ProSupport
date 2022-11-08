import * as yup from "yup";

export const userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email("email inválido").required(),
  password: yup
    .string()
    .matches(/[a-z]/, "Deve haver ao menos uma letra minúscula")
    .matches(/(\d)/, "Deve haver ao menos um número")
    .matches(/(\W)|_/, "Deve haver ao menos um caracter especial")
    .matches(/.{8,}/, "Deve haver no mínimo 8 caracteres")
    .required(),
  bio: yup.string().required(),
  image: yup.string().required(),
});
