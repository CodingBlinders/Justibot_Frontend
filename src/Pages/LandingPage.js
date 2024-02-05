import React from 'react';
import LadyOfJustice from '../Assets/Images/ladyofjustice-2.jpg';
import {Button, ButtonGroup} from "@nextui-org/react";
import { TypeAnimation } from 'react-type-animation';

import {Link} from "@nextui-org/react";
import NavBar from '../Components/NavBar';
import { LinearGradient } from 'react-text-gradients'
import Footer from '../Components/Footer';



const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Explore legal intricacies seamlessly.',
        2000,
        'Explore law student simulations.',
        2000,
        'Explore real legal scenarios.',
        2000,
        'Explore precise business strategies.',
        2000,
      
        'Explore the legal world.',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' , alignContent: 'left'}}
      repeat={Infinity}
    />
  );
};


const LandingPage = () => {
  return (
  <div>
    <NavBar position="sticky"/>
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="large-text">
            <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
              Welcome to the JustiBot
            </LinearGradient>
          </h1><br/>

          <div className="text-center text-light">
            <ExampleComponent/>
            <p>Chat now with Your Legal AI Assistant !</p><br/>
            
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
    <Footer/>
  </div>
    
  );
};

export default LandingPage;
