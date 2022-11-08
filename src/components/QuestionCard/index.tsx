import { StyledImageProfile } from "../ImageProfile/style";
import { StyledQuestionCard } from "./style";
import { CgClose } from "react-icons/cg";
import { iQuestionCard } from "./types";
import waterDrops from "../../assets/waterDrops.png";
import { useQuestionContext } from "../../contexts/QuestionContext";
import { StyledButton } from "../../style/button/style";

export const QuestionCard = ({
  title,
  tech,
  description,
  username,
  image,
  date,
  children,
  questionId,
  setQuestionId,
  userQuestionId,
}: iQuestionCard) => {
  const { setIsModCreateRespOpen, setIsModDeleteQuestOpen, setUserQuestionId } =
    useQuestionContext();

  return (
    <StyledQuestionCard>
      <div>
        <div className="techContainer">
          <div>
            <h2>{tech}</h2>
          </div>
          <CgClose
            className="button"
            onClick={() => {
              setUserQuestionId(userQuestionId);
              setQuestionId(questionId);
              setIsModDeleteQuestOpen(true);
            }}
          />
        </div>
        <div className="textContainer">
          <div className="imageContainer">
            <StyledImageProfile>
              <img src={waterDrops} alt="userphoto" />
            </StyledImageProfile>
            <h2>{username}</h2>
          </div>
          <div className="questionContent">
            <h2>{title}</h2>
            <p>{description}</p>
            {children}
          </div>
          <StyledButton
            variant={"default"}
            className="buttonReply"
            type="button"
            onClick={() => {
              setUserQuestionId(userQuestionId);
              setQuestionId(questionId);
              setIsModCreateRespOpen(true);
            }}
          >
            Reply
          </StyledButton>
        </div>
      </div>
      {/* <span>{date}</span> */}
    </StyledQuestionCard>
  );
};
