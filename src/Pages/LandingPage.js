import React from 'react';
import { Link } from 'react-router-dom';
import {Button, ButtonGroup} from "@nextui-org/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LadyOfJustice from '../Assets/Images/ladyofjustice-2.jpg';


const LandingPage = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="text-center text-light">
            <h1>Welcome to the JustiBot</h1>
            <p>Chat now with Your Legal AI Assistant !</p>
            <Link to="/chat" className="btn btn-primary">
              Start Chat
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img src={LadyOfJustice} alt="Chat" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
