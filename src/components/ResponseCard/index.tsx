import { StyledImageProfile } from "../ImageProfile/style";
import { StyledResponseCard } from "./style";
import { TiPencil } from "react-icons/ti";
import { iResponseCard } from "./types";
import userImg from "../../assets/photo.png";

export const ResponseCard = ({
  username,
  image,
  array,
  children,
}: iResponseCard) => {
  return (
    <>
      {array.map((element: any) => {
        return (
          <StyledResponseCard>
         <div>
        <div className="techContainer">
          <TiPencil className="buttonClose"></TiPencil>
        </div>
        <div className="textContainer">
          <div className="imageContainer">
            <StyledImageProfile>
              <img src={image ? image : userImg} alt="userphoto" />
            </StyledImageProfile>
            <h2>{username}</h2>
          </div>
          <div className="questionContent">
            <h2>Resposta:</h2>
            <p>{element.description}</p>
            {children}
          </div>
        </div>
      </div>
          </StyledResponseCard>
        );
      })}
    </>
  );
};
