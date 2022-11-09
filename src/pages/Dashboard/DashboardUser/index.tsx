import { Header } from "../../../components/Header";
import { useUserContext } from "../../../contexts/UserContext";
import { StyledAdminCard, StyledDashboard } from "../DashboardAdm/style";
import { StyledImageQuestion } from "../../../components/ImageProfile/style";
import userImg from "../../../assets/photo.png";
import Chat from "../../../assets/chat.png";
import { StyledButton } from "../../../style/button/style";
import { StyledAskQuestionsArea, StyledMainUser } from "./style";
import { QuestionCard } from "../../../components/QuestionCard";
import { ResponseCard } from "../../../components/ResponseCard";
import { useEffect } from "react";
import { useQuestionContext } from "../../../contexts/QuestionContext";
export const DashboardUser = () => {
  const { user, getMyProfile } = useUserContext();
  const { allQuestions, setQuestionId } = useQuestionContext();

  useEffect(() => {
    getMyProfile();
  }, []);

  if (!user.questions) return null;

  return (
    <StyledDashboard className="backgroundDash">
      <Header />
      <main className="containerDash">
        <StyledAdminCard>
          <StyledImageQuestion>
            <img src={user.image ? user.image : userImg} alt="foto de perfil" />
          </StyledImageQuestion>
          <div className="userContent">
            <h1>{user.name}</h1>
            <p>Desenvolvedor</p>
          </div>
        </StyledAdminCard>
        <StyledMainUser>
          <h2 className="title">Envie uma pergunta</h2>
          <StyledAskQuestionsArea>
            <img src={Chat} alt="" />
            <p>O que você tem em mente?</p>
            <StyledButton variant="default">Postar</StyledButton>
          </StyledAskQuestionsArea>
          <h2 className="title">Perguntas feitas por você</h2>
          <ul className="userQuestionArea">
            {user.questions?.length ? (
              user.questions.map((element) => {
                return (
                  <QuestionCard
                    key={element.id}
                    title={element.title}
                    tech={element.tech}
                    description={element.description}
                    username={user.name}
                    image={user.image}
                    setQuestionId={setQuestionId}
                    questionId={element.id}
                    userQuestionId={element.userId}
                    date={new Date().toISOString()}
                  />
                );
              })
            ) : (
              <h2 className="noQuestions">Você ainda não fez nenhuma pergunta</h2>
            )}
          </ul>
          <h2 className="title">Perguntas respondidas</h2>
          <ul className="userQuestionArea">
            {user.questions.length ? (
              allQuestions.map((element) => {
                if (user.id === element.userId && element.responses.length) {
                  return (
                    <>
                      <QuestionCard
                        key={element.id}
                        title={element.title}
                        tech={element.tech}
                        description={element.description}
                        username={user.name}
                        image={user.image}
                        setQuestionId={setQuestionId}
                        questionId={element.id}
                        userQuestionId={element.userId}
                        date={new Date().toISOString()}
                      />
                      <ResponseCard array={element.responses} username={user.name} image={user.image} />
                    </>
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
