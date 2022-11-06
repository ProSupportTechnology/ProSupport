import { createContext, ReactNode, useContext, useState } from "react";

interface iQuestionContextProps {
  children: ReactNode;
}

export interface iQuestionContext {
  isModCreateQuestOpen: boolean;
  setIsModCreateQuestOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuestionContext = createContext<iQuestionContext>({} as iQuestionContext);

export const QuestionProvider = ({ children }: iQuestionContextProps) => {
  const [isModCreateQuestOpen, setIsModCreateQuestOpen] = useState(false);

  return (
    <QuestionContext.Provider
      value={{ isModCreateQuestOpen, setIsModCreateQuestOpen }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
