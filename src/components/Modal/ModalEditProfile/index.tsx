import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { ModalContainer } from "../ModalContainer";
import { StyledEditUser } from "./style";
import { iDataEditUser } from "./types";
import { StyledInput } from "../../Input/style";
import { userSchema } from "../../../schemas/userSchema";

export const ModalEditProfile = () => {
  const { setIsModDeleteQuestOpen } = useQuestionContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataEditUser>({ resolver: yupResolver(userSchema) });

  function editProfile(data: iDataEditUser) {
    console.log(data);
  }

  console.log(errors);

  return (
    <ModalContainer setIsModOpen={setIsModDeleteQuestOpen}>
      <StyledEditUser onSubmit={handleSubmit(editProfile)}>
        <p>Editar perfil</p>
        <StyledInput
          errors={errors.title}
          register={register("title")}
          label="Editar título"
          name="title"
          type="text"
          modalPlaceholder="Digite o novo título"
        />

        <StyledInput
          errors={errors.email}
          register={register("email")}
          label="Editar email"
          name="email"
          type="text"
          modalPlaceholder="Digite o novo email"
        />

        <StyledInput
          errors={errors.password}
          register={register("password")}
          label="Editar senha"
          name="senha"
          type="text"
          modalPlaceholder="Digite a nova senha"
        />

        <StyledInput
          errors={errors.bio}
          register={register("bio")}
          label="Editar bio"
          name="bio"
          type="text"
          modalPlaceholder="Digite a nova bio"
        />

        <StyledInput
          errors={errors.photo}
          register={register("photo")}
          label="Editar foto"
          name="photo"
          type="text"
          modalPlaceholder="Digite o URL da nova foto"
        />
        <StyledButton variant="default">Editar</StyledButton>
      </StyledEditUser>
    </ModalContainer>
  );
};
