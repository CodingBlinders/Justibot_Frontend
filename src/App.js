import LandingPage from './Pages/LandingPage';
import HomePage from './Pages/HomePage';
import ProHomePage from './Pages/ProHomePage';
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<HomePage />} />
          <Route path="/pro-chat" element={<ProHomePage />} />
        </Routes>
      </NextUIProvider>
    </BrowserRouter>
  );
}

export default App;
