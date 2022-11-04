import { ReactNode } from "react";

export interface iButtonLink {
  to: string;
  children: ReactNode;
  className?: string | undefined;
}
export interface iStyledButtonLink {
  variant: "default" | "theme-1" | "theme-2" | "theme-3";
}
