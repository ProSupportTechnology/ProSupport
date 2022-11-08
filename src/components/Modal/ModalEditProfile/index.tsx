import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { StyledButton } from "../../../style/button/style";
import { ModalContainer } from "../ModalContainer";
import { StyledEditUser } from "./style";
import { iDataEditUser } from "./types";
import { StyledInput } from "../../Input/style";
import { userSchema } from "../../../schemas/userSchema";
import { useUserContext } from "../../../contexts/UserContext";

export const ModalEditProfile = () => {
  const { setIsModEditProfile } = useQuestionContext();
  const { editUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataEditUser>({ resolver: yupResolver(userSchema) });

  function getData(data: iDataEditUser) {
    editUser(data);
    setIsModEditProfile(false);
  }

  return (
    <ModalContainer setIsModOpen={setIsModEditProfile}>
      <StyledEditUser onSubmit={handleSubmit(getData)}>
        <p>Editar perfil</p>
        <StyledInput
          className="isModal"
          errors={errors.name}
          register={register("name")}
          label="Editar nome"
          name="name"
          type="text"
          modalPlaceholder="Digite o novo nome"
        />

        <StyledInput
          className="isModal"
          errors={errors.email}
          register={register("email")}
          label="Editar email"
          name="email"
          type="email"
          modalPlaceholder="Digite o novo email"
        />

        <StyledInput
          className="isModal"
          errors={errors.password}
          register={register("password")}
          label="Editar senha"
          name="password"
          type="password"
          modalPlaceholder="Digite a nova senha"
        />

        <StyledInput
          className="isModal"
          errors={errors.bio}
          register={register("bio")}
          label="Editar bio"
          name="bio"
          type="text"
          modalPlaceholder="Digite a nova bio"
        />

        <StyledInput
          className="isModal"
          errors={errors.image}
          register={register("image")}
          label="Editar foto"
          name="image"
          type="text"
          modalPlaceholder="Digite o URL da nova foto"
        />
        <StyledButton variant="default">Editar</StyledButton>
      </StyledEditUser>
    </ModalContainer>
  );
};
