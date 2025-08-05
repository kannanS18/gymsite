import React from 'react'
import { FaFacebookSquare, FaInstagram, FaHeadset, FaEnvelopeOpenText, FaMapMarkedAlt } from "react-icons/fa";
import './Contact.css';
export default function Contact() {
  return (
    <div className='contact'>
      <section className="contact_us">
        <div className="contact-flex-container">
          {/* Left Info Section */}
          <div className="contact-left-info">
            <h2>What We Do Is The Best</h2>
            <p>
              At IronRise Gym, we provide world-class equipment, expert trainers, and a motivating environment to help you achieve your fitness goals. Whether you're a beginner or a pro, our classes and facilities are designed for everyone.
            </p>
            <div className="contact-timings">
              <h3>We're Open</h3>
              <ul>
                <li><strong>Mon-Fri:</strong> 6:00am - 10:00pm</li>
                <li><strong>Sat:</strong> 7:00am - 8:00pm</li>
                <li><strong>Sun:</strong> 8:00am - 2:00pm</li>
              </ul>
            </div>
          </div>
          {/* Right Contact Section (your existing code) */}
          <div className="contact-form-side">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <div className="contact_inner">
                    <div className="row">
                      <div className="col-md-10">
                        <div className="contact_form_inner">
                          <div className="contact_field">
                            <h3>Contact Us</h3>
                            <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                            <form>
                              <input type="text" className="form-control form-group" placeholder="Name" />
                              <input type="text" className="form-control form-group" placeholder="Email" />
                              <select className="form-control form-group" defaultValue="">
                                <option value="" disabled>Select Class</option>
                                <option value="Cardio Craze">Cardio Craze</option>
                                <option value="Strength Zone">Strength Zone</option>
                                <option value="Core & Abs">Core & Abs</option>
                                <option value="Stretch & Relax">Stretch & Relax</option>
                                <option value="Full Body Fat Burn">Full Body Fat Burn</option>
                                <option value="Power Lifting">Power Lifting</option>
                              </select>
                              <textarea className="form-control form-group" placeholder="Message"></textarea>
                              <button className="contact_form_submit" type="submit">Send</button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="right_conatct_social_icon d-flex align-items-end">
                          <div className="socil_item_inner d-flex">
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex" }}>
                              <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                  <FaFacebookSquare />
                                </a>
                              </li>
                              <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                  <FaInstagram />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
