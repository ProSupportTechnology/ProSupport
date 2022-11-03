import { Link } from "react-router-dom";
import logo from "../../assets/ProSupport.png";
import { StyledHeaderLandingPage } from "./style";

export const HeaderLandingPage = () => {
  return (
    <StyledHeaderLandingPage>
      <div className="headerInfos">
        <img src={logo} alt="Logo Pro Support" />
        <div className="headerDetails">
          <p className="text one">Especialistas em Desenvolvimento Web</p>
          <p className="text one">
            Treinamento terceirizado para desenvolvedores
          </p>
        </div>
      </div>
      <div className="headerButtons">
        <Link to="/login" className="text one">
          Login
        </Link>
        <Link to="/signup" className="text one">
          Criar conta
        </Link>
      </div>
    </StyledHeaderLandingPage>
  );
};
