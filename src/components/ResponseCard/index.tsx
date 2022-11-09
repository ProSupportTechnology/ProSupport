import { StyledImageQuestion } from "../ImageProfile/style";
import { StyledResponseCard } from "./style";
import { TiPencil } from "react-icons/ti";
import { iResponseCard } from "./types";
import { CgClose } from "react-icons/cg";
import { useQuestionContext } from "../../contexts/QuestionContext";
import photoProfile from "../../assets/photo.png";

export const ResponseCard = ({ username, image, array }: iResponseCard) => {
  const { setResponseId, setIsModEditRespOpen, setIsModDeleteRespOpen } =
    useQuestionContext();
  return (
    <>
      {array.map((element: any) => {
        return (
          <StyledResponseCard>
            <div className="mobileContainer">
              <div className="imageContainer">
                <StyledImageQuestion>
                  <img
                    src={image ? image : photoProfile}
                    alt="foto de perfil"
                  />
                </StyledImageQuestion>
                <p>{username}</p>
              </div>
              <div className="textContainer">
                <p className="text one">Resposta:</p>
                <span className="text two">Descrição</span>
              </div>
            </div>
            <div className="btnContainer">
              <div className="techConatiner">
                <button
                  onClick={() => {
                    setIsModEditRespOpen(true);
                    setResponseId(element.id);
                  }}
                >
                  <TiPencil />
                </button>
                <button
                  onClick={() => {
                    setResponseId(element.id);
                    setIsModDeleteRespOpen(true);
                  }}
                >
                  <CgClose />
                </button>
              </div>
            </div>
          </StyledResponseCard>
        );
      })}
    </>
  );
};
