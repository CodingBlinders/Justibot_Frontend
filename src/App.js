import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import LandingPage from './Pages/LandingPage';
import HomePage from './Pages/HomePage';
import ProHomePage from './Pages/ProHomePage';
import Packages from './Pages/Packages';
import Login from './Pages/login';
import './Assets/css/login.css';
import 'flowbite';
import './App.css';
import SignUp from './Pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<HomePage type="Chat" />} />
          <Route path="/pro" element={<HomePage type="Pro" />} />
          <Route path="/enterprise" element={<HomePage type="Enterprise" />} />
          <Route path="/upgrade" element={<Packages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </NextUIProvider>
    </BrowserRouter>
  );
}

export default App;
