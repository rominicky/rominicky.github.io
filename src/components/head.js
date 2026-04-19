import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
            twitterUsername
          }
        }
      }
    `,
  );
  const { defaultTitle, defaultDescription, siteUrl, defaultImage, twitterUsername } =
    site.siteMetadata;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };
  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      {/* idioma a español */}
      <html lang="es" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="google-site-verification" content="9u5I3Ftz1BuzO1jce7bDkKJpNOtzuqW0mB0sbpJnrp8" />

      {/* Open Graph descomentado */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      {/* locale en español */}
      <meta property="og:locale" content="es_AR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Schema.org  */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Romina De León",
          "url": "https://rominicky.github.io",
          "image": "${seo.image}",
          "sameAs": [
            "https://orcid.org/0000-0003-2495-7213",
            "https://github.com/rominicky"
          ]
        }
      `}</script>

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/favicon.svg" type="image/svg+xml" />
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
