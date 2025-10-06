import "./Antonio.css";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGit,
  SiNodedotjs,
  SiMysql,
  SiBootstrap,
} from "react-icons/si";

export default function Antonio() {
  return (
    <div className="antonio-container">
      <header className="antonio-header">
        <img
          src="https://i.imgur.com/9g7edgU.jpeg"
          alt="Foto de Antonio"
          className="antonio-avatar"
        />

        <h2>Cesar Antonio Gill</h2>
        <p className="antonio-subtitle">Desarrollador en Formacion</p>
      </header>

      <section className="antonio-section">
        <h3>Sobre mí</h3>
        <p>
          Me encuentro actualmente en etapa de formación como desarrollador web.
          Si bien no tengo experiencia profesional aún, estoy comprometido con
          el aprendizaje continuo y la mejora constante de mis habilidades.
          Aspiro a dedicarme a esta área de forma profesional en el futuro,
          participando en proyectos que me permitan aplicar lo aprendido,
          trabajar en equipo y seguir creciendo día a día.
        </p>
      </section>

      <section className="antonio-section">
        <h3>Habilidades en programación</h3>
        <ul className="antonio-list">
          <li>HTML5 y CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js con Express</li>
          <li>Git y GitHub</li>
          <li>Apis REST</li>
        </ul>
      </section>

      <section className="antonio-section">
        <h3>Proyectos en los que estoy trabajando actualmente</h3>
        <div className="antonio-projects">
          <div className="antonio-card">
            <h4>Capa de invisivilidad de Harry Potter</h4>
            <p>
              Desarrollo de una capa de invisivilidad integrando la API
              'CloakVision' para permitir la visualización de objetos ocultos
              mediante realidad aumentada.
            </p>
          </div>
          <div className="antonio-card">
            <h4>Pokebola de Ash Ketchum</h4>
            <p>
              Desarrollo un sistema inteligente embebido dentro de la Pokébola,
              llamado PokeCore AI, que permite analizar en tiempo real el estado
              físico y emocional del Pokémon capturado
            </p>
          </div>
          <div className="antonio-card">
            <h4>Proyecto CocaCola</h4>
            <p>
              En Project Cola-X, utilizamos la IA FlavorDecrypt y la API
              TasteScan 3000 para intentar descifrar la receta oculta de
              Coca-Cola. El sistema analiza micro-residuos en latas recicladas y
              aplica algoritmos de espectrometría emocional para detectar
              patrones de nostalgia. Estamos cerca... pero el ingrediente X
              sigue siendo más escurridizo que el paradero de Elvis.
            </p>
          </div>
        </div>
      </section>

      <section className="antonio-section">
        <h3>Tecnologías que manejo</h3>
        <div className="antonio-tech-icons">
          <div>
            <SiHtml5 title="HTML5" />
            <span>HTML5</span>
          </div>
          <div>
            <SiCss3 title="CSS3" />
            <span>CSS3</span>
          </div>
          <div>
            <SiJavascript title="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div>
            <SiReact title="React" />
            <span>React</span>
          </div>
          <div>
            <SiGit title="Git" />
            <span>Git</span>
          </div>
          <div>
            <SiNodedotjs title="Node.js" />
            <span>Node.js</span>
          </div>
          <div>
            <SiMysql title="MySQL" />
            <span>MySQL</span>
          </div>
          <div>
            <SiBootstrap title="Bootstrap" />
            <span>Bootstrap</span>
          </div>
        </div>
      </section>

      <section className="antonio-section">
        <h3>Redes Sociales</h3>
        <div className="antonio-social">
          <a
            href="https://about.meta.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Meta"
          >
            <FaFacebook /> Meta
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="X"
          >
            <FaXTwitter /> X
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
