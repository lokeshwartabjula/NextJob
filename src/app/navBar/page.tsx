"use client";
import React from 'react';


const Navbar= (props: any) => {
  const navStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    marginBottom: '20px',
  };

  return (
    <nav style={navStyles}>
      {props?.links?.map((link: any, index: any) => (
        <a key={index} href="#" style={{ color: 'white', textDecoration: 'none' }}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
