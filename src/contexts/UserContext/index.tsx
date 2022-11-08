import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iAllUsers } from "../../pages/AllUsersPage/types";
import { iLogin } from "../../pages/LoginPage/components/FormLogin/types";
import { api } from "../../services/api";
import { iRegister, iResponseLogin, iUser, iUserContext } from "./types";

interface iUserContextProps {
  children: ReactNode;
}

const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<iUser>({} as iUser);
  const [token, setToken] = useState({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getUser() {
      //Loading(true)
      const userId = localStorage.getItem("@userID-ProSupport");

      if (userId) {
        try {
          const { data } = await api.get<iUser>(`/users/${userId}?_embed=questions`);
          const token = localStorage.getItem("@Token-ProSupport");
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          setUser(data);
        } catch (error) {
          toast.error("Sessão expirada! Faça login novamente.");
          localStorage.clear();
          navigate("/login");
        } finally {
          //Loading(false)
        }
      }
    }
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getAllUsers() {
    //Loading(true)
    try {
      const { data } = await api.get<iAllUsers>("/users");
      return data;
    } catch (error) {
      // toast.error("Sessão expirada! Faça login novamente.")
      // localStorage.clear()
      // navigate("/login")
    } finally {
      //Loading(false)
    }
  }

  async function handleRegister(data: iRegister) {
    setLoading(true);
    try {
      await api.post<iRegister>("/users", data);
      toast.success("Conta criada com sucesso");
      navigate("/login");
    } catch (error) {
      toast.error("Falha ao criar a conta");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(body: iLogin) {
    setLoading(true);
    try {
      const response = await api.post<iResponseLogin>("/login", body);
      toast.success("Login efetuado com sucesso");
      console.log(response);

      localStorage.setItem("@Token-ProSupport", response.data.accessToken);
      localStorage.setItem("@userID-ProSupport", response.data.user.id);
      setUser(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Falha ao efetuar o login");
    } finally {
      setLoading(false);
    }
  }

  async function editUser(id: iUser, body: iUser) {
    setLoading(true);
    try {
      const response = await api.patch<iUser>(`/users/${id}`, body);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(id: iUser) {
    setLoading(true);
    try {
      const response = await api.delete(`/users/${id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        handleRegister,
        handleLogin,
        editUser,
        deleteUser,
        user,
        getAllUsers,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
