import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iDataEditUser } from "../../components/Modal/ModalEditProfile/types";
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
  const [loading, setLoading] = useState<boolean>(false);
  const [idUserToDelete, setIdUserToDelete] = useState<string | number>("");

  useEffect(() => {
    const userId = localStorage.getItem("@userID-ProSupport");
    const token = localStorage.getItem("@Token-ProSupport");
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    if (userId) {
      getMyProfile();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getAllUsers() {
    setLoading(true);
    const token = localStorage.getItem("@Token-ProSupport");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    try {
      const { data } = await api.get<iAllUsers>("/users");
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function getMyProfile() {
    const userId = localStorage.getItem("@userID-ProSupport");

    try {
      const { data } = await api.get<iUser>(`/users/${userId}?_embed=questions&_embed=responses`);
      setUser(data);
    } catch (error) {
      console.log(error);
      toast.error("Sessão expirada! Faça login novamente.");
      localStorage.clear();
      navigate("/login");
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(data: iRegister) {
    setLoading(true);
    const token = localStorage.getItem("@Token-ProSupport");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    delete data.confirmPassword;

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
      const { data } = await api.post<iResponseLogin>("/login", body);
      api.defaults.headers.common.authorization = `Bearer ${data.accessToken}`;

      localStorage.setItem("@Token-ProSupport", data.accessToken);
      localStorage.setItem("@userID-ProSupport", JSON.stringify(data.user.id));

      setUser(data.user);
      toast.success("Login efetuado com sucesso");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Falha ao efetuar o login");
    } finally {
      setLoading(false);
    }
  }

  async function editUser(data: iDataEditUser) {
    const id = localStorage.getItem("@userID-ProSupport");
    const token = localStorage.getItem("@Token-ProSupport");
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setLoading(true);
    try {
      const response = await api.patch<iUser>(`/users/${id}`, data);
      setUser(response.data);
      toast.success("Usuário editado com sucesso!");
    } catch (error) {
      toast.error("Não foi possível editar o usuário.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(id: number | string) {
    setLoading(true);
    const token = localStorage.getItem("@Token-ProSupport");
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      await api.delete(`/users/${id}`);
      toast.success("Usuário deletado com sucesso!");
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
        getMyProfile,
        setIdUserToDelete,
        idUserToDelete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
