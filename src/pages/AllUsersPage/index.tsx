import { useEffect, useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { Header } from "../../components/Header";
import { ImageProfile } from "../../components/ImageProfile";
import { StyledAllUsersPage } from "./style";
import defaultUser from "../../assets/photo.png";
import { iAllUsers } from "./types";
import { useUserContext } from "../../contexts/UserContext";
import { useQuestionContext } from "../../contexts/QuestionContext";
import { LoadingPage } from "../LoadingPage";

export const AllUsersPage = () => {
  // const [allUsers, setAllUsers] = useState<iAllUsers | null>(null);
  const { getAllUsers, setIdUserToDelete,  allUsers } = useUserContext();
  const { setIsModDeleteUser } = useQuestionContext();

  useEffect(() => {
    async function getUsers() {
       await getAllUsers();
    }
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!allUsers) return <LoadingPage />;

  return (
    <StyledAllUsersPage className="backgroundDash">
      <Header />
      <main className="containerDash">
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
                {!user.admin && (
                  <button
                    onClick={() => {
                      setIsModDeleteUser(true);
                      setIdUserToDelete(user.id);
                    }}
                  >
                    <IoMdTrash />
                  </button>
                )}
              </li>
            ))}
        </ul>
      </main>
    </StyledAllUsersPage>
  );
};
