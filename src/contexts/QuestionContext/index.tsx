import { createContext, ReactNode, useContext, useState } from "react";

interface iQuestionContextProps {
  children: ReactNode;
}

export interface iQuestionContext {
  isModCreateQuestOpen: boolean;
  setIsModCreateQuestOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModEditQuestOpen: boolean;
  setIsModEditQuestOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModCreateRespOpen: boolean;
  setIsModCreateRespOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModEditRespOpen: boolean;
  setIsModEditRespOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuestionContext = createContext<iQuestionContext>({} as iQuestionContext);

export const QuestionProvider = ({ children }: iQuestionContextProps) => {
  const [isModCreateQuestOpen, setIsModCreateQuestOpen] = useState(false);
  const [isModEditQuestOpen, setIsModEditQuestOpen] = useState(false);
  const [isModCreateRespOpen, setIsModCreateRespOpen] = useState(false);
  const [isModEditRespOpen, setIsModEditRespOpen] = useState(false);

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
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
