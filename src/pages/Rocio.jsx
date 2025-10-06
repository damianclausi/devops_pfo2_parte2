import "./Rocio.css";

export default function Rocio() {
  return (
    <div class="rocio-body">
      <div class="header">
        <h2>Rocío Gómez</h2>
        <img
          src="https://github.com/rragmz/portafoliojs/blob/main/img/profile.png?raw=true"
          alt="Foto de perfil"
          class="profile-img"
          title="Foto de perfil"
        />
      </div>
      <section id="sobre-mi" class="section">
        <h2>sobre mí</h2>
        <div class="sobre-mi-content">
          <div class="texto">
            <p>
              Soy desarrolladora Python con experiencia en scraping y análisis
              de datos. Me especializo en crear soluciones eficientes que
              automatizan la extracción de información desde sitios web y
              aplicaciones móviles, ya sea mediante APIs públicas o a partir de
              contenido visible.
            </p>
            <p>
              Actualmente estudio la Tecnicatura en Desarrollo de Software, y me
              apasiona seguir aprendiendo sobre distintas áreas de la
              informática, especialmente frontend y desarrollo mobile.
            </p>
          </div>
        </div>
      </section>
      <section id="tarjetas" class="section">
        <h2>proyectos destacados</h2>
        <div class="tarjetas-container">
          <div class="rocio-tarjeta">
            <div class="imagen-wrapper">
              <img
                src="https://github.com/rragmz/portafoliojs/blob/main/img/proyecto1.jpg?raw=true"
                alt="Proyecto de scraping para food service"
              />
            </div>
            <span class="texto">
              <h3>scraping de food service</h3>
              <p>
                Desarrollo de spider para monitorear menúes Little Caesars para
                los países de Chile y Costa Rica con actualización diaria.
              </p>
            </span>
          </div>

          <div class="rocio-tarjeta invertida">
            <div class="imagen-wrapper">
              <img
                src="https://github.com/rragmz/portafoliojs/blob/main/img/proyecto2.jpg?raw=true"
                alt="Interceptación de solicitudes de Aplicación Móvil"
              />
            </div>
            <span class="texto">
              <h3>interceptación de solicitudes de app móvil</h3>
              <p>
                Análisis e interceptación del tráfico móvil de la app DiDi-Food
                para identificar y documentar los endpoints de su API.
              </p>
            </span>
          </div>
        </div>
      </section>

      <section id="habilidades" class="section">
        <h2>habilidades y tecnologías</h2>
        <div class="habilidades-container">
          <div class="habilidades-col">
            <h3>domino</h3>
            <ul>
              <li>
                <img
                  class="icono"
                  src="https://raw.githubusercontent.com/rragmz/portafoliojs/b36de2175c74d94276c07eb89b2a6e3f29bbebb6/img/python.svg"
                  alt="Python"
                  title="Python"
                />
              </li>
              <li>
                <img
                  class="icono"
                  src="https://raw.githubusercontent.com/rragmz/portafoliojs/b36de2175c74d94276c07eb89b2a6e3f29bbebb6/img/selenium.svg"
                  alt="Selenium"
                  title="Selenium"
                />
              </li>
              <li>
                <img
                  class="icono"
                  src="https://raw.githubusercontent.com/rragmz/portafoliojs/b36de2175c74d94276c07eb89b2a6e3f29bbebb6/img/scrapy.svg"
                  alt="Scrapy"
                  title="Scrapy"
                />
              </li>
              <li>
                <img
                  class="icono"
                  src="https://raw.githubusercontent.com/rragmz/portafoliojs/b36de2175c74d94276c07eb89b2a6e3f29bbebb6/img/docker.svg"
                  alt="Docker"
                  title="Docker"
                />
              </li>
              <li>
                <img
                  class="icono"
                  src="https://raw.githubusercontent.com/rragmz/portafoliojs/b36de2175c74d94276c07eb89b2a6e3f29bbebb6/img/postgresql.svg"
                  alt="PostgreSQL"
                  title="PostgreSQL"
                />
              </li>
              <li>
                <img
                  class="icono"
                  src="https://raw.githubusercontent.com/rragmz/portafoliojs/b36de2175c74d94276c07eb89b2a6e3f29bbebb6/img/apacheairflow.svg"
                  alt="Airflow"
                  title="Airflow"
                />
              </li>
              <li>
                <img
                  class="icono"
                  src="https://raw.githubusercontent.com/rragmz/portafoliojs/b36de2175c74d94276c07eb89b2a6e3f29bbebb6/img/googlecloud.svg"
                  alt="Google Cloud"
                  title="Google Cloud"
                />
              </li>
              <li>
                <img
                  class="icono"
                  src="https://raw.githubusercontent.com/rragmz/portafoliojs/b36de2175c74d94276c07eb89b2a6e3f29bbebb6/img/grafana.svg"
                  alt="Grafana"
                  title="Grafana"
                />
              </li>
            </ul>
          </div>
          <div class="habilidades-col">
            <h3>aprendiendo</h3>
            <ul>
              <li>
                <img
                  class="icono"
                  src="https://raw.githubusercontent.com/rragmz/portafoliojs/b36de2175c74d94276c07eb89b2a6e3f29bbebb6/img/javascript.svg"
                  alt="Javascript"
                  title="Javascript"
                />
              </li>
              <li>
                <img
                  class="icono"
                  src="https://raw.githubusercontent.com/rragmz/portafoliojs/b36de2175c74d94276c07eb89b2a6e3f29bbebb6/img/react.svg"
                  alt="React"
                  title="React"
                />
              </li>
              <li>
                <img
                  class="icono"
                  src="https://raw.githubusercontent.com/rragmz/portafoliojs/b36de2175c74d94276c07eb89b2a6e3f29bbebb6/img/kotlin.svg"
                  alt="Kotlin"
                  title="Kotlin"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="social-links">
          <a href="https://github.com/rragmz" target="_blank">
            <img src="https://raw.githubusercontent.com/rragmz/portafoliojs/b36de2175c74d94276c07eb89b2a6e3f29bbebb6/img/github.svg" alt="Github" title="Github" />
          </a>
          <a href="https://linkedin.com/in/rocioailengomez" target="_blank">
            <img src="https://raw.githubusercontent.com/rragmz/portafoliojs/b36de2175c74d94276c07eb89b2a6e3f29bbebb6/img/linkedin.svg" alt="Linkedin" title="Linkedin" />
          </a>
        </div>
      </footer>
    </div>
  );
}
