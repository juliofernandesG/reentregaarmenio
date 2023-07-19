import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Singup from './Pages/Singup';
import Cliente from './Home/Cliente';
import Cotacao from './Home/Cotacao';
import Fornecedor from './Home/Fornecedor';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/cotacao" element={<Cotacao />} />
        <Route path="/fornecedor" element={<Fornecedor />} />
     
      </Routes>
    </Router>
  );
};

export default AppRoutes;
