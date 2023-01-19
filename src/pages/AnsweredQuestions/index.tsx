import { Header } from "../../components/Header";
import { useQuestionContext } from "../../contexts/QuestionContext";
import { InputSearch } from "../../components/InputSearch";
import { QuestionCard } from "../../components/QuestionCard";
import { ResponseCard } from "../../components/ResponseCard";
import { useEffect, useState } from "react";
import { iQuestion } from "../../contexts/UserContext/types";
import { StyledAnsweredQuestions } from "./style";
import { useUserContext } from "../../contexts/UserContext";

export const AnsweredQuestions = () => {
  const { allQuestions, searchedQuestion, setQuestionId } =
    useQuestionContext();
  const { user } = useUserContext();
  const { name, image } = user;

  const [searched, setsearched] = useState([] as iQuestion[]);

  useEffect(() => {
    const searched = allQuestions.filter((element) =>
      element.tech.toLowerCase().includes(searchedQuestion.toLowerCase().trim())
    );
    setsearched(searched);
  }, [searchedQuestion, allQuestions]);

  const asnwered = allQuestions.filter((element) => element.answer.length);

  return (
    <StyledAnsweredQuestions className="backgroundDash">
      <Header />
      <main className="containerDash">
        <InputSearch />
        <ul className="questionArea">
          {searched.length ? (
            searched.map((element) => {
              return (
                <div key={element.id}>
                  <QuestionCard
                    questionId={element.id}
                    userQuestionId={element.userId}
                    title={element.title}
                    tech={element.tech}
                    description={element.description}
                    username={element.user.name}
                    image={element.user.image}
                    date={element.created_at}
                  />
                  <ResponseCard
                    array={element.answer}
                    username={name}
                    image={image}
                  />
                </div>
              );
            })
          ) : asnwered.length ? (
            asnwered.map((element) => {
              return (
                <div key={element.id}>
                  <QuestionCard
                    questionId={element.id}
                    userQuestionId={element.userId}
                    title={element.title}
                    tech={element.tech}
                    description={element.description}
                    username={element.user.name}
                    image={element.user.image}
                    date={element.created_at}
                  />
                  <ResponseCard
                    array={element.answer}
                    username={element.user.name}
                    image={element.user.image}
                  />
                </div>
              );
            })
          ) : (
            <h2 className="noQuestions">Não possui perguntas respondidas</h2>
          )}
        </ul>
      </main>
    </StyledAnsweredQuestions>
  );
};
