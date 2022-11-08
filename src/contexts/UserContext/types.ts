import { iAllUsers } from "../../pages/AllUsersPage/types"

export interface iRegister {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface iLogin {
  email: string
  password: string
}

export interface iResponseLogin {
  accessToken: string
  user: iUser
}

export interface iUser {
  email: string
  password?: string
  name: string
  bio: string
  image: string
  id: string
  admin?: boolean
}

export interface iUserContext {
  handleRegister(data: iRegister): Promise<void>
  handleLogin(data: iLogin): Promise<void>
  editUser(id: iUser, body: iUser): Promise<void>
  deleteUser(id: iUser): Promise<void>
  user: iUser
  getAllUsers(): Promise<iAllUsers | undefined>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export interface iQuestion {
  title: string
  description: string
  tech: string
  userId: number
  id: number
  responses: {
    title: string
    description: string
    tech: string
    userId: number
    id: number
    length: number
  }
  user: iUser
}
