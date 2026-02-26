import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <App />
      <Toaster position="top-center" expand={true} richColors />
    </ThemeProvider>
  </React.StrictMode>
);
