import styled, { createGlobalStyle } from "styled-components";
 

export const  GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #fff;
        --color-secondary: #000;
        --color-line-separator: #CECECE;
    }
    body {
        background-color: #ededed;
    }
`; 

export const ContainerLayout = styled.div`
    max-width: 360px;
    height: 100vh;
    margin: auto;
    h1 {
        margin: 0;
        padding: 0;

    }
`;

export const LineSeparator = styled.div`
    width: 338px;
    height: 0.5px;
    background-color: var(--color-line-separator);
    margin: auto;
`