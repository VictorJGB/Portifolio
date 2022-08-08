import "./styles.scss";
import ProfileImage from "../../assets/perfil.jpeg";

export const About = () => {
  return (
    <div className="about">
      <div className="about-text">
        <h1>Victor Jerrysson</h1>
        <h2>Gama Bastos</h2>
        <span>Desenvolvedor front-end</span>
        <p>
          Sou apaixonado por tecnologia e como ela conecta as pessoas <br />
          pelo mundo.
          <br />
          No lazer gosto de me divertir com jogos, animes e séries
        </p>
      </div>
      <div className="image">
        <img src={ProfileImage} alt="foto-de-perfil" />
      </div>
    </div>
  );
};

export default About;
