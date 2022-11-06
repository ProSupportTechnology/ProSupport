import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface iQuestionContextProps {
  children: ReactNode;
}

export interface iQuestionContext {
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
}

const QuestionContext = createContext<iQuestionContext>({} as iQuestionContext);

export const QuestionProvider = ({ children }: iQuestionContextProps) => {
  const [isModCreateQuestOpen, setIsModCreateQuestOpen] = useState(false);
  const [isModEditQuestOpen, setIsModEditQuestOpen] = useState(false);
  const [isModCreateRespOpen, setIsModCreateRespOpen] = useState(false);
  const [isModEditRespOpen, setIsModEditRespOpen] = useState(false);
  const [isModDeleteQuestOpen, setIsModDeleteQuestOpen] = useState(false);
  const [isModDeleteUser, setIsModDeleteUser] = useState(false);
  const [isModEditProfile, setIsModEditProfile] = useState(false);

  return (
    <QuestionContext.Provider
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
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
