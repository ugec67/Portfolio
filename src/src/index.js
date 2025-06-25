import React from 'react';
import ReactDOM from 'react-dom/client'; // Using React 18's createRoot
import App from './App'; // Import your main App component
import './index.css'; // Import your global CSS (for Tailwind setup)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
