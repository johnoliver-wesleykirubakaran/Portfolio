/**
 * Application entry point.
 *
 * Mounts the root `<App />` component into the DOM. StrictMode is enabled to
 * surface side-effect issues during development.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element #root was not found in the document.');
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);