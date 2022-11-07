import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iLogin } from "../../pages/LoginPage/components/FormLogin/types";
import { api } from "../../services/api";
import { iRegister, iUser, iUserContext } from "./types";

interface iUserContextProps {
  children: ReactNode;
}

const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<iUser>({} as iUser);
  const [token, setToken] = useState({});
  const [loading, setLoading] = useState<boolean>(false);

  async function handleRegister(data: iRegister) {
    setLoading(true);
    try {
      await api.post<iRegister>("/users", data);
      toast.success("Conta criada com sucesso");
      navigate("/login");
    } catch {
      toast.error("Falha ao criar a conta");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(data: iLogin) {
    setLoading(true);
    try {
      const response = await api.post<iUser>("/login", data);
      toast.success("Login efetuado com sucesso");

      window.localStorage.setItem(
        "@Token-ProSupport",
        response.data.accessToken
      );
      window.localStorage.setItem("@userID-ProSupport", response.data.user.id);
      setToken(response.data.accessToken);
      setUser(response.data);
      navigate("/dashboard");
    } catch {
      toast.error("Falha ao efetuar o login");
    } finally {
      setLoading(false);
    }
  }

  async function editUser(id: iUser, body: iUser) {
    setLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.patch<iUser>(`/users/${id}`, body);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(id: iUser) {
    setLoading(true)
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.delete(`/users/${id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <UserContext.Provider
      value={{
        handleRegister,
        handleLogin,
        user,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
