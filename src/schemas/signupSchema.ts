import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório").email("email inválido"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .matches(/[a-z]/, "Deve haver ao menos uma letra minúscula")
    .matches(/(\d)/, "Deve haver ao menos um número")
    .matches(/(\W)|_/, "Deve haver ao menos um caracter especial")
    .matches(/.{8,}/, "Deve haver no mínimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "Deve ser igual a senha"),
});
