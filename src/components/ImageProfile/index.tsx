import { ReactNode } from "react";
import { StyledImageProfile } from "../../components/ImageProfile/style";

<<<<<<< HEAD
interface imageprops {
  children: ReactNode;
}
export const ImageProfile = ({ children }: imageprops) => {
=======
interface iImageProps{
  children: ReactNode
}

export const ImageProfile = ({children}: iImageProps) => {
>>>>>>> 3e2e03b6f32727c5aa63eb500644792cac591f23
  return (
    <>
      <StyledImageProfile>{children}</StyledImageProfile>
    </>
  );
};
