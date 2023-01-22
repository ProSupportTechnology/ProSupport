import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useModalContext } from "../ModalContext";
import { useUserContext } from "../UserContext";
import { iQuestion } from "../UserContext/types";
import {
  iDataQuestion,
  iDataResponse,
  iQuestionContextProps,
  iQuestionProvider,
} from "./types";

const QuestionContext = createContext<iQuestionProvider>(
  {} as iQuestionProvider
);

export const QuestionProvider = ({ children }: iQuestionContextProps) => {
  const [questionId, setQuestionId] = useState<string>("");
  const [responseId, setResponseId] = useState<string>("");
  const [allQuestions, setAllQuestions] = useState([] as iQuestion[]);
  const [userQuestions, setUserQuestions] = useState<iQuestion[] | any>(null);
  const [searchedQuestion, setSearchedQuestion] = useState("");
  const [answeredQuestion, setAnsweredQuestion] = useState([] as iQuestion[]);
  const { getMyProfile } = useUserContext();

  const { setLoading } = useUserContext();
  const {
    setIsModCreateRespOpen,
    setIsModEditRespOpen,
    setIsModCreateQuestOpen,
    setIsModEditQuestOpen,
  } = useModalContext();

  async function getAllQuestions() {
    setLoading(true);
    const token = localStorage.getItem("@Token-ProSupport");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    try {
      const response = await api.get<iQuestion[]>("/questions");
      setAllQuestions(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  async function getQuestionsByOneUser() {
    setLoading(true);
    const token = localStorage.getItem("@Token-ProSupport");
    const userId = JSON.parse(localStorage.getItem("@userID-ProSupport") + "");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    try {
      const response = await api.get<iQuestion[]>(`/questions/users/${userId}`);
      setUserQuestions(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function answerQuestion(data: iDataResponse) {
    setLoading(true);
    const userId = JSON.parse(localStorage.getItem("@userID-ProSupport") + "");
    const body = {
      ...data,
      questionId: questionId,
      userId: userId,
    };

    try {
      await api.post<iDataResponse>("/answers", body);
      toast.success("Resposta enviada com sucesso!");
      await getAllQuestions();
      setIsModCreateRespOpen(false);
    } catch (error) {
      toast.error("Resposta não enviada.");
    } finally {
      setLoading(false);
    }
  }

  async function editAnswer(data: iDataResponse) {
    setLoading(true);
    try {
      await api.patch(`/answers/${responseId}`, data);
      await getAllQuestions();
      toast.success("Resposta editada com sucesso!");
      setIsModEditRespOpen(false);
    } catch (error) {
      toast.error("Não foi possível editar a resposta.");
    } finally {
      setLoading(false);
    }
  }

  async function deleteAnswer() {
    setLoading(true);

    try {
      await api.delete(`/answers/${responseId}`);
      await getAllQuestions();
      toast.success("Resposta deletada com sucesso!");
    } catch (error) {
      toast.error("Não foi possível excluir a resposta.");
    } finally {
      setLoading(false);
    }
  }

  async function createQuestion(data: iDataQuestion) {
    const id = Number(localStorage.getItem("@userID-ProSupport"));
    const date = new Date().toLocaleDateString();
    const body = { ...data, userId: id, created_at: date };
    try {
      const response = await api.post<iQuestion>("/questions", body);
      setUserQuestions({ ...response.data, ...userQuestions });
      await getMyProfile();
      await getQuestionsByOneUser();
      toast.success("Pergunta enviada com sucesso.");
      setIsModCreateQuestOpen(false);
    } catch (error) {
      toast.error("Erro ao enviar pergunta.");
    } finally {
      setLoading(false);
    }
  }

  async function editQuestion(data: iDataQuestion) {
    setLoading(true);
    try {
      await api.patch<iDataQuestion>(`/questions/${questionId}`, data);
      toast.success("Pergunta editada com sucesso.");
      setIsModEditQuestOpen(false);
      await getAllQuestions();
    } catch (error) {
      toast.error("Erro ao editar pergunta.");
    } finally {
      setLoading(false);
    }
  }

  async function deleteQuestion(id: string) {
    try {
      await api.delete<iQuestion[]>(`/questions/${id}`);
      await getAllQuestions();
      await getMyProfile();
      await getQuestionsByOneUser();
      toast.success("Pergunta deletada com sucesso!");
    } catch (error) {
      toast.error("Erro ao deletar pergunta!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <QuestionContext.Provider
      value={{
        allQuestions,
        searchedQuestion,
        answeredQuestion,
        setAnsweredQuestion,
        setSearchedQuestion,
        createQuestion,
        editQuestion,
        answerQuestion,
        editAnswer,
        setQuestionId,
        questionId,
        deleteQuestion,
        setResponseId,
        responseId,
        deleteAnswer,
        getAllQuestions,
        getQuestionsByOneUser,
        userQuestions,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
