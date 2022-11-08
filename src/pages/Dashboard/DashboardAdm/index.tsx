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
import { ModalCreateResponse } from "../../../components/Modal/ModalCreateResponse";
import { ModalDeleteQuestion } from "../../../components/Modal/ModalDeleteQuestion";
// Oi Thom
export const DashboardAdm = () => {
  const { user } = useUserContext();
  const { email, name, admin, image } = user;
  const {
    allQuestions,
    searchedQuestion,
    setQuestionId,
    isModCreateRespOpen,
    isModDeleteQuestOpen,
  } = useQuestionContext();
  const [teste, setTeste] = useState([] as iQuestion[]);

  useEffect(() => {
    const testee = allQuestions.filter((element) =>
      element.tech.toLowerCase().includes(searchedQuestion.toLowerCase().trim())
    );
    setTeste(testee);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedQuestion]);

  if (!user) return null;

  return (
    <StyledDashboard className="backgroundDash">
      {isModCreateRespOpen && <ModalCreateResponse />}
      {isModDeleteQuestOpen && <ModalDeleteQuestion />}

      <Header />
      <main className="containerDash">
        <StyledAdminCard>
          <StyledImageQuestion>
            <img src={image ? image : photoProfile} alt="foto de perfil" />
          </StyledImageQuestion>
          <div className="userContent">
            <h1>{name}</h1>
            <span>{admin ? `Admin` : `Usuario`}</span>
            <span>{email}</span>
          </div>
        </StyledAdminCard>
        <div className="search">
          <h3 className="questionAreaTitle">Perguntas</h3>
          <div className="searchArea">
            <InputSearch></InputSearch>
          </div>
        </div>
        <ul className="questionArea">
          {teste.length
            ? teste.map((element) => {
                return (
                  <QuestionCard
                    key={element.id}
                    title={element.title}
                    tech={element.tech}
                    description={element.description}
                    username={name}
                    image={image}
                    setQuestionId={setQuestionId}
                    questionId={element.id}
                    userQuestionId={element.userId}
                    date={new Date().toISOString()}
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
                    username={user.name}
                    image={user.image}
                    setQuestionId={setQuestionId}
                    questionId={element.id}
                    userQuestionId={element.userId}
                    date={new Date().toISOString()}
                  ></QuestionCard>
                );
              })}
        </ul>
      </main>
    </StyledDashboard>
  );
};
