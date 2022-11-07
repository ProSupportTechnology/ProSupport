import { Header } from "../../components/Header";
import { useQuestionContext } from "../../contexts/QuestionContext";
import { StyledDashboard } from "../Dashboard/DashboardAdm/style";
import { InputSearch } from "../../components/InputSearch";

export const AnsweredQuestions = () => {
  const {
    allQuestions,
    searchedQuestion,
    setSearchedQuestion,
  } = useQuestionContext();

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
            {searchedQuestion
              ? allQuestions.map((element) => {
                  console.log(element);
                  if (element.tech.includes(searchedQuestion)) {
                    return <div>{element.title}</div>;
                  } else {
                    setSearchedQuestion("");
                  }
                })
              : allQuestions.map((element) => {
                  return (
                    <div>
                      {element.title}
                      {element.description}
                    </div>
                  );
                })}
          </ul>
        </div>
      </div>
    </StyledDashboard>
  );
};
