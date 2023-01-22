import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import AppRoutes from './AppRoutes';
import pageRoutes from './pages';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes routes={pageRoutes} />
    </BrowserRouter>

  );
}

export default App;
