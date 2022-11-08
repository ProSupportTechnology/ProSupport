import { Header } from "../../../components/Header";
import { useUserContext } from "../../../contexts/UserContext";
import { StyledAdminCard, StyledDashboard } from "./style";
import userImg from "../../../assets/photo.png";
import { StyledImageQuestion } from "../../../components/ImageProfile/style";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { InputSearch } from "../../../components/InputSearch";
import { useEffect, useState } from "react";
import { iQuestion } from "../../../contexts/UserContext/types";
import { QuestionCard } from "../../../components/QuestionCard";
import { StyledList } from "../../AnsweredQuestions/style";
import { ModalCreateResponse } from "../../../components/Modal/ModalCreateResponse";
import { ModalDeleteQuestion } from "../../../components/Modal/ModalDeleteQuestion";

export const DashboardAdm = () => {
  const { user } = useUserContext();
  const { allQuestions, searchedQuestion, setQuestionId, isModCreateRespOpen, isModDeleteQuestOpen } =
    useQuestionContext();
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
        <div>
          <StyledAdminCard>
            <StyledImageQuestion>
              <img src={user.image ? user.image : userImg} alt="foto de perfil" />
            </StyledImageQuestion>
            <div className="userContent">
              <h1>{user.name}</h1>
              <p>Desenvolvedor</p>
              <p>
                Status: <span>Online</span>
              </p>
            </div>
          </StyledAdminCard>
          {user.bio && (
            <div className="userBio">
              <p>{user.bio}</p>
            </div>
          )}
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
                    <StyledList key={element.id}>
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
                        date={new Date().toISOString()}
                      ></QuestionCard>
                    </StyledList>
                  );
                })
              : allQuestions.map((element) => {
                  console.log(element);
                  return (
                    <StyledList key={element.id}>
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
                        date={new Date().toISOString()}
                      ></QuestionCard>
                    </StyledList>
                  );
                })}
          </ul>
        </div>
      </main>
    </StyledDashboard>
  );
};
