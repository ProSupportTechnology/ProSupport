import { StyledImageProfile } from "../ImageProfile/style";
import { StyledQuestionCard } from "./style";
import { CgClose } from "react-icons/cg";
import { iQuestionCard } from "./types";
import waterDrops from "../../assets/waterDrops.png";

export const QuestionCard = ({
  title,
  tech,
  description,
  username,
  image,
  date,
  children,
}: iQuestionCard) => {
  return (
    <StyledQuestionCard>
      <div>
        <div className="techContainer">
          <div>
          <h2>{tech}</h2>
          </div>
          <CgClose className="buttonClose"></CgClose>
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
        </div>
      </div>
      <span>{date}</span>
    </StyledQuestionCard>
  );
};
