import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* 1rem = 16px */
  :root {
    /* White */
    --white: #FFFFFF;
    --dark-white: #FCFCFD;
    --darker-white: #F5F4F6;
    --darkest-white: #EBEAED;

    /* Blue */
    --blue: #365DF0;
    --most-lightest-blue: #E1E7FD;
    
    --ink: #170c3a;
    --light-ink: #8F8A9B;
    --lighter-ink:#B1ADB9;

  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    min-height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;
  }

  /* react modal */
  .react-modal-overlay {
    background: rgba(23, 12, 58, 0.9);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .react-modal-content {
    width: 100%;
    max-width: 570px;
    background-color: var(--white);

    position: relative;

    padding: 3.125rem 6.25rem;
    position: relative;
    border-radius: 0.3125rem;
  }
  
  .react-modal-content-remove {
    width: 100%;
    max-width: 400px;
    background-color: var(--white);

    position: relative;

    padding: 1.875rem;
    position: relative;
    border-radius: 0.3125rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter .2s;

    &:hover {
      filter: brightness(.8);
    }
  }
`;
