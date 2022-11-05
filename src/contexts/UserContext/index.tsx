import { createContext, ReactNode, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { iLogin } from "../../pages/LoginPage/components/FormLogin/types"
import { api } from "../../services/api"
import { iRegister, iUser } from "./types"

interface iUserContextProps {
  children: ReactNode
}

export interface iUserContext{
  handleRegister(data: iRegister): Promise<void>;
  handleLogin(data: iLogin): Promise<void>
}


const UserContext = createContext<iUserContext>({} as iUserContext)

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<iUser>({} as iUser);
  const [token, setToken] = useState({});

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

  async function handleLogin(data: iLogin){
    //Loading(true)
    try{
      const response = await api.post<iUser>("/login", data)
      toast.success("Login efetuado com sucesso")
      
      window.localStorage.setItem("@Token-ProSupport", response.data.accessToken);
      window.localStorage.setItem("@userID-ProSupport", response.data.user.id);
      setToken(response.data.accessToken)
      setUser(response.data)
      // navigate("/dashboard")
    } catch {
      toast.error("Falha ao efetuar o login")
    } finally {
      //Loading(false)
    }
  }


  return (
  <UserContext.Provider 
    value={{
      handleRegister,
      handleLogin
    }}>
    {children}
  </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
