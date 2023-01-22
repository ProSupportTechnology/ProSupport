import { ReactNode, Dispatch, SetStateAction } from "react";

export interface iModalContextProps {
  children: ReactNode;
}

export interface iModalProvider {
  isModCreateQuestOpen: boolean;
  setIsModCreateQuestOpen: Dispatch<SetStateAction<boolean>>;
  isModEditQuestOpen: boolean;
  setIsModEditQuestOpen: Dispatch<SetStateAction<boolean>>;
  isModCreateRespOpen: boolean;
  setIsModCreateRespOpen: Dispatch<SetStateAction<boolean>>;
  isModEditRespOpen: boolean;
  setIsModEditRespOpen: Dispatch<SetStateAction<boolean>>;
  isModDeleteQuestOpen: boolean;
  setIsModDeleteQuestOpen: Dispatch<SetStateAction<boolean>>;
  isModDeleteUser: boolean;
  setIsModDeleteUser: Dispatch<SetStateAction<boolean>>;
  isModEditProfile: boolean;
  setIsModEditProfile: Dispatch<SetStateAction<boolean>>;
  setIsModDeleteRespOpen: Dispatch<SetStateAction<boolean>>;
  isModDeleteRespOpen: boolean;
  isModProfileImage: boolean;
  setIsModProfileImageIsOpen: Dispatch<SetStateAction<boolean>>;
}
