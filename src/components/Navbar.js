import React, { useState, useEffect } from 'react';
import '../App.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled-navbar' : ''} navbar-expand-sm navbar-light fixed-top`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} style={{ width: '100px', height: '50px' }} alt="Logo" />
          <span style={{ fontFamily: 'Poppins' }}><b>We Protect</b></span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to="./Ecosystem">ECOSYSTEM</Link>
            </li>
            <li className="nav-item">
              <Link to="./EndageredSpecies">SPECIES</Link>
            </li>
            <li className="nav-item">
              <Link to="./Climate">CLIMATE</Link>
            </li>
            <li className="nav-item">
              <Link to="/donate" className="btn btn-primary">Donate</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
