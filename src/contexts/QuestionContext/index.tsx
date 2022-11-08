import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useUserContext } from "../UserContext";
import { iQuestion, iUser } from "../UserContext/types";
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
  const [isModCreateQuestOpen, setIsModCreateQuestOpen] = useState(false);
  const [isModEditQuestOpen, setIsModEditQuestOpen] = useState(false);
  const [isModCreateRespOpen, setIsModCreateRespOpen] = useState(false);
  const [isModEditRespOpen, setIsModEditRespOpen] = useState(false);
  const [isModDeleteQuestOpen, setIsModDeleteQuestOpen] = useState(false);
  const [isModDeleteUser, setIsModDeleteUser] = useState(false);
  const [isModDeleteRespOpen, setIsModDeleteRespOpen] = useState(false);
  const [isModEditProfile, setIsModEditProfile] = useState(false);
  const [questionId, setQuestionId] = useState<string | number>("");
  const [userQuestionId, setUserQuestionId] = useState<string | number>("");
  const [responseId, setResponseId] = useState<string | number>("");

  const getToken = localStorage.getItem("@Token-ProSupport");
  const [allQuestions, setAllQuestions] = useState([] as iQuestion[]);
  const [searchedQuestion, setSearchedQuestion] = useState("");
  const [answeredQuestion, setAnsweredQuention] = useState([] as iQuestion[]);

  const { setLoading } = useUserContext();

  useEffect(() => {
    async function getAllQuestions() {
      setLoading(true);
      try {
        api.defaults.headers.common.authorization = `Bearer ${getToken}`;
        const response = await api.get<iQuestion[]>(
          "/questions?_embed=responses&_limit=10&_sort=id&_order=desc&_expand=user"
        );
        setAllQuestions(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getAllQuestions();
  }, [getToken]);

  async function answerQuestion(data: iDataResponse) {
    const body = { ...data, questionId: questionId, userId: userQuestionId };
    setLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      await api.post<iDataResponse>("/responses", body);
      toast.success("Resposta enviada com sucesso!");
      setIsModCreateRespOpen(false);
    } catch (error) {
      toast.error("Resposta não enviada.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function editAnswer(data: iDataResponse) {
    setLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      const response = await api.patch<iDataResponse>(
        `/responses/${responseId}`,
        data
      );
      console.log(response);
      toast.success("Resposta editada com sucesso!");
      setIsModEditRespOpen(false);
    } catch (error) {
      toast.error("Não foi possível editar a resposta.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteAnswer() {
    setLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      const response = await api.delete(`/responses/${responseId}`);
      toast.success("Resposta deletada com sucesso!");
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível excluir a resposta.");
    } finally {
      setLoading(false);
    }
  }

  async function createQuestion(data: iDataQuestion) {
    let id = localStorage.getItem("@userID-ProSupport");
    const body = { ...data, userId: id };
    setLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      await api.post<iDataQuestion>("/questions", body);
      toast.success("Pergunta enviada com sucesso.");
      setIsModCreateQuestOpen(false);
    } catch (error) {
      toast.error("Erro ao enviar pergunta.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function editQuestion(data: iDataQuestion) {
    setLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      await api.patch<iDataQuestion>(`/questions/${questionId}`, data);
      toast.success("Pergunta editada com sucesso.");
      setIsModEditQuestOpen(false);
    } catch (error) {
      toast.error("Erro ao editar pergunta.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteQuestion(id: string | number) {
    setLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      const response = await api.delete<iQuestion[]>(`/questions/${id}`);
      console.log(response);
      toast.success("Pergunta deletada com sucesso!");
    } catch (error) {
      console.error(error);
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
        setAnsweredQuention,
        setSearchedQuestion,
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
        createQuestion,
        editQuestion,
        answerQuestion,
        editAnswer,
        setQuestionId,
        questionId,
        userQuestionId,
        setUserQuestionId,
        deleteQuestion,
        setResponseId,
        responseId,
        isModDeleteRespOpen,
        setIsModDeleteRespOpen,
        deleteAnswer,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
