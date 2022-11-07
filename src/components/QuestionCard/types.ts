import { ReactNode } from "react";

export interface iQuestionCard {
  title: string;
  techs: string;
  description: string;
  username: string;
  date: string;
  image: HTMLImageElement | string;
  children?: ReactNode;
}
