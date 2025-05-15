/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// gatsby-ssr.js
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'es' });
};
