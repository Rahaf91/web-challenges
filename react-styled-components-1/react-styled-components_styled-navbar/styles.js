import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  :root {
    --primary-color: #034f84; 
    --secondary-color: #f24405;
    --primary-background: #d3d3d3;
  }


  body {
    margin: 0;
    font-family: system-ui;
  }
`;
