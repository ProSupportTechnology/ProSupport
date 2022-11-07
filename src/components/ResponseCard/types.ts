import { ReactNode } from "react";

export interface iResponseCard {
  techs: string;
  description: string;
  username: string;
  date: string;
  image: HTMLImageElement | string;
  children?: ReactNode;
}
