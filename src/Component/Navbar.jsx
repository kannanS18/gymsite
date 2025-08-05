import React ,{useState, useEffect}from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaPlus } from "react-icons/fa6";
import './Navbar.css'; 
export default function Navbar() {
  const [open, setOpen] = React.useState(false);
    
  const handleburger = () => {setOpen((prev) => !prev)
  };
  const closeMenu=() => {
    setOpen(false);
  };
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar-shrink' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </div>
      <div
        className={`burger${open ? " open" : ""}`}
        onClick={handleburger}
        aria-label={open ? "Close menu" : "Open menu"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      <div className='navbar-right'>
      <ul className={`navbar-links${open ? " open" : ""}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        </li>
                <li>
          {/* <NavLink to="/StartStrong" onClick={closeMenu}>Start Strong</NavLink> */}
        </li>
        <li>
          <NavLink to="/class" onClick={closeMenu}>Class</NavLink>
        </li>
        <li>
          <NavLink to="/scheduling" onClick={closeMenu}>Scheduling</NavLink>
        </li>
        <li>
          <NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </li>

      <li>
      <Link to="/contact" className='join-btn' onClick={closeMenu}>
        <FaPlus className="plus-icon" />
        join us
      </Link>
      </li>

      </ul>
      </div>
    </nav>
    
  )
}
