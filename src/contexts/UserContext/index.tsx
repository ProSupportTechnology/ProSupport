import { createContext, ReactNode, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../../services/api"
import { iRegister } from "./types"

interface iUserContextProps {
  children: ReactNode
}

export interface iUserContext{
  handleRegister(data: iRegister): Promise<void>;
}


const UserContext = createContext<iUserContext>({} as iUserContext)

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();

  async function handleRegister(data: iRegister) {
      //Loading(true)
      try{
        await api.post<iRegister>("/users", data);
        toast.success("Conta criada com sucesso")
        navigate("/login")
      } catch {
        toast.error("Falha ao criar a conta")
      } finally {
        //Loading(false)
      }
  }

  

  return (
  <UserContext.Provider 
    value={{
      handleRegister
    }}>
    {children}
  </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
