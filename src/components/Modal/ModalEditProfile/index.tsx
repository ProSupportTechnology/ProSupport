import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { QuestionSchema } from "../../../schemas/questionSchema";
import { StyledButton } from "../../../style/button/style";
import { StyledInput } from "../../Input/style";
import { ModalContainer } from "../ModalContainer";
import { StyledEditUser } from "./style";
import { iDataEditUser } from "./types";

export const ModalEditImageProfile = () => {
  const { setIsModDeleteQuestOpen } = useQuestionContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataEditUser>({ resolver: yupResolver(QuestionSchema) });

  function editProfile(data: iDataEditUser) {
    console.log(data);
  }

  return (
    <div>
      <ModalContainer setIsModOpen={setIsModDeleteQuestOpen}>
        <StyledEditUser onSubmit={handleSubmit(editProfile)}>
          <p>Editar perfil</p>
          <StyledInput
            errors={errors.title}
            register={register("title")}
            label="Editar título"
            name="title"
            type="text"
            className="isModal"
            modalPlaceholder="Digite o novo título"
          />

          <StyledInput
            errors={errors.email}
            register={register("email")}
            label="Editar email"
            name="email"
            type="text"
            className="isModal"
            modalPlaceholder="Digite o novo email"
          />

          <StyledInput
            errors={errors.password}
            register={register("password")}
            label="Editar senha"
            name="senha"
            type="text"
            className="isModal"
            modalPlaceholder="Digite a nova senha"
          />

          <StyledInput
            errors={errors.bio}
            register={register("bio")}
            label="Editar bio"
            name="bio"
            type="text"
            className="isModal"
            modalPlaceholder="Digite a nova bio"
          />

          <StyledInput
            errors={errors.photo}
            register={register("photo")}
            label="Editar foto"
            name="photo"
            type="text"
            className="isModal"
            modalPlaceholder="Digite o URL da nova foto"
          />
          <StyledButton variant="default">Editar</StyledButton>
        </StyledEditUser>
      </ModalContainer>
    </div>
  );
};
