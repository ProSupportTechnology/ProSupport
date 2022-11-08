import { StyledImageProfile } from "../ImageProfile/style";
import { StyledResponseCard } from "./style";
import { TiPencil } from "react-icons/ti";
import { iResponseCard } from "./types";
import userImg from "../../assets/photo.png";
import { CgClose } from "react-icons/cg";
import { useQuestionContext } from "../../contexts/QuestionContext";

export const ResponseCard = ({
  username,
  image,
  array,
  children,
}: iResponseCard) => {
  const { setResponseId, setIsModEditRespOpen, setIsModDeleteRespOpen } =
    useQuestionContext();
  return (
    <>
      {array.map((element: any) => {
        return (
          <StyledResponseCard>
            <div>
              <div className="techContainer">
                <TiPencil
                  className="buttonClose"
                  onClick={() => {
                    setIsModEditRespOpen(true);
                    setResponseId(element.id);
                  }}
                />
                <CgClose
                  className="buttonClose"
                  onClick={() => {
                    setResponseId(element.id);
                    setIsModDeleteRespOpen(true);
                  }}
                />
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
