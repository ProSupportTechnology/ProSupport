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
  const [ask, setAsk] = useState([] as iQuestion[]);

  useEffect(() => {
    const filtered = allQuestions.filter((element) =>
      element.tech.toLowerCase().includes(searchedQuestion.toLowerCase().trim())
    );
    setAsk(filtered);
    console.log(filtered)

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
          {ask.length ? 
             ask.map((element) => {
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
           :  allQuestions.map((element) => {
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
              {ask.length === 0 && <h2 className="noQuestions">Não há perguntas no momento</h2>}
        </ul>
      </main>
    </StyledDashboard>
  );
};

// : asnwered.length ? (
//   asnwered.map((element) => {
//     return (
//       <li key={element.id}>
//         <QuestionCard
//           setQuestionId={setQuestionId}
//           questionId={element.id}
//           userQuestionId={element.userId}
//           title={element.title}
//           tech={element.tech}
//           description={element.description}
//           username={element.user.name}
//           image={element.user.image}
//           date={new Date().toISOString()}
//         ></QuestionCard>
//         <ResponseCard
//           array={element.responses}
//           username={element.user.name}
//           image={element.user.image}
//         ></ResponseCard>
//       </li>
//     );
//   })
// ) : (
//   <h2 className="noQuestions">Não possui perguntas Respondidas</h2>
// )}