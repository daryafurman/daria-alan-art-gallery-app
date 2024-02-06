import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Gowun+Dodum&display=swap');
@import url('https://fonts.googleapis.com/css?family=Bodoni+Moda&display=swap');
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-color: #fafaf0;
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: 100; 
    color: #364435;                                     
  }
  

  body {
  font-family: 'Gowun Dodum', sans-serif;
  line-height: 1.58;
  letter-spacing: -.003em;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
padding-bottom: 30px;
  }

  
  h1 {
    margin: 15px 0;
    font-family: 'Bodoni Moda', sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 50px;
    line-height: 1.15;
    letter-spacing: -.02em;
    color: rgba(0, 0, 0, 0.8);
    -webkit-font-smoothing: antialiased;
  }

p {
  margin: 0;
} 

  h3 {
    margin: 0;
  }

  img {
    width: auto;
    heigth: auto;
    margin-bottom: 15px;
    margin-top: 15px;
    border-radius: 100px;
  }

    .art-piece-detail-image {
      border-radius: 100px;
      box-shadow: 0 4px 20px hsla(0, 0%, 0%, 0.2);
  }

  .art-pieces-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

`;
