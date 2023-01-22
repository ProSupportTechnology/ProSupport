import { StyledImageQuestion } from "../ImageProfile/style";
import { StyledResponseCard } from "./style";
import { TiPencil } from "react-icons/ti";
import { iResponseCard } from "./types";
import { useQuestionContext } from "../../contexts/QuestionContext";
import photoProfile from "../../assets/photo.png";
import { useUserContext } from "../../contexts/UserContext";
import { IoMdTrash } from "react-icons/io";
import { useModalContext } from "../../contexts/ModalContext";

export const ResponseCard = ({ username, image, array }: iResponseCard) => {
  const { setResponseId } = useQuestionContext();
  const { setIsModEditRespOpen, setIsModDeleteRespOpen } = useModalContext();
  const { user } = useUserContext();
  const { isAdm } = user;

  return (
    <>
      {array.map((element: any) => {
        return (
          <StyledResponseCard key={element.id}>
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
                <span className="text two">{element.description}</span>
              </div>
            </div>
            <div className="btnContainer">
              <div className="techConatiner">
                {isAdm && (
                  <button
                    onClick={() => {
                      setIsModEditRespOpen(true);
                      setResponseId(element.id);
                    }}
                  >
                    <TiPencil />
                  </button>
                )}
                {isAdm && (
                  <button
                    onClick={() => {
                      setResponseId(element.id);
                      setIsModDeleteRespOpen(true);
                    }}
                  >
                    <IoMdTrash />
                  </button>
                )}
              </div>
            </div>
          </StyledResponseCard>
        );
      })}
    </>
  );
};
