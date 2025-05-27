import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '.../components/layout';

const StyledCVSection = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 20px 120px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .section {
    margin-bottom: 3rem;
  }

  h2 {
    color: var(--green);
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.75rem;
  }

  a {
    color: var(--green);
    text-decoration: underline;
  }
`;

const CVPage = ({ location }) => (
  <Layout location={location}>
    <StyledCVSection>
      <h1>Currículum Vitae</h1>

      <div className="section">
        <h2>Perfil</h2>
        <p>
          Historiadora e investigadora en CONICET, especializada en humanidades digitales,
          desarrollo web, edición académica abierta y publicación reproducible. Con experiencia en
          diseño de sitios interactivos, curaduría digital y visualización de datos históricos y
          redes. Docente universitaria e integrante del HDLAB.
        </p>
      </div>

      <div className="section">
        <h2>Habilidades</h2>
        <ul>
          <li>
            <strong>Lenguajes:</strong> R, Python, JavaScript, HTML, CSS, YAML, Liquid
          </li>
          <li>
            <strong>Frameworks:</strong> Gatsby (React), Jekyll, Quarto
          </li>
          <li>
            <strong>Visualización:</strong> Leaflet.js, sigma.js, ggplot2, Flourish
          </li>
          <li>
            <strong>Herramientas:</strong> Git/GitHub, RStudio, Jupyter Notebooks, VS Code
          </li>
          <li>
            <strong>Otros:</strong> Estilometría, minería de texto, edición académica digital,
            publicación reproducible
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Experiencia</h2>
        <ul>
          <li>
            <strong>Investigadora, CONICET</strong>
            <br />
            Líneas de investigación: historia de la prensa, análisis de redes intelectuales,
            digitalización de fuentes.
          </li>
          <li>
            <strong>Desarrolladora web, HDLAB</strong>
            <br />
            Desarrollo de plataformas interactivas como{' '}
            <a
              href="https://hdlab.space/viaje-al-rio-de-la-plata/sigma-viz/"
              target="_blank"
              rel="noreferrer">
              Viaje al Río de la Plata
            </a>
            ,{' '}
            <a href="https://hdlabconicet.github.io/novedades" target="_blank" rel="noreferrer">
              Novedades
            </a>{' '}
            y{' '}
            <a href="https://rominicky.github.io/" target="_blank" rel="noreferrer">
              Materiales
            </a>
            .
          </li>
          <li>
            <strong>Docente universitaria</strong>
            <br />
            Cursos sobre historia social, humanidades digitales y herramientas de publicación
            académica.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Educación</h2>
        <ul>
          <li>Doctora en Historia</li>
          <li>Licenciada en Historia</li>
        </ul>
      </div>

      <div className="section">
        <h2>Publicaciones</h2>
        <p>
          Consultá el listado actualizado en mi perfil de{' '}
          <a href="https://www.aacademica.org/rodeleon" target="_blank" rel="noreferrer">
            Aacádemica
          </a>
          .
        </p>
      </div>

      <div className="section">
        <h2>Contacto</h2>
        <p>
          <a href="mailto:romina@correo.com">romina@correo.com</a> —{' '}
          <a href="https://github.com/rominicky">github.com/rominicky</a>
        </p>
      </div>
    </StyledCVSection>
  </Layout>
);

CVPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default CVPage;
