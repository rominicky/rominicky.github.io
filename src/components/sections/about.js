import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'HTML & CSS',
    'JavaScript (ES6+)',
    'YAML / Liquid',
    'Jekyll',
    'React / Gatsby',
    'Git / GitHub',
    'Python / Jupyter',
    'R / Quarto',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hola! Soy Romina, profesional adjunto de la carrera CPA de CONICET y docente
              universitaria especializada en Humanidades Digitales. Trabajo en la intersección entre
              las humanidades digitales, el desarrollo web y la publicación académica abierta. Me
              apasiona crear plataformas interactivas que hagan accesibles los resultados de
              investigación y exploren nuevas formas de narrar con datos históricos. Mi interés por
              el desarrollo web y el análisis de datos surgió junto con mis proyectos académicos,
              donde comencé a construir herramientas para explorar, visualizar y publicar fuentes
              históricas.
            </p>
            <p>
              En los últimos años desarrollé diversos sitios de acceso abierto y visualizaciones
              interactivas para la comunicación científica, utilizando tecnologías como Gatsby,
              Jekyll, Leaflet, Quarto y sigma.js. Me interesan especialmente las narrativas
              espaciales, la visualización de redes históricas y las prácticas de investigación
              reproducibles.
            </p>

            <p>
              Mi portfolio académico en{' '}
              <a href="https://rominicky.github.io" target="_blank" rel="noopener noreferrer">
                rominicky.github.io
              </a>
            </p>
            <p>
              Mi producción académica se encuentra disponible en{' '}
              <a
                href="https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=25837&datos_academicos=yes"
                target="_blank"
                rel="noopener noreferrer">
                CONICET
              </a>
              , y en{' '}
              <a href="https://aacademica.org/rodeleon" target="_blank" rel="noopener noreferrer">
                Acta Académica
              </a>
              , presentado mis trabajos sobre medios impresos, redes culturales, ciencia abierta y
              métodos digitales aplicados a las humanidades.
            </p>

            <p>Estas son algunas de las tecnologías que utilizo actualmente:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
