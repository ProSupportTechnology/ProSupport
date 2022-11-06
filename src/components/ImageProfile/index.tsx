import { StyledImageProfile } from "../../components/ImageProfile/style"
import { iImageProfile } from "./types"

export const ImageProfile = ({ image, userName }: iImageProfile) => {
  return (
    <>
      <StyledImageProfile>
        <img src={image} alt={userName} />
        <button>Editar imagem</button>
      </StyledImageProfile>
    </>
  )
}
