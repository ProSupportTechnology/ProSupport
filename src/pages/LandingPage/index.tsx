import { HeaderLandingPage } from "../../components/HeaderLandingPage";
import imageService from "../../assets/Landing1.png";
import altieris from "../../assets/altieris.jpg";
import bianca from "../../assets/bianca.png";
import henrique from "../../assets/henrique.jpg";
import thomas from "../../assets/thomas.jpg";
import victoria from "../../assets/victoria.jpg";
import wesley from "../../assets/wesley.png";

export const LandingPage = () => {
  return (
    <>
      <HeaderLandingPage />
      <main>
        <section className="sectionServices">
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
        </section>

        <section className="sectionTeam">
          <ul>
            <li>
              <div className="infoMember">
                <img src={altieris} alt="Foto Altieris" />
                <h2>Altieris Souza</h2>
              </div>
              <a
                target="blank"
                href="https://www.linkedin.com/in/altierissouza/"
              >
                LinkedIn
              </a>
              <a target="blank" href="https://github.com/Altieris-Souza">
                Git Hub
              </a>
            </li>
            <li>
              <div className="infoMember">
                <img src={bianca} alt="Foto Bianca" />
                <h2>Bianca Vallego</h2>
              </div>
              <a
                target="blank"
                href="https://www.linkedin.com/in/biancavellego/"
              >
                LinkedIn
              </a>
              <a target="blank" href="https://github.com/biancavellego">
                Git Hub
              </a>
            </li>
            <li>
              <div className="infoMember">
                <img src={henrique} alt="Foto Henrique" />
                <h2>Henrique Jesus</h2>
              </div>
              <a
                target="blank"
                href="https://www.linkedin.com/in/henrique-jesus128/"
              >
                LinkedIn
              </a>
              <a target="blank" href="https://github.com/henriquejesus128">
                Git Hub
              </a>
            </li>
            <li>
              <div className="infoMember">
                <img src={thomas} alt="Foto Thomas" />
                <h2>Thomas Schreiner</h2>
              </div>
              <a
                target="blank"
                href="https://www.linkedin.com/in/thomschreiner/"
              >
                LinkedIn
              </a>
              <a target="blank" href="https://github.com/ThomSchreiner">
                Git Hub
              </a>
            </li>
            <li>
              <div className="infoMember">
                <img src={victoria} alt="Foto Victoria" />
                <h2>Victoria Milan</h2>
              </div>
              <a
                target="blank"
                href="https://www.linkedin.com/in/victoriapmilan/"
              >
                LinkedIn
              </a>
              <a target="blank" href="https://github.com/victoriamilans">
                Git Hub
              </a>
            </li>
            <li>
              <div className="infoMember">
                <img src={wesley} alt="Foto Wesley" />
                <h2>Wesley Matos</h2>
              </div>
              <a
                target="blank"
                href="https://www.linkedin.com/in/wesley-matos/"
              >
                LinkedIn
              </a>
              <a target="blank" href="https://github.com/wesleydematos">
                Git Hub
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
