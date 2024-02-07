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
  margin: 0;
  padding: 0;
  padding-bottom: 80px;
  font-family: 'Gowun Dodum', sans-serif;
  }

  h1 {
    margin: 25px;
    font-family: 'Bodoni Moda', sans-serif;
  }

  h3 {
    padding: 0;
    margin: 0;
  }

  img {
    width: auto;
    heigth: auto;
    border-radius: 90px;
  }

  .art-pieces-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

  textarea {
    border-radius: 10px;
  }

.comment-items {
  list-style-type: none;
}

.comment-form {
  margin-bottom: 25px;
}

.comments-container{
  max-width: 800px;
}

button{
  border: none;
  color: #f8f9e3;
  background-color: #545334;
  padding: 5px 15px;
  border-radius: 25px;
}

ul {
  margin: 0;
  padding: 0;
}

textarea{
  margin-top: 5px;
  margin-bottom: 5px;
}

textarea:focus{
  outline: none;
  border: solid 2px #545334;
}

textarea:-moz-focus {
  outline: none;
  border: solid 2px #545334;
}
`;
