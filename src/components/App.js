import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(
//   'pk_test_51KoaN8JDKLKFZsAo5VpGYhBPJDGHXQwSPZd6YgeoySbsRaQqyVQl6ntqUGafgKl3p8nWGiXoA9cPKUulkHKeL84400AsZqIUqA'
// );

import '../styles/style.scss';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Shop from './Shop';
import Register from './Register';
import Login from './Login';
import Show from './Show';
import Basket from './Basket';
import Footer from './Footer';
import Profile from './Profile';
// import CheckoutForm from './CheckoutForm';

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
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
