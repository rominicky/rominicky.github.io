import React from 'react';

const IconLoader = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    role="img"
    aria-labelledby="loader-logo">
    <title id="loader-logo">Loader Logo</title>

    {/* Hexágono exterior */}
    <path
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      d="M 50, 5
         L 11, 27
         L 11, 72
         L 50, 95
         L 89, 73
         L 89, 28 z"
    />

    {/* Letra R centrada */}
    <text
      id="R"
      x="50%"
      y="58%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="42"
      fill="currentColor"
      fontFamily="'Calibre', 'Arial', sans-serif">
      R
    </text>
  </svg>
);

export default IconLoader;
