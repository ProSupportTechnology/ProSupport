import { ReactNode } from "react";

export interface iQuestionCard {
  title: string;
  tech: string;
  description: string;
  username: string;
  date: string;
  image: string;
  children?: ReactNode;
  questionId: string;
  userQuestionId: string;
}
