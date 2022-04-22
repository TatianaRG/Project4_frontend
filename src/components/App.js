import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/style.scss';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Shop from './Shop';
import Register from './Register';
import Login from './Login';
import Show from './Show';
import Basket from './Basket';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Shop />} />
      <Route path="/products/:id" element={<Show />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  </BrowserRouter>
);

export default App;
