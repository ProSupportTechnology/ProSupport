import { StyledQuestionCard } from "./style";
import { iQuestionCard } from "./types";
import photoProfile from "../../assets/photo.png";
import { StyledButton } from "../../style/button/style";
import { StyledImageQuestion } from "../ImageProfile/style";
import { IoMdTrash } from "react-icons/io";
import { useUserContext } from "../../contexts/UserContext";
import { useModalContext } from "../../contexts/ModalContext";
import { useQuestionContext } from "../../contexts/QuestionContext";

export const QuestionCard = ({
  title,
  tech,
  description,
  username,
  image,
  date,
  questionId,
  userQuestionId,
}: iQuestionCard) => {
  const { setIsModCreateRespOpen, setIsModDeleteQuestOpen } = useModalContext();
  const { user } = useUserContext();
  const { setQuestionId } = useQuestionContext();
  const { isAdm } = user;

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
                setQuestionId(questionId);
                setIsModDeleteQuestOpen(true);
              }}
            >
              <IoMdTrash />
            </button>
          </div>
          {isAdm && (
            <StyledButton
              variant={"default"}
              type="button"
              onClick={() => {
                console.log("clicou");
                setQuestionId(questionId);
                setIsModCreateRespOpen(true);
              }}
            >
              Responder
            </StyledButton>
          )}
        </div>
      </StyledQuestionCard>
      <span style={{ color: "var(--white)", marginLeft: "1rem" }}>{date}</span>
    </>
  );
};
