import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.cdnfonts.com/css/signate-grotesk');
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-color: #fafaf0;
    font-family: 'Signate Grotesk', sans-serif;
    font-weight: 400; 
    color: #364435;                                     
  }

  body {
  margin: 0;
  font-family: system-ui;
  }

  

  img {
    width: 200px;
    heigth: auto;
  }
`;
