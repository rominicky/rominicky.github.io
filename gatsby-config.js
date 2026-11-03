const config = require('./src/config');

module.exports = {
  pathPrefix: '/',
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: 'Romina De León | Humanidades Digitales & Ciencias Sociales Computacionales',
    description:
      'Historiadora (UBA), Profesional Adjunta CPA CONICET y especialista en Ciencias Sociales Computacionales. Investigación en minería de texto, estilometría, SIG y edición digital abierta.',
    siteUrl: 'https://rominicky.github.io',
    image: '/og.png',
    twitterUsername: '@rominicky.dl',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://rominicky.github.io',
        sitemap: 'https://rominicky.github.io/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Romina De León',
        short_name: 'rdeleon',
        start_url: '/',
        background_color: config.colors?.darkNavy || '#0a192f',
        theme_color: config.colors?.navy || '#0a192f',
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    // `gatsby-plugin-offline`,

    // --- Carga de archivos locales (Markdown, Posts, Proyectos e Imágenes) ---
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `featured`,
        path: `${__dirname}/content/featured/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },

    // --- Transformación de archivos Markdown (.md) ---
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
            },
          },
          {
            resolve: 'gatsby-remark-code-titles',
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {
                r: 'r',
                py: 'python',
                sh: 'bash',
              },
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
  ],
};
