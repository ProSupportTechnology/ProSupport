import { Dispatch, ReactNode, SetStateAction } from "react";

export interface iContainerModalProps {
  children: ReactNode;
  setIsModOpen: Dispatch<SetStateAction<boolean>>;
}
