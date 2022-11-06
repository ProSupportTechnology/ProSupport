import { useEffect, useState } from "react"
import { IoMdTrash } from "react-icons/io"
import { Header } from "../../components/Header"
import { ImageProfile } from "../../components/ImageProfile"
import { api } from "../../services/api"
import { StyledAllUsersPage } from "./style"
import defaultUser from "../../assets/photo.png"
import { MdError } from "react-icons/md"
import { iAllUsers, iConfirmDeleteUser } from "./types"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const AllUsersPage = () => {
  const [allUsers, setAllUsers] = useState<iAllUsers | null>(null)
  const [confirmDeleteUser, setConfirmDeleteUser] = useState<iConfirmDeleteUser | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllUsers() {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHByb3N1cHBvcnQuY29tIiwiaWF0IjoxNjY3NzY4ODcxLCJleHAiOjE2Njc3NzI0NzEsInN1YiI6IjEifQ.835hYOys4NR8tA8CmqyuqKXws8c6-faHmJt8NQYLSGI"
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const { data } = await api.get<iAllUsers>("/users")
        setAllUsers(data)
      } catch (error) {
        toast.error("Sessão expirada! Faça login novamente.")
        localStorage.clear()
        navigate("/login")
      }
    }
    getAllUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleClickDelete(userId: number) {
    if (confirmDeleteUser?.id === userId) {
      // chamar função de deletar usuário
      setConfirmDeleteUser(null)
    } else {
      setConfirmDeleteUser({ id: userId })
    }
  }

  return (
    <StyledAllUsersPage className="backgroundDash">
      <Header />
      <main className="containerMain">
        <h1 className="title one">Todos os Usuários</h1>
        <ul>
          {allUsers &&
            allUsers.map((user) => (
              <li key={user.id}>
                <ImageProfile image={user.image ? user.image : defaultUser} userName={user.name} />
                <div>
                  <p className="text one">{user.name}</p>
                  <span className="text two">{user.bio}</span>
                </div>
                <button
                  onClick={() => handleClickDelete(user.id)}
                  className={confirmDeleteUser?.id === user.id ? "confirmButton" : ""}
                >
                  {confirmDeleteUser?.id === user.id ? <MdError /> : <IoMdTrash />}
                </button>
              </li>
            ))}
        </ul>
      </main>
    </StyledAllUsersPage>
  )
}
