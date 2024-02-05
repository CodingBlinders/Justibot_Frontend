import React, { useState } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Sidebar from '../Components/Sidebar';
import Packages from '../Components/Packages';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

const HomePage = () => {

  const [chatMessages, setChatMessages] = useState([]);

  // Function to clear chat messages
  const clearChat = () => {
    localStorage.removeItem('chatMessages');
    setChatMessages([]);
  };
  
  return (
    <div>
      <NavBar/>
      <div className="overflow-auto">   
        <div className="col d-flex flex-column h-sm-100"> 
          <Packages />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;