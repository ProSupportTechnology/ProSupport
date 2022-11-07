import { ReactNode } from "react"
import { StyledImageProfile } from "../../components/ImageProfile/style"

interface iImageProps {
  children: ReactNode
}

export const ImageProfile = ({ children }: iImageProps) => {
  return (
    <>
      <StyledImageProfile>{children}</StyledImageProfile>
    </>
  )
}
