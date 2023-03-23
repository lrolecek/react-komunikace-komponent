import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  return (
    <>
      <h1>Komunikace mezi komponentami</h1>
      <Rodic />
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
