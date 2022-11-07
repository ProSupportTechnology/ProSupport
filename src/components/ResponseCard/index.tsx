import { StyledImageProfile } from "../ImageProfile/style"
import { StyledResponseCard } from "./style"
import { TiPencil } from "react-icons/ti"
import { iResponseCard } from "./types"

export const ResponseCard = ({ tech, description, username, image, date, children }: iResponseCard) => {
  return (
    <StyledResponseCard>
      <div>
        <div className="imageContainer">
          <StyledImageProfile>
            <img src={image} alt="userphoto" />
          </StyledImageProfile>
          {username}
        </div>
        <div className="textContainer">
          <div>
            <h2>Resposta:</h2>
            <div className="containerTech">
              <div>{tech}</div>
              <TiPencil className="buttonEdit"></TiPencil>
            </div>
          </div>
          {description}
          {children}
        </div>
      </div>
      <span>{date}</span>
    </StyledResponseCard>
  )
}
