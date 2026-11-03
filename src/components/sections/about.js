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
    grid-template-columns: repeat(2, minmax(140px, 220px));
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

  .academic-links {
    margin-top: 15px;
    font-size: var(--fz-sm);

    a {
      font-family: var(--font-mono);
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
  }, [prefersReducedMotion]);

  // Habilidades reorganizadas reflejando tu stack humanístico-computacional
  const skills = [
    'R (stylo, tidytext, ggplot2)',
    'Python (pandas, geopandas)',
    'Jekyll / Minimal Computing',
    'CollectionBuilder / Repositorios',
    'React / Gatsby / JavaScript',
    'SIG / QGIS / Leaflet',
    'Análisis de Redes (Gephi / Sigma.js)',
    'Git / GitHub Pages',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              ¡Hola! Soy Romina De León, historiadora (UBA), Profesional Adjunta de la carrera CPA
              de CONICET en el Laboratorio de Investigación en Humanidades Digitales (HD LAB,
              IIBICRIT) y especialista en Ciencias Sociales Computacionales (UNaB).
            </p>

            <p>
              Mi trabajo se sitúa en el cruce entre la historia colonial, las ciencias sociales
              computacionales, la edición digital académica y el desarrollo web de acceso abierto.
              Me apasiona aplicar métodos de lectura distante, estilometría, análisis de redes
              discursivas y mapas históricos (GIS/SIG) para explorar fuentes primarias, visibilizar
              voces veladas en los archivos e investigar el período colonial hispanoamericano.
            </p>

            <p>
              Bajo los principios de <em>minimal computing</em> y ciencia abierta, diseño
              plataformas interactivas, ediciones digitales de documentos y flujos de trabajo
              reproducibles que conectan la investigación académica con el desarrollo de
              herramientas web.
            </p>
            <p>
              Podés consultar mi perfil institucional y producción académica en{' '}
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
              y mi portfolio de proyectos en{' '}
              <a href="https://rominicky.github.io" target="_blank" rel="noopener noreferrer">
                rominicky.github.io
              </a>
            </p>

            <p>Estas son algunas de las tecnologías que utilizo actualmente:</p>
          </div>
          <ul className="skills-list">
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
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
              alt="Fotografía de Romina De León"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
