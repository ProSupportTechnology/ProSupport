import { ReactNode } from "react";

export interface iQuestionCard {
  title: string;
  tech: string;
  description: string;
  username: string;
  date: string;
  image: string;
  children?: ReactNode;
  setQuestionId: React.Dispatch<React.SetStateAction<number>>;
  questionId: number;
  userQuestionId: number;
}
