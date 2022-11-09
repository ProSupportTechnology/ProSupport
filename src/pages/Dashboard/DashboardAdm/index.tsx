import { Header } from "../../../components/Header";
import { useUserContext } from "../../../contexts/UserContext";
import { StyledAdminCard, StyledDashboard } from "./style";
import photoProfile from "../../../assets/photo.png";
import { StyledImageQuestion } from "../../../components/ImageProfile/style";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { InputSearch } from "../../../components/InputSearch";
import { useEffect, useState } from "react";
import { iQuestion } from "../../../contexts/UserContext/types";
import { QuestionCard } from "../../../components/QuestionCard";
import { LoadingPage } from "../../LoadingPage";

export const DashboardAdm = () => {
  const { user } = useUserContext();
  const { email, name, admin, image } = user;
  const { allQuestions, searchedQuestion, setQuestionId } = useQuestionContext();
  const [ask, setAsk] = useState([] as iQuestion[]);

  useEffect(() => {
    const filtered = allQuestions.filter((element) =>
      element.tech.toLowerCase().includes(searchedQuestion.toLowerCase().trim())
    );
    setAsk(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedQuestion]);

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
            <span className="text one">{admin ? `Admin` : `Usuario`}</span>
            <span className="text one">{email}</span>
          </div>
        </StyledAdminCard>
        <div className="search">
          <h3 className="questionAreaTitle">Perguntas: </h3>
          <InputSearch />
        </div>
        <ul className="questionArea">
          {ask.length
            ? ask.map((element) => {
                return (
                  <QuestionCard
                    key={element.id}
                    title={element.title}
                    tech={element.tech}
                    description={element.description}
                    username={element.user.name}
                    image={element.user.image}
                    setQuestionId={setQuestionId}
                    questionId={element.id}
                    userQuestionId={element.userId}
                    date={element.created_at}
                  ></QuestionCard>
                );
              })
            : allQuestions.map((element) => {
                return (
                  <QuestionCard
                    key={element.id}
                    title={element.title}
                    tech={element.tech}
                    description={element.description}
                    username={element.user.name}
                    image={element.user.image}
                    setQuestionId={setQuestionId}
                    questionId={element.id}
                    userQuestionId={element.userId}
                    date={element.created_at}
                  ></QuestionCard>
                );
              })}
          {allQuestions.length === 0 && <h2 className="noQuestions">Não há perguntas no momento</h2>}
        </ul>
      </main>
    </StyledDashboard>
  );
};
