import React,  { useState, useEffect } from 'react';
import '../App.css'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener
      return () => {  
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Run only once on component mount

  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled-navbar' : ''} navbar-expand-sm navbar-light fixed-top`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} style={{ width: '100px', height: '50px' }} alt="Logo" />
          <span style={{ fontFamily: 'Arial, sans-serif' }}><b>We Protect</b></span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#" className="nav-link">HOME</a></li>
            <li className="nav-item"><a href="#" className="nav-link">ECOSYSTEM</a></li>
            <li className="nav-item"><a href="#" className="nav-link">SPECIES</a></li>
            <li className="nav-item"><a href="#" className="nav-link">CLIMATE</a></li>
            <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;
