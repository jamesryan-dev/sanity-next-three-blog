import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --off-grey: #212020; 
    --off-grey2: #6495ed;
    --nice-dark: #151515;
    --header-font:  'dDin', sans-serif;
    --body-color: #ababab;
    --header-color: #cecece;
  }

  // angels racing
  // begok v15 regular
  // blair medium
  // cormorant
  // crafted
  // engadet
  // 

  * {
    &:focus {
      outline: none;
    }
  }


  @font-face {
    font-family: "dDin";
    src: url("/fonts/D-DIN.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  ::selection {
    background: #1b256c;
    color: white;
  }

  html, body {
    margin: 0 !important;
    font-size: 14px;
    background: var(--nice-dark);
  }

  #__next {
    padding-bottom: 25px;
  }

  .arrow-btn span,
  .burger span {
    font-family: Tahoma, Geneva, sans-serif;
    &:hover {
      opacity: 1;
      color: #f9f9f9;
      transition: all 0.333s ease-in-out;
    }
  }

  html {
    height: 100%;
    padding-top: 25px;
  }

  .slick-dots li:first-child {
    margin-left: 0;
  }

  iframe {
    border: none !important;
  }

  body {
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  select {
    font-family: helvetica;
    padding: 2rem 0;
    font-size: 1.3rem;
  }

  h1 {
    font-family: var(--header-font);
    margin-bottom: 24px;
    font-weight: 400px;
  }


  h2, h3, h4, h5, h6, h7 {
    font-family: var(--header-font);
    margin-bottom: 20px;
    font-weight: 400px;
  }

  h1, h2, h3, h4, h5, h6, h7, p, a, ul, li, button, input {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    color: var( --header-color);
  }

  h2 {
    font-size: 1.7em;
  }

  p, ul, li, a {
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
    font-size: 16px;
    color: var(--body-color);
  }

  ul {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 22px;
  }

  p {
    margin-bottom: 12px;
  }

  p + ul {
    padding-top: 6px;
  }

  ul, li {
    list-style: none;
    list-style-type: upper-roman;
  }

  li {
    position: relative;
  }

  li:before {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    background: white;
  }

  p {
    margin-bottom: 16px;

    a {
      text-decoration: none;
      position: relative;
      color: #f1f1f1;
      opacity: 0.8;
      transition: all .333s ease-in-out;
      &:hover {
        color: #f9f9f9;
        opacity: 1;
        &:after {
          background-color: #f9f9f9;
          transition: all .333s ease-in-out;
          width: 95%;
        }
      }
      &:after {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        background-color: #d7d7d7;
      }
    }

  }

  .button {
    padding: 3px 6px;
      color: white;
      color: #969696;
      opacity: 0.9;
      cursor: pointer;
      text-decoration: none;
      transition: all 1s ease;
      transition-delay: 0.1s;
      &:hover {
        opacity: 1;
      }
  }

  /* Do we need this?? */
  input, button {
    &:focus {
      outline: none;
    }
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    pointer-events: none;
  }
  
`;

export default GlobalStyles;
