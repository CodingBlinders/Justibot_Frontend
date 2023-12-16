import React from 'react';
import justibot from '../Assets/Images/logo_justibot.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Select, SelectItem} from "@nextui-org/react";

const Sidebar = () => {
  return (
    <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
      <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
        <a href="/" className="flex align-content-center align-middle align-items-center pb-sm-3  text-white text-decoration-none" style={{width:'100%',justifyContent:'center',display:'flex'}}>
          <img src={justibot} alt="Logo" width="150px" height="auto" style={{marginTop:'10px'}}/>
          {/* <span className="fs-5">Justi<span className="d-none d-sm-inline">Bot</span></span> */}
        </a>
        <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
          <li className="nav-item">
            <a href="#" className="nav-link px-sm-0 px-2">
              <i className="fs-5 bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
            </a>
          </li>
          <li >
            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-sm-0 px-2">
              <i className="fs-5 bi-speedometer2"></i><span className="ms-1 d-none d-sm-inline ">Dashboard</span>
            </a>
          </li>

          {/* ... Other list items */}
        </ul>
        <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="hugenerd" width="28" height="28" className="rounded-circle" />
            <span className="d-none d-sm-inline mx-1">Chamika Madushan</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">New chat...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Switch to professional</a></li>
            {/* ... Other dropdown items */}
          </ul>
        </div>
      </div>

    </div>

  );
};

export default Sidebar;

