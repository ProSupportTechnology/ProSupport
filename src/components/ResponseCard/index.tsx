import { StyledImageProfile } from "../ImageProfile/style";
import { StyledResponseCard } from "./style";
import { TiPencil } from "react-icons/ti";
import { iResponseCard } from "./types";
import waterDrops from "../../assets/waterDrops.png";

export const ResponseCard = ({
  techs,
  description,
  username,
  image,
  date,
  children,
}: iResponseCard) => {
  return (
    <StyledResponseCard>
      <div>
        <div className="imageContainer">
          <StyledImageProfile>
            <img src={waterDrops} alt="userphoto" />
          </StyledImageProfile>
          {username}
        </div>
        <div className="textContainer">
          <div>
            <h2>Answer:</h2>
            <div className="containerTechs">
              <div>{techs}</div>
              <TiPencil className="buttonEdit"></TiPencil>
            </div>
          </div>
          {description}
          {children}
        </div>
      </div>
      <span>{date}</span>
    </StyledResponseCard>
  );
};
