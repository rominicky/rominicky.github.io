import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hola, soy</h1>;
  const two = <h2 className="big-heading">Romina De León</h2>;
  const three = <h3 className="big-heading">...</h3>;
  const four = (
    <>
      <p>
        Formada en Historia, desarrolladora y entusiasta de la tecnología. Profesional adjunto de
        CONICET y docente universitaria con base en Buenos Aires, Argentina. Trabajo en la
        intersección entre las humanidades digitales, el desarrollo web y la publicación académica
        abierta. Me apasiona crear plataformas interactivas que hagan accesibles los resultados de
        investigación y exploren nuevas formas de narrar con datos históricos.
      </p>
      <p>
        Me especializo en desarrollo front-end, visualización de redes y datos espaciales, edición
        digital y metodologías reproducibles. En los últimos años he creado sitios, mapas narrativos
        y visualizaciones como parte del{' '}
        <a href="https://hdlab.space" target="_blank" rel="noreferrer">
          HDLAB
        </a>
        . Actualmente trabajo en{' '}
        <a href="https://" target="_blank" rel="noreferrer">
          {' '}
          Próximos proyectos
        </a>
        .
      </p>
    </>
  );
  const five = (
    <a className="email-link" href="/cv" target="_blank" rel="noreferrer">
      Mi CV!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
