import { Header } from "../../components/Header";
import { useQuestionContext } from "../../contexts/QuestionContext";
import { StyledDashboard } from "../Dashboard/DashboardAdm/style";
import { InputSearch } from "../../components/InputSearch";
import { QuestionCard } from "../../components/QuestionCard";
import { ResponseCard } from "../../components/ResponseCard";
import { useEffect, useState } from "react";
import { iQuestion } from "../../contexts/UserContext/types";
import { StyledList } from "./style";
import { ModalEditResponse } from "../../components/Modal/ModalEditResponse";
import { ModalDeleteQuestion } from "../../components/Modal/ModalDeleteQuestion";
import { ModalCreateResponse } from "../../components/Modal/ModalCreateResponse";
import { ModalDeleteResponse } from "../../components/Modal/ModalDeleteResponse";

export const AnsweredQuestions = () => {
  const {
    allQuestions,
    searchedQuestion,
    setQuestionId,
    isModEditRespOpen,
    isModDeleteQuestOpen,
    isModCreateRespOpen,
    isModDeleteRespOpen,
  } = useQuestionContext();

  const [searched, setsearched] = useState([] as iQuestion[]);

  useEffect(() => {
    const searched = allQuestions.filter((element) =>
      element.tech.toLowerCase().includes(searchedQuestion.toLowerCase().trim())
    );
    setsearched(searched);
  }, [searchedQuestion, allQuestions]);

  const asnwered = allQuestions.filter((element) => element.responses.length);

  return (
    <StyledDashboard>
      {isModEditRespOpen && <ModalEditResponse />}
      {isModDeleteQuestOpen && <ModalDeleteQuestion />}
      {isModCreateRespOpen && <ModalCreateResponse />}
      {isModDeleteRespOpen && <ModalDeleteResponse />}

      <Header></Header>
      <div className="backgroundDash">
        <div className="containerDash">
          <div className="search">
            <div className="searchArea">
              <InputSearch></InputSearch>
            </div>
          </div>
          <ul className="questionArea">
            {searched.length
              ? searched.map((element) => {
                  return (
                    <StyledList key={element.id}>
                      <QuestionCard
                        setQuestionId={setQuestionId}
                        questionId={element.id}
                        userQuestionId={element.userId}
                        title={element.title}
                        tech={element.tech}
                        description={element.description}
                        username={element.user.name}
                        image={element.user.image}
                        date={new Date().toISOString()}
                      ></QuestionCard>
                      <ResponseCard
                        array={element.responses}
                        username={element.user.name}
                        image={element.user.image}
                      ></ResponseCard>
                    </StyledList>
                  );
                })
              : asnwered.map((element) => {
                  return (
                    <StyledList key={element.id}>
                      <QuestionCard
                        setQuestionId={setQuestionId}
                        questionId={element.id}
                        userQuestionId={element.userId}
                        title={element.title}
                        tech={element.tech}
                        description={element.description}
                        username={element.user.name}
                        image={element.user.image}
                        date={new Date().toISOString()}
                      ></QuestionCard>
                      <ResponseCard
                        array={element.responses}
                        username={element.user.name}
                        image={element.user.image}
                      ></ResponseCard>
                    </StyledList>
                  );
                })}
          </ul>
        </div>
      </div>
    </StyledDashboard>
  );
};
