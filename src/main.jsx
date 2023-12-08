import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const theme = createTheme({
  palette:{
    primary: {
      main: '#ffffff',
      contrastText: '#000000',

    },
  }
})



import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
