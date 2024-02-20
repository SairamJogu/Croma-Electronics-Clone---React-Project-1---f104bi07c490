import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accessories from './components/mainPages/accessoriesPage/Accessories';
import HomePage from './components/mainPages/homePage/HomePage';
import Signup from './components/login/Signup';
import Login from './components/login/Login';
import React from 'react';
import CartPage from './components/cart/CartPage';
import { Context } from './components/context/Context'

export const UserContext = React.createContext();


function App() {

  return (
      <>
          <Context>
              <Router>
                  <Routes>
                      <Route path='/' element={<HomePage />} />
                      <Route path='/accessories' element={<Accessories />} />
                      <Route path='/auth/create' element={<Signup />} />
                      <Route path='/auth/login' element={<Login />} />
                      <Route path='/cart' element={<CartPage />} />
                  </Routes>
              </Router>
          </Context>
      </>
  );
}

export default App;