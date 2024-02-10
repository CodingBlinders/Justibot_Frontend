import React from 'react';
import justibot from '../Assets/Images/logo_justibot.png';
import { Button } from "@nextui-org/react"; // Import Button component from Next UI
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faUpLong, faTachometerAlt, faCommentAlt, faCogs, faUserCircle } from '@fortawesome/free-solid-svg-icons';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {Select, SelectItem} from "@nextui-org/react";
import chatBot from "./ChatBot";
import clearChat from './clearChat';

const Sidebar = ({ clearChat }) => {

  return (
    <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
      <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
        <a href="/" className="flex align-content-center align-middle align-items-center pb-sm-3  text-white text-decoration-none" style={{width:'100%',justifyContent:'center',display:'flex'}}>
          <img src={justibot} alt="Logo" width="150px" height="auto" style={{marginTop:'10px'}}/>
          {/* <span className="fs-5">Justi<span className="d-none d-sm-inline">Bot</span></span> */}
        </a>
        <br/><br/>
        
        <div class="question-set">
          <a href="#" class="history-card block max-w-sm p-6 border-gray-200 rounded-lg hover:bg-blue-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="font-normal text-gray-700 dark:text-gray-400">Legal Custody Advice</p>
          </a>

          <a href="#" class="history-card block max-w-sm p-6 border-gray-200 rounded-lg hover:bg-blue-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="font-normal text-gray-700 dark:text-gray-400">Property Rights Inquiry</p>
          </a>

          <a href="#" class="history-card block max-w-sm p-6 border-gray-200 rounded-lg hover:bg-blue-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="font-normal text-gray-700 dark:text-gray-400">Divorce Process Explained</p>
          </a>
          <a href="#" class="history-card block max-w-sm p-6 border-gray-200 rounded-lg hover:bg-blue-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="font-normal text-gray-700 dark:text-gray-400">Child Custody Laws</p>
          </a>

          <a href="#" class="history-card block max-w-sm p-6 border-gray-200 rounded-lg hover:bg-blue-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="font-normal text-gray-700 dark:text-gray-400">Legal Rights After Accident</p>
          </a>

          <a href="#" class="history-card block max-w-sm p-6 border-gray-200 rounded-lg hover:bg-blue-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="font-normal text-gray-700 dark:text-gray-400">Tax Law Basics</p>
          </a>

          <a href="#" class="history-card block max-w-sm p-6 border-gray-200 rounded-lg hover:bg-blue-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="font-normal text-gray-700 dark:text-gray-400">Employment Law Queries</p>
          </a>
        </div>



        <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="hugenerd" width="28" height="28" className="rounded-circle" />
            <span className="d-none d-sm-inline mx-1">Chamika Madushan</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><Link to="/chat" className="dropdown-item">New Chat</Link></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><Link to="/pro" className="dropdown-item">Switch to professional</Link></li>
            <li><Link to="/enterprise" className="dropdown-item">Switch to enterprise</Link></li>
            {/* ... Other dropdown items */}
          </ul>
        </div>
      </div>

    </div>

  );
};

export default Sidebar;

