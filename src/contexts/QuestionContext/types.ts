import { ReactNode, Dispatch, SetStateAction } from "react";
import { iQuestion } from "../UserContext/types";

export interface iDataQuestion {
  title: string;
  tech: string;
  description: string;
}

export interface iDataResponse {
  description: string;
}

export interface iQuestionContextProps {
  children: ReactNode;
}

export interface iQuestionProvider {
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
  allQuestions: iQuestion[];
  searchedQuestion: string;
  answeredQuestion: iQuestion[];
  setAnsweredQuestion: Dispatch<React.SetStateAction<iQuestion[]>>;
  setSearchedQuestion: Dispatch<React.SetStateAction<string>>;
  createQuestion: (data: iDataQuestion) => Promise<void>;
  editQuestion: (data: iDataQuestion) => Promise<void>;
  answerQuestion: (data: iDataResponse) => Promise<void>;
  editAnswer: (data: iDataResponse) => Promise<void>;
  setQuestionId: Dispatch<SetStateAction<number>>;
  questionId: number;
  deleteQuestion: (id: number) => Promise<void>;
  responseId: number;
  setResponseId: Dispatch<SetStateAction<number>>;
  setIsModDeleteRespOpen: Dispatch<SetStateAction<boolean>>;
  isModDeleteRespOpen: boolean;
  deleteAnswer(): Promise<void>;
  getAllQuestions(): Promise<void>;
}
