import { Header } from "../../components/Header";
import { useQuestionContext } from "../../contexts/QuestionContext";
import { StyledDashboard } from "../Dashboard/DashboardAdm/style";
import { InputSearch } from "../../components/InputSearch";
import { QuestionCard } from "../../components/QuestionCard";

export const AnsweredQuestions = () => {
  const { allQuestions, searchedQuestion, setSearchedQuestion } =
    useQuestionContext();

  return (
    <StyledDashboard>
      <Header></Header>
      <div className="backgroundDash">
        <div className="containerDash">
          <div className="search">
            <div className="searchArea">
              <InputSearch></InputSearch>
            </div>
          </div>
          <ul className="questionArea">
            {allQuestions.map((element) => {
              return (
                <QuestionCard
                  title={element.title}
                  tech={element.tech}
                  description={element.description}
                  username={element.user.name}
                  image={element.user.image}
                  date={new Date().toISOString()}
                ></QuestionCard>
              );
            })}
          </ul>
        </div>
      </div>
    </StyledDashboard>
  );
};
