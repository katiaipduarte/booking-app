import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        min-width: 360px;
        min-height: 660px;
        padding: 25px;


        #root {
            min-width: 360px;
            min-height: 641px;
        }

        .MuiFormControlLabel-root {
            display: none;
        }

        .MuiFilledInput-adornedEnd {
            pointer-events: none;
        }
    }
`;
