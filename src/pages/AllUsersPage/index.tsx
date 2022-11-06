import { Header } from "../../components/Header"
import { ImageProfile } from "../../components/ImageProfile"
import { api } from "../../services/api"
import { ReactNode, useEffect, useState } from "react"
import { IoMdTrash } from "react-icons/io"
import { StyledAllUsersPage } from "./style"
import defaultUser from "../../assets/photo.png"

interface iAllUsers {
  map(arg0: (user: iAllUsers) => JSX.Element): ReactNode
  admin?: boolean
  bio: string
  email: string
  id: number
  image: string
  name: string
  password?: string
}

export const AllUsersPage = () => {
  const [allUsers, setAllUsers] = useState<iAllUsers | null>(null)
  const [confirmDeleteUser, setConfirmDeleteUser] = useState({})

  function handleClickDelete() {}

  useEffect(() => {
    async function getAllUsers() {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHByb3N1cHBvcnQuY29tIiwiaWF0IjoxNjY3NzYyMDY2LCJleHAiOjE2Njc3NjU2NjYsInN1YiI6IjEifQ.Ehy8YJvLeTys8h_qISyqd8hZbLEB4pFIeey4eR_0wLo"
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const { data } = await api.get<iAllUsers>("/users")
        setAllUsers(data)
      } catch (error) {
        console.error(error)
      }
    }
    getAllUsers()
  }, [])

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
                <button>
                  <IoMdTrash />
                </button>
              </li>
            ))}
        </ul>
      </main>
    </StyledAllUsersPage>
  )
}
