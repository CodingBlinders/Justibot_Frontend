import React, { useState } from 'react';
import {Button, ButtonGroup} from "@nextui-org/react";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Sidebar from '../Components/Sidebar';
import ProChatBot from '../Components/ProChatBot';
import ProFooter from '../Components/ProFooter';

const ProHomePage = () => {

  const [chatMessages, setChatMessages] = useState([]);

  // Function to clear chat messages
  const clearChat = () => {
    localStorage.removeItem('chatMessages');
    setChatMessages([]);
  };


  return (
    <div className="container-fluid overflow-hidden">
      <div className="row vh-100 overflow-auto">   
        <Sidebar clearChat={clearChat} />
        <div className="col d-flex flex-column h-sm-100"> 
          <ProChatBot />
          <ProFooter />
        </div>
      </div>
    </div>
  );
};

export default ProHomePage;
