import { ReactNode } from "react";

export interface iQuestionCard {
  title: string;
  tech: string;
  description: string;
  username: string;
  date: string;
  image: HTMLImageElement | string;
  children?: ReactNode;
  setQuestionId: React.Dispatch<React.SetStateAction<string | number>>;
  questionId: string | number;
  userQuestionId: string | number;
}
