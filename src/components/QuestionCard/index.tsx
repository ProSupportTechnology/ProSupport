import { StyledQuestionCard } from "./style";
import { iQuestionCard } from "./types";
import photoProfile from "../../assets/photo.png";
import { useQuestionContext } from "../../contexts/QuestionContext";
import { StyledButton } from "../../style/button/style";
import { StyledImageQuestion } from "../ImageProfile/style";
import { IoMdTrash } from "react-icons/io";
import { useUserContext } from "../../contexts/UserContext";

export const QuestionCard = ({
  title,
  tech,
  description,
  username,
  image,
  date,
  questionId,
  setQuestionId,
  userQuestionId,
}: iQuestionCard) => {
  const { setIsModCreateRespOpen, setIsModDeleteQuestOpen, setUserQuestionId } = useQuestionContext();
  const { user } = useUserContext();
  const { admin } = user;
  return (
    <>
      <StyledQuestionCard>
        <div className="mobileContainer">
          <div className="imageContainer">
            <StyledImageQuestion>
              <img src={image ? image : photoProfile} alt="foto de perfil" />
            </StyledImageQuestion>
            <p>{username}</p>
          </div>
          <div className="textContainer">
            <p className="text one">{title}</p>
            <span className="text two">{description}</span>
          </div>
        </div>
        <div className="btnContainer">
          <div className="techConatiner">
            <p className="text one">{tech}</p>
            <button
              onClick={() => {
                setUserQuestionId(userQuestionId);
                setQuestionId(questionId);
                setIsModDeleteQuestOpen(true);
              }}
            >
              <IoMdTrash />
            </button>
          </div>
          {admin && (
            <StyledButton
              variant={"default"}
              type="button"
              onClick={() => {
                setUserQuestionId(userQuestionId);
                setQuestionId(questionId);
                setIsModCreateRespOpen(true);
              }}
            >
              Responder
            </StyledButton>
          )}
        </div>
      </StyledQuestionCard>
      {/* <span>{date}</span> */}
    </>
  );
};
