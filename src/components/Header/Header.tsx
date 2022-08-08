import "./styles.scss";

export const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <span>Meu Portifólio</span>
      </div>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Habilidades</a>
        </li>
        <li>
          <a href="">Projetos</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
