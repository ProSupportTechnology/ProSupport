import * as yup from "yup";

export const userSchema = yup.object({
  title: yup.string(),
  email: yup.string().email("email inválido"),
  password: yup.string(),
  // .matches(/[a-z]/, "Deve haver ao menos uma letra minúscula")
  // .matches(/(\d)/, "Deve haver ao menos um número")
  // .matches(/(\W)|_/, "Deve haver ao menos um caracter especial")
  // .matches(/.{8,}/, "Deve haver no mínimo 8 caracteres"),
  bio: yup.string(),
  photo: yup.string(),
});
