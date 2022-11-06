import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../services/api";
import { iQuestion, iUser } from "../UserContext/types";

interface iQuestionContextProps {
  children: ReactNode;
}

interface iQuestionProvider {
  allQuestions: iQuestion[];
  // setAllQuestions: Dispatch<React.SetStateAction<iQuestion[]>>
}

const QuestionContext = createContext<iQuestionProvider>(
  {} as iQuestionProvider
);

export const QuestionProvider = ({ children }: iQuestionContextProps) => {
  const getToken = localStorage.getItem("@Token-ProSupport");
  const [allQuestions, setAllQuestions] = useState([] as iQuestion[]);

  useEffect(() => {
    async function getAllQuestions() {
      //Loading(true)
      try {
        api.defaults.headers.common.authorization = `Bearer ${getToken}`;
        const response = await api.get<iQuestion[]>(
          "/questions?_embed=responses&_limit=10&_sort=id&_order=desc&_expand=user"
        );
        setAllQuestions(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        //Loading(false)
      }
    }
    getAllQuestions();
  }, [getToken]);

  async function answerQuestion(body: iQuestion) {
    //Loading(true)
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      const response = await api.post<iQuestion[]>("/responses", body);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      //Loading(false)
    }
  }

  async function editAnswer(body: iQuestion, id: iUser) {
    //Loading(true)
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      const response = await api.patch<iQuestion[]>(`/responses/${id}`, body);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      //Loading(false)
    }
  }

  async function deleteAnswer(id: iUser) {
    //Loading(true)
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      const response = await api.delete(`/responses/${id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      //Loading(false)
    }
  }

  async function createQuestion(body: iQuestion){
        //Loading(true)
        try {
          api.defaults.headers.common.authorization = `Bearer ${getToken}`;
          const response = await api.post<iQuestion[]>("/questions", body);
          console.log(response);
        } catch (error) {
          console.error(error);
        } finally {
          //Loading(false)
        }
  }

  async function editQuestion(body: iQuestion, id: iUser){
        //Loading(true)
        try {
          api.defaults.headers.common.authorization = `Bearer ${getToken}`;
          const response = await api.patch<iQuestion[]>(`/questions/${id}`, body);
          console.log(response);
        } catch (error) {
          console.error(error);
        } finally {
          //Loading(false)
        }
  }

  async function deleteQuestion(id: iUser){
        //Loading(true)
        try {
          api.defaults.headers.common.authorization = `Bearer ${getToken}`;
          const response = await api.delete<iQuestion[]>(`/questions/${id}`);
          console.log(response);
        } catch (error) {
          console.error(error);
        } finally {
          //Loading(false)
        }
  }

  return (
    <QuestionContext.Provider
      value={{
        allQuestions,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
