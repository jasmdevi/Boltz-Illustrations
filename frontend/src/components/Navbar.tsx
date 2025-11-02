import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#home">BOLTZ ILLUSTRATIONS</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="btn small" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
