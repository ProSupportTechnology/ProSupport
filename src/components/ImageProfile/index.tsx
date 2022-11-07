import { StyledImageProfile } from "../../components/ImageProfile/style"
import { iImageProps } from "./types"

export const ImageProfile = ({ children }: iImageProps) => {
  return (
    <>
      <StyledImageProfile>{children}</StyledImageProfile>
    </>
  )
}
