import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
    h1 {
        color: ${({ theme }) => theme.text};
    }
    .home {
        background: ${({ theme }) => theme.body};
    }

    .country, .country span {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        border: ${({ theme }) => theme.body};
    }

    header {
        background: ${({ theme }) => theme.background};
    }

    .input {
        background: ${({ theme }) => theme.background};
    }

    .input::placeholder {
        color: ${({ theme }) => theme.text};
    }
  `;
