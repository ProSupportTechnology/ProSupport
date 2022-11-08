import { useEffect, useState } from "react"
import { IoMdTrash } from "react-icons/io"
import { Header } from "../../components/Header"
import { ImageProfile } from "../../components/ImageProfile"
import { StyledAllUsersPage } from "./style"
import defaultUser from "../../assets/photo.png"
import { iAllUsers } from "./types"
import { useUserContext } from "../../contexts/UserContext"

export const AllUsersPage = () => {
  const [allUsers, setAllUsers] = useState<iAllUsers | null>(null)
  const { getAllUsers } = useUserContext()

  useEffect(() => {
    async function getUsers() {
      const users = await getAllUsers()
      users && setAllUsers(users)
    }
    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleClickDelete(userId: number) {
    // chamar o modal de deletar usuário
    localStorage.setItem("@modalId-ProSupport", userId.toString())
  }

  if (!allUsers) return null

  return (
    <StyledAllUsersPage className="backgroundDash">
      <Header />
      <main className="containerMain">
        <h1 className="title one">Todos os Usuários</h1>
        <ul>
          {allUsers &&
            allUsers.map((user) => (
              <li key={user.id}>
                <ImageProfile>
                  <img src={user.image ? user.image : defaultUser} alt={user.name} />
                </ImageProfile>
                <div>
                  <p className="text one">{user.name}</p>
                  <span className="text two">{user.bio}</span>
                </div>
                <button onClick={() => handleClickDelete(user.id)}>
                  <IoMdTrash />
                </button>
              </li>
            ))}
        </ul>
      </main>
    </StyledAllUsersPage>
  )
}
