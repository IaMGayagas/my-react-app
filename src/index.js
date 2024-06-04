
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import your main App component
import './index.css'; // Import your CSS

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Initial render 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
