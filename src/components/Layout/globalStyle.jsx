import styled, { createGlobalStyle } from "styled-components";
 

export const  GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #fff;
        --color-secondary: #000;
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