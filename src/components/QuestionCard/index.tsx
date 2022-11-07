import { StyledImageProfile } from "../ImageProfile/style";
import { StyledQuestionCard } from "./style";
import { CgClose } from "react-icons/cg";
import { iQuestionCard } from "./types";
import waterDrops from "../../assets/waterDrops.png";

export const QuestionCard = ({
  title,
  techs,
  description,
  username,
  image,
  date,
  children,
}: iQuestionCard) => {
  return (
    <StyledQuestionCard>
      <div>
        <div className="imageContainer">
          <StyledImageProfile>
            <img src={waterDrops} alt="userphoto" />
          </StyledImageProfile>
          {username}
        </div>
        <div className="textContainer">
          <div>
            <h2>{title}</h2>
            <div className="containerTechs">
              <div>{techs}</div>
              <CgClose className="buttonClose"></CgClose>
            </div>
          </div>
          {description}
          {children}
        </div>
      </div>
      <span>{date}</span>
    </StyledQuestionCard>
  );
};
