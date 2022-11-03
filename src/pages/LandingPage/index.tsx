import { HeaderLandingPage } from "../../components/HeaderLandingPage";
import imageService from "../../assets/Landing1.png";
import altieris from "../../assets/altieris.png";
import bianca from "../../assets/bianca.png";
import henrique from "../../assets/henrique.png";
import thomas from "../../assets/thomas.png";
import victoria from "../../assets/victoria.png";
import wesley from "../../assets/wesley.png";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { MainLandingPage, SectionServices, SectionTeam } from "./style";

export const LandingPage = () => {
  return (
    <>
      <HeaderLandingPage />
      <MainLandingPage>
        <SectionServices>
          <div className="servicesContent">
            <div>
              <p>Contrate nossos serviços</p>
              <h1>
                Seus desenvolvedores têm perguntas, nós temos as respostas!
              </h1>
            </div>
            <p>Obtenha nosso suporte em desenvolvimento web para sua empresa</p>
          </div>
          <figure className="servicesImage">
            <img src={imageService} alt="Imagem serviços oferecidos" />
          </figure>
        </SectionServices>

        <SectionTeam>
          <ul>
            <li>
              <div className="infoMember">
                <img src={altieris} alt="Foto Altieris" />
                <h2>Altieris Souza</h2>
              </div>

              <div className="memberLinks">
                <a target="blank" href="https://www.instagram.com/altieris.sf/">
                  <BsInstagram />
                  Instagram
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/altierissouza/"
                >
                  <BsLinkedin />
                  LinkedIn
                </a>
                <a target="blank" href="https://github.com/Altieris-Souza">
                  <BsGithub />
                  Git Hub
                </a>
              </div>
            </li>

            <li>
              <div className="infoMember">
                <img src={bianca} alt="Foto Bianca" />
                <h2>Bianca Vallego</h2>
              </div>

              <div className="memberLinks">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/biancavellego/"
                >
                  <BsLinkedin />
                  LinkedIn
                </a>
                <a target="blank" href="https://github.com/biancavellego">
                  <BsGithub />
                  Git Hub
                </a>
              </div>
            </li>

            <li>
              <div className="infoMember">
                <img src={henrique} alt="Foto Henrique" />
                <h2>Henrique Jesus</h2>
              </div>

              <div className="memberLinks">
                <a target="blank" href="https://www.instagram.com/rik_zn/">
                  <BsInstagram />
                  Instagram
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/henrique-jesus128/"
                >
                  <BsLinkedin />
                  LinkedIn
                </a>
                <a target="blank" href="https://github.com/henriquejesus128">
                  <BsGithub />
                  Git Hub
                </a>
              </div>
            </li>

            <li>
              <div className="infoMember">
                <img src={thomas} alt="Foto Thomas" />
                <h2>Thomas Schreiner</h2>
              </div>

              <div className="memberLinks">
                <a
                  target="blank"
                  href="https://www.instagram.com/thomas__schreiner/"
                >
                  <BsInstagram />
                  Instagram
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/thomschreiner/"
                >
                  <BsLinkedin />
                  LinkedIn
                </a>
                <a target="blank" href="https://github.com/ThomSchreiner">
                  <BsGithub />
                  Git Hub
                </a>
              </div>
            </li>

            <li>
              <div className="infoMember">
                <img src={victoria} alt="Foto Victoria" />
                <h2>Victoria Milan</h2>
              </div>

              <div className="memberLinks">
                <a target="blank" href="https://www.instagram.com/not.find/">
                  <BsInstagram />
                  Instagram
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/victoriapmilan/"
                >
                  <BsLinkedin />
                  LinkedIn
                </a>
                <a target="blank" href="https://github.com/victoriamilans">
                  <BsGithub />
                  Git Hub
                </a>
              </div>
            </li>

            <li>
              <div className="infoMember">
                <img src={wesley} alt="Foto Wesley" />
                <h2>Wesley Matos</h2>
              </div>

              <div className="memberLinks">
                <a
                  target="blank"
                  href="https://www.instagram.com/wesleymatoos_/"
                >
                  <BsInstagram />
                  Instagram
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/wesley-matos/"
                >
                  <BsLinkedin />
                  LinkedIn
                </a>
                <a target="blank" href="https://github.com/wesleydematos">
                  <BsGithub />
                  Git Hub
                </a>
              </div>
            </li>
          </ul>
        </SectionTeam>
      </MainLandingPage>
    </>
  );
};
