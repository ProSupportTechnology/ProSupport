import { Header } from "../../components/Header";
import { useQuestionContext } from "../../contexts/QuestionContext";
import { StyledDashboard } from "../Dashboard/DashboardAdm/style";
import { InputSearch } from "../../components/InputSearch";
import { QuestionCard } from "../../components/QuestionCard";
import { ResponseCard } from "../../components/ResponseCard";
import { useEffect, useState } from "react";
import { iQuestion } from "../../contexts/UserContext/types";

export const AnsweredQuestions = () => {
  const { allQuestions, searchedQuestion, setQuestionId } = useQuestionContext();

  const [searched, setsearched] = useState([] as iQuestion[]);

  useEffect(() => {
    const searched = allQuestions.filter((element) =>
      element.tech.toLowerCase().includes(searchedQuestion.toLowerCase().trim())
    );
    setsearched(searched);
  }, [searchedQuestion, allQuestions]);

  const asnwered = allQuestions.filter((element) => element.responses.length);

  return (
    <StyledDashboard className="backgroundDash">
      <Header />
      <main className="containerDash">
        <div className="search">
          <div className="searchArea">
            <InputSearch />
          </div>
        </div>
        <ul className="questionArea">
          {searched.length
            ? searched.map((element) => {
                return (
                  <li key={element.id}>
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
                  </li>
                );
              })
            : asnwered.map((element) => {
                return (
                  <li key={element.id}>
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
                  </li>
                );
              })}
        </ul>
      </main>
    </StyledDashboard>
  );
};
