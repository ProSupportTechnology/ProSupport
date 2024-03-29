import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { StyledButton } from "../../../style/button/style";
import { ModalContainer } from "../ModalContainer";
import { StyledEditUser } from "./style";
import { iDataEditUser, iKeys } from "./types";
import { StyledInput } from "../../Input/style";
import { userSchema } from "../../../schemas/userSchema";
import { useUserContext } from "../../../contexts/UserContext";
import { useModalContext } from "../../../contexts/ModalContext";

export const ModalEditProfile = () => {
  const { setIsModEditProfile } = useModalContext();
  const { editUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataEditUser>({ resolver: yupResolver(userSchema) });

  function getData(data: iDataEditUser) {
    const body = data;

    for (let key in body) {
      const keyTyped = key as iKeys;
      if (!body[keyTyped]) {
        delete data[keyTyped];
      }
    }

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
        <StyledButton variant="default">Editar</StyledButton>
      </StyledEditUser>
    </ModalContainer>
  );
};
