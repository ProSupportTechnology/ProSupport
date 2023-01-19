import { createContext, useContext, useState } from "react";
import { iModalContextProps, iModalProvider } from "./types";

const ModalContext = createContext<iModalProvider>({} as iModalProvider);

export const ModalProvider = ({ children }: iModalContextProps) => {
  const [isModCreateQuestOpen, setIsModCreateQuestOpen] = useState(false);
  const [isModEditQuestOpen, setIsModEditQuestOpen] = useState(false);
  const [isModCreateRespOpen, setIsModCreateRespOpen] = useState(false);
  const [isModEditRespOpen, setIsModEditRespOpen] = useState(false);
  const [isModDeleteQuestOpen, setIsModDeleteQuestOpen] = useState(false);
  const [isModDeleteUser, setIsModDeleteUser] = useState(false);
  const [isModDeleteRespOpen, setIsModDeleteRespOpen] = useState(false);
  const [isModEditProfile, setIsModEditProfile] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isModCreateQuestOpen,
        setIsModCreateQuestOpen,
        isModEditQuestOpen,
        setIsModEditQuestOpen,
        isModCreateRespOpen,
        setIsModCreateRespOpen,
        isModEditRespOpen,
        setIsModEditRespOpen,
        isModDeleteQuestOpen,
        setIsModDeleteQuestOpen,
        isModDeleteUser,
        setIsModDeleteUser,
        isModEditProfile,
        setIsModEditProfile,
        isModDeleteRespOpen,
        setIsModDeleteRespOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
