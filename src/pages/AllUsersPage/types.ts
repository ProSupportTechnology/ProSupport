import { ReactNode } from "react";

export interface iAllUsers {
  map(arg0: (user: iAllUsers) => JSX.Element): ReactNode;
  admin?: boolean;
  bio: string;
  email: string;
  id: number;
  image: string;
  name: string;
  password?: string;
}
