import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    :root{
        --color-primary: #fff;
        --color-secondary: #000;
        --color-background: #ECECEC;
        --color-background-secondary: #3B3B3B;
        --color-border: #CECECE;
        --color-border-secondary: #6C6C6C;
    }
    body {
        /* background-color: #ededed; */
        font-family: 'Roboto', sans-serif;
    }
  

`;

export const ContainerLayout = styled.div`
  max-width: 500px;
  margin: auto;
  background-color: var(--color-primary);
  h1 {
    margin: 0;
    padding: 0;
  }
`;

export const LineSeparator = styled.div`
  /* width: 338px; */
  height: 0.5px;
  background-color: var(--color-border);
  margin: auto;
`;
