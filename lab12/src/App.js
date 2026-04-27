import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbars from './components/Navbar';
import Home from './components/home';
import Contact from './components/contact';

function App() {
  return (
    <>
      <h1 className='title'>React routing by Fnu Aburafay</h1>

      <BrowserRouter>
        <Navbars />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;