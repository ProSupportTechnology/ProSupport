import { createContext, ReactNode, useContext } from "react"

interface iQuestionContextProps {
  children: ReactNode
}

const QuestionContext = createContext({})

export const QuestionProvider = ({ children }: iQuestionContextProps) => {
  return <QuestionContext.Provider value={""}>{children}</QuestionContext.Provider>
}

export const useQuestionContext = () => useContext(QuestionContext)
