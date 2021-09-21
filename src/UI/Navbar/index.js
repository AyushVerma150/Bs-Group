import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      console.log('Scrolledddd!!');
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <nav className={navbar || click ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              alt="Bs Group"
              src={Logo}
              style={{ overflow: 'hidden', width: '250px' }}
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={click ? 'fas fa-times' : 'fas fa-bars'}
              style={{ color: 'rgb(3, 124, 245)' }}
            />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
