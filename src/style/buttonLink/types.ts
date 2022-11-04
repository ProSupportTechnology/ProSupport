import { ReactNode } from "react";

export interface iButtonLink {
  to: string;
  children: ReactNode;
  className?: string | undefined;
}
export interface iStyledButtonLink {
  theme: "default" | "theme-1";
}
