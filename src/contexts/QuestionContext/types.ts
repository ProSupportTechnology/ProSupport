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
  deleteAnswer(): Promise<void>;
  getAllQuestions(): Promise<void>;
}
