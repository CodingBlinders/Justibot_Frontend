import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Sidebar from '../Components/Sidebar';
import ChatBot from '../Components/ChatBot';

const HomePage = () => {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row vh-100 overflow-auto">
        <Sidebar />

        <div className="col d-flex flex-column h-sm-100"> 
          <ChatBot />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
