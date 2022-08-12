import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css-3.png";
import jsImg from "../../assets/js.png";
import reactImg from "../../assets/react.png";
import "./styles.scss";

export const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-title">
        <h1>Habilidades</h1>
        <h3>Aqui estão alguns dos meus conhecimentos técnicos</h3>
      </div>
      <div className="skills-cards">
        {/* HTML */}
        <div className="skills-card">
          <img src={htmlImg} alt="HTML5" />
          <h1>HTML5</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            imperdiet, est ac faucibus blandit, lacus erat mollis tortor, quis
            egestas lectus tortor at arcu.
          </h3>
        </div>
        {/* CSS */}
        <div className="skills-card">
          <img src={cssImg} alt="CSS3" />
          <h1>CSS3</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            imperdiet, est ac faucibus blandit, lacus erat mollis tortor, quis
            egestas lectus tortor at arcu.
          </h3>
        </div>
        {/* JS */}
        <div className="skills-card">
          <img src={jsImg} alt="JavaScript" />
          <h1>Javascript</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            imperdiet, est ac faucibus blandit, lacus erat mollis tortor, quis
            egestas lectus tortor at arcu.
          </h3>
        </div>
        {/* REACT */}
        <div className="skills-card">
          <img src={reactImg} alt="React" />
          <h1>React</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            imperdiet, est ac faucibus blandit, lacus erat mollis tortor, quis
            egestas lectus tortor at arcu.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
