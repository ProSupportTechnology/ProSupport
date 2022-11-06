import { createContext, Dispatch, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { iQuestion } from "../UserContext/types"

interface iQuestionContextProps {
  children: ReactNode
}

interface iQuestionProvider{
  allQuestions: iQuestion[] 
  // setAllQuestions: Dispatch<React.SetStateAction<iQuestion[]>>
}

const QuestionContext = createContext<iQuestionProvider>({} as iQuestionProvider)

export const QuestionProvider = ({ children }: iQuestionContextProps) => {
  const getToken = localStorage.getItem("@Token-ProSupport")
  const [allQuestions, setAllQuestions] = useState([] as iQuestion[]) 

  useEffect(() => {
    async function getAllQuestions(){
      //Loading(true)
      try{
        api.defaults.headers.common.authorization = `Bearer ${getToken}`;
        const response = await api.get<iQuestion[]>("/questions?_embed=responses&_limit=10&_sort=id&_order=desc&_expand=user")
         setAllQuestions(response.data)
      } catch (error) {
        console.error(error)
      } finally {
        //Loading(false)
      }
    }
    getAllQuestions()
  }, [getToken])

  return (
  <QuestionContext.Provider 
  value=
  {{
    allQuestions
  }}>
    {children}
    </QuestionContext.Provider>
  )
}

export const useQuestionContext = () => useContext(QuestionContext)
