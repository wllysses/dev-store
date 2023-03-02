import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #F0F2F5;
        --primary-color: #161B22;
        --secondary-color: #0D1117;
        --white: #fff;
        --grey: #E7E7E7;
        --purple: #6a2feb;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }

    body {
        background: var(--background-color);
        --webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    p {
        margin: 0;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`