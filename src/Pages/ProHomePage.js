import React, { useState, useEffect } from 'react';
import {Button, ButtonGroup} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';


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

  const navigate = useNavigate();

  // Function to clear chat messages when route changes
  const handleRouteChange = () => {
    clearChat();
    // You can add additional logic here if needed
  };

  // Effect to listen for route changes
  useEffect(() => {
    return () => {
      // Cleanup function, clearChat when component unmounts
      clearChat();
    };
  }, []);



  return (
    <div className="container-fluid overflow-hidden">
      <div className="row vh-100 overflow-auto">   
        <Sidebar clearChat={clearChat} />
        <div className="col d-flex flex-column h-sm-100"> 
          <ProChatBot />
        </div>
      </div>
    </div>
  );
};

export default ProHomePage;
