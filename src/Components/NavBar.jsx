// import React from 'react';

// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


// const NavBar = () => {
//   return (
//     <div>
//     <Navbar position="static" isBlurred="true" className="dark text-foreground bg-transparent">
//       <NavbarBrand>
//         <p className="font-bold text-inherit">JustiBot</p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="/upgrade" aria-current="page">
//             Upgrade
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="/login">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="/signup" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>

//     </div>
    
//   );
// };

// export default NavBar;


import React, { useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const AuthenticatedNavBar = ({ handleLogout }) => {
  return (
    <Navbar position="static" isBlurred="true" className="dark text-foreground bg-transparent">
      <NavbarBrand>
        <p className="font-bold text-inherit">JustiBot</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/dashboard" aria-current="page">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/profile">Profile</Link>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" variant="flat" onClick={handleLogout}>
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

const UnauthenticatedNavBar = () => {
  return (
    <Navbar position="static" isBlurred="true" className="dark text-foreground bg-transparent">
      <NavbarBrand>
        <p className="font-bold text-inherit">JustiBot</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

const NavBar = ({ isAuthenticated, handleLogout, setIsAuthenticated }) => {
  useEffect(() => {
    console.log('Effect is executing...');
    fetchAuthenticationStatus();
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts
  
  const fetchAuthenticationStatus = async () => {
    try {
      const response = await fetch('https://dev.codingblinders.com/validate');
      if (!response.ok) {
        throw new Error('Failed to fetch authentication status');
      }
      const data = await response.json();
      setIsAuthenticated(!!data.authenticated);
      console.log('Authentication status:', !!data.authenticated);
    } catch (error) {
      console.error('Error fetching authentication status:', error);
    }
  };
  
  return (
    <div>
      {isAuthenticated ? <AuthenticatedNavBar handleLogout={handleLogout} /> : <UnauthenticatedNavBar />}
    </div>
  );
};

export default NavBar;
