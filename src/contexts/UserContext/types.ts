import { Dispatch, ReactNode, SetStateAction } from "react";
import { iAllUsers } from "../../pages/AllUsersPage/types";

export interface iRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string | undefined;
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iResponseLogin {
  accessToken: string;
  user: iUser;
}

export interface iUser {
  email: string;
  password?: string;
  name: string;
  bio: string;
  image: string;
  id: number;
  admin?: boolean;
  questions?: iQuestion[];
}

export interface iUserContext {
  handleRegister(data: iRegister): Promise<void>;
  handleLogin(data: iLogin): Promise<void>;
  editUser: any;
  deleteUser: (id: number | string) => Promise<void>;
  user: iUser;
  getAllUsers(): Promise<void>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setIdUserToDelete: Dispatch<SetStateAction<string | number>>;
  idUserToDelete: string | number;
  getMyProfile(): Promise<void>;
  allUsers: iAllUsers[] | null;
}

export interface iQuestion {
  created_at: string;
  title: string;
  description: string;
  tech: string;
  userId: number;
  id: number;
  responses: {
    map?(arg0: (element: iResponse) => void): ReactNode;
    title: string;
    description: string;
    tech: string;
    userId: number;
    id: number;
    length?: number;
  };
  user: iUser;
}

interface iResponse {
  description: string;
  id: number;
  questionId: number;
  userId: number;
}
