import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Clients from './components/Author';
import Interface from './components/Interface';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9c27b0', // Purple
    },
    secondary: {
      main: '#03a9f4', // Blue
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Hero />
    <Features />
    <Interface />
    <Clients />
    <FAQ />
    <Footer />
  </ThemeProvider>
);

export default App;
