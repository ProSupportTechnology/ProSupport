import { ReactNode } from "react";

export interface iGlobalButton {
  children: ReactNode;
  className?: string | undefined;
}

export interface iStyledButton {
  theme: string;
}
