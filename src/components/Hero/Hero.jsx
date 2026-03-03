
// Importa o CSS do Hero
import "./hero.css";

//Impoirta a imagem da pasta assets
import suaFoto from "../../assets/suaFoto.jpg";

function Hero() {
  return (
    //Seção principal da página inicial
    <section className="hero">

      {/*Lado esquerdo do Hero com texto e botões*/}
      <div className="hero-left">
        <p className="hello">Hello.</p>

        <h1>
          I'm <span className="highlight">Jonas Eduardo</span>
        </h1>

        <h2>Front-End Developer</h2>

        {/*Botões de navegasão para Projetos e Contato*/}
        <div className="buttons">
          <button onClick={() => window.location.href = "/projetos"} className="primary">Projetos</button>
          <button onClick={() => window.location.href = "/contato"} className="secondary">Contato</button>
        </div>
      </div>

      {/*Lado direito do Hero com imagem*/}
      <div className="hero-right">
        <div className="image-wrapper">
          <img src={suaFoto} alt="Jonas" />
        </div>
      </div>
    </section>
  );
}

export default Hero;