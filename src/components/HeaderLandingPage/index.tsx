import logo from "../../assets/logo.png";
import { StyledButtonLink } from "../../style/buttonLink/style";
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
        <StyledButtonLink to="/login" variant="default">
          Login
        </StyledButtonLink>
        <StyledButtonLink to="/signup" variant="default">
          Criar conta
        </StyledButtonLink>
      </div>
    </StyledHeaderLandingPage>
  );
};
