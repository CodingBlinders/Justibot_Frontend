import React from 'react';
import LadyOfJustice from '../Assets/Images/ladyofjustice-2.jpg';
import {Button, ButtonGroup} from "@nextui-org/react";

import {Link} from "@nextui-org/react";
import NavBar from '../Components/NavBar';


const LandingPage = () => {
  return (
    <div>
      <NavBar />
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="text-center text-light">
            <h1>Welcome to the JustiBot</h1>
            <p>Chat now with Your Legal AI Assistant !</p>
            
            <Button color="primary" variant="bordered" text-colour="white">
              <Link to="/chat">
                Start Chat
              </Link>
            </Button> 
          </div>
        </div>
        <div className="col-md-6">
          <img src={LadyOfJustice} alt="Chat" className="img-fluid" />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default LandingPage;
