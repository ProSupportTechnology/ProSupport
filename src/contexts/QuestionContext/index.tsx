import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useUserContext } from "../UserContext";
import { iQuestion } from "../UserContext/types";
import { iDataQuestion, iDataResponse, iQuestionContextProps, iQuestionProvider } from "./types";

const QuestionContext = createContext<iQuestionProvider>({} as iQuestionProvider);

export const QuestionProvider = ({ children }: iQuestionContextProps) => {
  const [isModCreateQuestOpen, setIsModCreateQuestOpen] = useState(false);
  const [isModEditQuestOpen, setIsModEditQuestOpen] = useState(false);
  const [isModCreateRespOpen, setIsModCreateRespOpen] = useState(false);
  const [isModEditRespOpen, setIsModEditRespOpen] = useState(false);
  const [isModDeleteQuestOpen, setIsModDeleteQuestOpen] = useState(false);
  const [isModDeleteUser, setIsModDeleteUser] = useState(false);
  const [isModDeleteRespOpen, setIsModDeleteRespOpen] = useState(false);
  const [isModEditProfile, setIsModEditProfile] = useState(false);
  const [questionId, setQuestionId] = useState<number>(0);
  const [responseId, setResponseId] = useState<number>(0);
  const [allQuestions, setAllQuestions] = useState([] as iQuestion[]);
  const [searchedQuestion, setSearchedQuestion] = useState("");
  const [answeredQuestion, setAnsweredQuestion] = useState([] as iQuestion[]);
  const { getMyProfile } = useUserContext();

  const { setLoading } = useUserContext();

  useEffect(() => {
    getAllQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getAllQuestions() {
    setLoading(true);
    const token = localStorage.getItem("@Token-ProSupport");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    try {
      const response = await api.get<iQuestion[]>("/questions?_embed=responses&_expand=user&_limit=10");
      setAllQuestions(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function answerQuestion(data: iDataResponse) {
    setLoading(true);
    const date = new Date().toISOString();
    const userId = localStorage.getItem("@userID-ProSupport");
    const body = { ...data, questionId: questionId, userId: userId, created_at: date };
    console.log(body);
    try {
      await api.post<iDataResponse>("/responses", body);
      await getAllQuestions()
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
      const response = await api.patch<iDataResponse>(`/responses/${responseId}`, data);
      console.log(response);
      await getAllQuestions();
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
      await api.delete(`/responses/${responseId}`);
      await getAllQuestions()
      toast.success("Resposta deletada com sucesso!");
    } catch (error) {
      toast.error("Não foi possível excluir a resposta.");
    } finally {
      setLoading(false);
    }
  }

  async function createQuestion(data: iDataQuestion) {
    setLoading(true);
    const id = Number(localStorage.getItem("@userID-ProSupport"));
    const date = new Date().toISOString();
    const body = { ...data, userId: id, created_at: date };
    try {
      await api.post<iQuestion>("/questions", body);
      await getMyProfile();
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
      await api.patch<iDataQuestion>(`/questions/${questionId}`, data);
      toast.success("Pergunta editada com sucesso.");
      setIsModEditQuestOpen(false);
      await getAllQuestions();
    } catch (error) {
      toast.error("Erro ao editar pergunta.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteQuestion(id: number) {
    setLoading(true);
    try {
      await api.delete<iQuestion[]>(`/questions/${id}`);
      await getAllQuestions()
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
        setAnsweredQuestion,
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
        deleteQuestion,
        setResponseId,
        responseId,
        isModDeleteRespOpen,
        setIsModDeleteRespOpen,
        deleteAnswer,
        getAllQuestions,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
