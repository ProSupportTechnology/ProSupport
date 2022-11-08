import { StyledQuestionCard } from "./style";
import { iQuestionCard } from "./types";
import photoProfile from "../../assets/photo.png";
import { useQuestionContext } from "../../contexts/QuestionContext";
import { StyledButton } from "../../style/button/style";
import { StyledImageQuestion } from "../ImageProfile/style";
import { IoMdTrash } from "react-icons/io";

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
  const { setIsModCreateRespOpen, setIsModDeleteQuestOpen, setUserQuestionId } =
    useQuestionContext();

  return (
    <>
      <StyledQuestionCard>
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
          <StyledButton
            variant={"default"}
            type="button"
            onClick={() => {
              setUserQuestionId(userQuestionId);
              setQuestionId(questionId);
              setIsModCreateRespOpen(true);
            }}
          >
            Abrir
          </StyledButton>
        </div>
      </StyledQuestionCard>
      {/* <span>{date}</span> */}
    </>
  );
};
