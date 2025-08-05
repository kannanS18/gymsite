import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import ScrollToTop from './Component/ScrollToTop';
import Footer from './Component/Footer'
import Pricing from './Component/Pricing';
import Contact from './Component/Contact';
import Scheduling from './Component/Sheduling';
import Class from './Component/Class';
import Home from './Component/Home';
import About from './Component/About';
import StartStrong from './Component/StartStrong';



function App() {
  return (
     <Router basename="/gymsite">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/StartStrong" element={<StartStrong />} /> */}
        <Route path="/class" element={<Class />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
