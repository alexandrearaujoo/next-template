import styled, { createGlobalStyle } from 'styled-components';

import { Toaster } from 'sonner';

export const GlobalStyles = createGlobalStyle`
    :root {
    --heightContentPage: calc(100vh - 8rem);
    }

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    scrollbar-width: thin;
    scrollbar-color: #5126EA #B0A6F0; // Trocar de acordo com o site
  }

  html{
    font-size: 62.5%;
    background: white; // Trocar de acordo com o site
    scroll-behavior: smooth;
  }

  body{
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  * {
  scrollbar-width: thin;
  scrollbar-color: #5126EA #B0A6F0;
  }
/* Chrome, Edge and Safari */
  *::-webkit-scrollbar {
    width: 5px;
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: #B0A6F0; // Trocar de acordo com o site
  }
  *::-webkit-scrollbar-track:hover {
    background-color: #B0A6F0; // Trocar de acordo com o site
  }
  *::-webkit-scrollbar-track:active {
    background-color: #B0A6F0; // Trocar de acordo com o site
  }
  *::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #5126EA; // Trocar de acordo com o site
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: #4529E6; // Trocar de acordo com o site
  }
  *::-webkit-scrollbar-thumb:active {
    background-color: #4529E6; // Trocar de acordo com o site
  }
`;
