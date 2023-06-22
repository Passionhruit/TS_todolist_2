import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
    body {
        background-color: #acb1d6;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    
`;

export default GlobalStyle;
