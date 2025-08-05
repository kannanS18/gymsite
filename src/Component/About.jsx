import React from 'react';
import './About.css';
import trainersImg from '../assets/trainers.webp';
import equipmentImg from '../assets/equipment.webp';
import communityImg from '../assets/community.webp';
import cleanImg from '../assets/clean.webp';
export default function About() {
  return (
    <div className="about-container">
      <div className="background-blobs"></div>
      <div className="aboutus-hero">
        <div className="aboutus-hero-overlay">
          <h1 className="aboutus-title">About <span className="aboutus-title-highlight">IRON RISE</span></h1>
          <p className="aboutus-subtitle">Unleash Your Potential</p>
        </div>
      </div>
      <div className="aboutus-timeline">
        <div className="aboutus-timeline-step">
          <div className="aboutus-timeline-img">
            <img src={communityImg} alt="Who We Are" />
          </div>
          <div className="aboutus-timeline-content">
            <h2>Who We Are</h2>
            <p>
              Iron Rise is more than a gym—it's a movement. We believe fitness is for everyone, and our mission is to empower you to become your strongest self, both physically and mentally. Our expert trainers, modern equipment, and supportive community make us the perfect place to start or level up your fitness journey.
            </p>
          </div>
        </div>
        <div className="aboutus-timeline-step reverse">
          <div className="aboutus-timeline-img">
            <img src={trainersImg} alt="Our Vision" />
          </div>
          <div className="aboutus-timeline-content">
            <h2>Our Vision</h2>
            <p>
              To inspire and transform lives through fitness, nutrition, and a positive mindset. We strive to create an inclusive environment where everyone feels welcome, motivated, and challenged to reach their goals.
            </p>
          </div>
        </div>
        <div className="aboutus-timeline-step">
          <div className="aboutus-timeline-img">
            <img src={equipmentImg} alt="Our Facilities"  />
          </div>
          <div className="aboutus-timeline-content">
            <h2>Our Facilities</h2>
            <p>
              We offer the latest machines, free weights, and group classes in a clean, safe, and motivating environment. Our facilities are designed for all levels, from beginners to pros.
            </p>
          </div>
        </div>
        <div className="aboutus-timeline-step reverse">
          <div className="aboutus-timeline-img">
            <img src={cleanImg} alt="Why Join Us?" />
          </div>
          <div className="aboutus-timeline-content">
            <h2>Why Join Us?</h2>
            <ul>
              <li>Spotless Cleanliness &amp; Regular Maintenance</li>
              <li>Expert, Friendly Trainers</li>
              <li>Modern Equipment &amp; Group Classes</li>
              <li>Supportive Community</li>
              <li>Flexible Memberships</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}