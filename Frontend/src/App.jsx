
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
