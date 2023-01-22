import { Header } from "../../../components/Header";
import { useUserContext } from "../../../contexts/UserContext";
import { StyledAdminCard, StyledDashboard } from "../DashboardAdm/style";
import { StyledImageQuestion } from "../../../components/ImageProfile/style";
import photoProfile from "../../../assets/photo.png";
import { StyledButton } from "../../../style/button/style";
import { StyledAskQuestionsArea, StyledMainUser } from "./style";
import { QuestionCard } from "../../../components/QuestionCard";
import { ResponseCard } from "../../../components/ResponseCard";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { LoadingPage } from "../../LoadingPage";
import { useEffect } from "react";
import { iAllUsers } from "../../AllUsersPage/types";
import { IoMdChatbubbles } from "react-icons/io";
import { useModalContext } from "../../../contexts/ModalContext";

export const DashboardUser = () => {
  const { user, getMyProfile, allUsers } = useUserContext();
  const { userQuestions, getQuestionsByOneUser } = useQuestionContext();

  const { setIsModCreateQuestOpen } = useModalContext();
  const { email, name, isAdm, image } = user;
  const userAdmin = allUsers && (allUsers[0] as iAllUsers);
  useEffect(() => {
    getMyProfile();
    getQuestionsByOneUser();
  }, []);

  if (!userQuestions) return <LoadingPage />;
  if (!user) return <LoadingPage />;

  return (
    <StyledDashboard className="backgroundDash">
      <Header />
      <main className="containerDash">
        <StyledAdminCard>
          <StyledImageQuestion>
            <img src={image ? image : photoProfile} alt="foto de perfil" />
          </StyledImageQuestion>
          <div className="userContent">
            <h1 className="title one">{name}</h1>
            <span className="text one">{isAdm ? `Admin` : `Usuario`}</span>
            <span className="text one">{email}</span>
          </div>
        </StyledAdminCard>
        <StyledMainUser>
          <h2 className="title">Envie uma pergunta</h2>
          <StyledAskQuestionsArea>
            <IoMdChatbubbles />
            <p>Qual é sua duvida?</p>
            <StyledButton
              onClick={() => setIsModCreateQuestOpen(true)}
              variant="default"
            >
              Postar
            </StyledButton>
          </StyledAskQuestionsArea>
          <h2 className="title">Perguntas feitas por você:</h2>
          <ul className="userQuestionArea">
            {userQuestions?.length ? (
              userQuestions.map((element) => {
                return (
                  <QuestionCard
                    key={element.id}
                    title={element.title}
                    tech={element.tech}
                    description={element.description}
                    username={name}
                    image={image}
                    questionId={element.id}
                    userQuestionId={element.userId}
                    date={element.created_at}
                  />
                );
              })
            ) : (
              <h2 className="noQuestions">
                Você ainda não fez nenhuma pergunta
              </h2>
            )}
          </ul>
          <h2 className="title">Perguntas respondidas:</h2>
          <ul className="userQuestionArea">
            {userQuestions.length ? (
              userQuestions.map((element) => {
                if (element.answer.length) {
                  return (
                    <div key={element.id}>
                      <QuestionCard
                        title={element.title}
                        tech={element.tech}
                        description={element.description}
                        username={user.name}
                        image={user.image}
                        questionId={element.id}
                        userQuestionId={element.userId}
                        date={element.created_at}
                      />
                      <ResponseCard
                        array={element.answer}
                        username={userAdmin?.name as string}
                        image={userAdmin?.image as string}
                      />
                    </div>
                  );
                }
              })
            ) : (
              <h2 className="noQuestions">Nenhuma pergunta respondida</h2>
            )}
          </ul>
        </StyledMainUser>
      </main>
    </StyledDashboard>
  );
};
