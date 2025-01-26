import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { siteConfig } from './config';

const basePath = siteConfig.url.startsWith('http') ? new URL(siteConfig.url).pathname : siteConfig.url;
const normalizedBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={normalizedBasePath}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
