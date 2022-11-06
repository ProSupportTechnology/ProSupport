import { ReactNode } from "react";
import { StyledImageProfile } from "../../components/ImageProfile/style";

interface imageprops {
  children: ReactNode
}

export const ImageProfile = ({children}: imageprops) => {
  return (
    <>
      <StyledImageProfile>
        {children}
      </StyledImageProfile>
    </>
  );
};
