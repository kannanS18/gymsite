import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';
import {FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaHeadset, FaEnvelopeOpenText, FaMapMarkedAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="gym-footer">
      <div className="gym-footer-main">
               <div className="gym-footer-about">
          <img src={logo} alt="IronRise Gym Logo" className="gym-footer-logo" />
          <p className="gym-footer-description">
            IronRise Gym is your destination for strength, wellness, and community. Our mission is to help you crush your fitness goals in a motivating and supportive environment.
          </p>
          <div className="gym-footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
        <div className="gym-footer-services">
          <h2>Our Services</h2>
          <ul>
            <li><Link to="/class#strength">Strength Training</Link></li>
            <li><Link to="/class#cardio">Cardio Classes</Link></li>
            <li><Link to="/class#personal">Personal Training</Link></li>
            <li><Link to="/class#nutrition">Nutrition Guidance</Link></li>
            <li><Link to="/class#group">Group Workouts</Link></li>
          </ul>
        </div>
        <div className="gym-footer-explore">
          <h2>Explore</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/pricing">Membership</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="tel:+911234567890" className="gym-footer-phone">Call Us</a></li>
          </ul>
        </div>
        <div className="gym-footer-timings">
          <h2>Timings</h2>
          <ul>
            <li><strong>Mon-Fri:</strong> 6:00am - 10:00pm</li>
            <li><strong>Sat:</strong> 7:00am - 8:00pm</li>
            <li><strong>Sun:</strong> 8:00am - 2:00pm</li>
          </ul>
        </div>
        <div className="gym-footer-contactus">
          <h2>Contact Us</h2>
          <ul className="gym-footer-contact-list">
            <li>
              <FaHeadset /> <a href="tel:+911234567890" className="gym-footer-phone">+91 12345 67890</a>
            </li>
            <li>
              <FaEnvelopeOpenText /> <a href="mailto:mseckannan@gmail.com" className="gym-footer-email">mseckannan@gmail.com</a>
            </li>
            <li>
              <FaMapMarkedAlt className="map-icon" /> IronRise, Fitness St, Gym City
            </li>
          </ul>
        </div>
      </div>
      <div className="gym-footer-bottom">
        &copy; {new Date().getFullYear()} IronRise Gym. All rights reserved.
      </div>
    </footer>
  );
}