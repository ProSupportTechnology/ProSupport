import { Header } from "../../../components/Header";
import { useUserContext } from "../../../contexts/UserContext";
import { StyledAdminCard, StyledDashboard } from "./style";
import userImg from "../../../assets/photo.png";
import { StyledImageProfile } from "../../../components/ImageProfile/style";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { CgClose } from "react-icons/cg";
import { InputSearch } from "../../../components/InputSearch";

export const DashboardAdm = () => {
  const { user } = useUserContext();
  const { allQuestions, searchedQuestion } = useQuestionContext();



  return (
    <StyledDashboard>
      <Header></Header>
      <div className="backgroundDash">
        <div className="containerDash">
          <StyledAdminCard>
            <StyledImageProfile>
              <img src={user.img ? user.img : userImg} alt="" />
              <button>Editar imagem</button>
            </StyledImageProfile>
            <div className="userContent">
              <h1>{user.user.name}</h1>
              <p>Expert coach</p>
              <p>
                Status: <span>Online</span>
              </p>
            </div>
          </StyledAdminCard>
          {user.user.bio && (
            <div className="userBio">
              <p>{user.user.bio}</p>
            </div>
          )}
          <div className="search">
            <h3 className="questionAreaTitle">Perguntas</h3>
            <div className="searchArea">
              <InputSearch></InputSearch>
            </div>
          </div>
          <ul className="questionArea">
            {searchedQuestion && searchedQuestion.map((element) => {
              return (
                <li key={element.id} className="questionCard">
                  <div className="cardUserInfo">
                    <div className="cardUserInfo">
                      <img
                        src={element.user.img ? element.user.img : userImg}
                        alt=""
                      />
                      <p>{element.user.name}</p>
                      <span>{element.techs}</span>
                    </div>
                    <CgClose></CgClose>
                  </div>
                  <div>
                    <p>Resultado da busca</p>
                    {element.description}
                    <button>Responder</button>
                  </div>
                </li>
              )
            })}
            {allQuestions.length ? (
              allQuestions.map((element) => {
                return (
                  <li key={element.id} className="questionCard">
                    <div className="cardUserInfo">
                      <div className="cardUserInfo">
                        <img
                          src={element.user.img ? element.user.img : userImg}
                          alt=""
                        />
                        <p>{element.user.name}</p>
                        <span>{element.techs}</span>
                      </div>
                      <CgClose></CgClose>
                    </div>
                    <div>
                      {element.description}
                      <button>Responder</button>
                    </div>
                  </li>
                );
              })
            ) : (
              <h1>oi</h1>
              // <QuestionCard></QuestionCard>
            )}
          </ul>
        </div>
      </div>
    </StyledDashboard>
  );
};
