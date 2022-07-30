import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import { ThemeProvider } from '@mui/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';


import Web3Provider from "./contexts/Web3Provider";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Web3Provider>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
      </Web3Provider>
    </BrowserRouter>
  </React.StrictMode>
);
