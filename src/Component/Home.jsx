import React , {useEffect,useState,useRef}from 'react'
import { Link } from "react-router-dom";
import './Home.css';
import video from '../assets/Lift.mp4';
import{MdTrackChanges} from 'react-icons/md';
import{ FaAppleAlt,FaDumbbell, FaBiking} from 'react-icons/fa';
import{GiGymBag,GiWeightLiftingUp} from 'react-icons/gi';
import { useScrollAnimation } from './useScrollAnimation';
export default function Home() {

const [visible, setVisible] = useState(false);
const [homeRef, homeVisible] = useScrollAnimation();
const [cardRef, cardVisible] = useScrollAnimation();
const [infoRef, infoVisible] = useScrollAnimation();
const [ctaRef, ctaVisible] = useScrollAnimation();

const ref=useRef();
useEffect(()=>{
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        setVisible(entry.isIntersecting);
    });
  });
  if(ref.current){
    observer.observe(ref.current);
  }
  return () => {
    if(ref.current){
      observer.unobserve(ref.current);
    }
  };
}, []);
const [gymRightVisible, setGymRightVisible] = useState(false);
const gymRightRef = useRef();
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      setGymRightVisible(entry.isIntersecting);
    });
  });
  if (gymRightRef.current) {
    observer.observe(gymRightRef.current);
  }
  return () => {
    if (gymRightRef.current) {
      observer.unobserve(gymRightRef.current);
    }
  };
}, []);
  return (
    <div className="home-container">
      <div
        ref={homeRef}
        className={`video-background scroll-animate${homeVisible ? " visible" : ""}`}
      >
        <video src={video} autoPlay loop muted></video>
        <div className="overlay">
            <h1><span className='I'>I</span>RON<span className='R'>RI</span><span className='S'>SE</span></h1>
            <p>A fitness movement that is worth breaking a sweat for</p>
        </div>
      </div>
      <div className='card-container' ref={ref}>
        <div className={`card1 ${visible ? 'animate' : ''}`}>
          <MdTrackChanges className='icons'/>
          <h3>Beginner Friendly</h3>
          <p>Built for beginners, beasts, and everyone in between.</p>
        </div>
        <div className={`card2 ${visible ? 'animate' : ''}`}>
          <GiGymBag className='icons'/> 
          <h3>Fitness Services</h3>
          <p>Everything you need, from 1-on-1 coaching to community-powered results.</p>
           </div>
        <div className={`card3 ${visible ? 'animate' : ''}`}>
          <FaAppleAlt className='icons'/>
          <h3>Healthy Lifestyle</h3>
          <p>Train smart, eat right, and recover like a pro.</p>
        </div>
      </div>
      <div
        ref={infoRef}
        className={`Gym-Info scroll-animate${infoVisible ? " visible" : ""}`}
      >
        <div className={`gymright ${gymRightVisible ? 'slide-in' : ''}`} ref={gymRightRef}>
          <h3 className={gymRightVisible ? 'fade-in delay-1' : ''}>We’re the upgrade button for your health</h3>
          <p className={gymRightVisible ? 'fade-in delay-2' : ''}>Level up your health  and crush your fitness goals with our all-in-one program built just for you!</p>
        <div className={`icons-container ${gymRightVisible ? 'fade-in delay-3' : ''}`}>
          <div className='icon1-block'>
         <GiWeightLiftingUp className='icons1'/>
         <p>Professional trainers</p>
         </div>
          <div className='icon1-block'>
          <FaDumbbell className='icons1'/>
          <p>Modern equipments</p>
          </div>
          <div className='icon1-block'>
          <FaBiking className='icons1'/>
          <p>Fancy gym machines</p>
          </div>
          </div>
          <Link to="/class" className={`tour ${gymRightVisible ? 'fade-in delay-4' : ''}`}>Take a Tour</Link>
        </div>
      <div className='gymleft'>
  <video
    src={require('../assets/gymvideo.mp4')}
    autoPlay
    muted
    loop
    style={{ width: '100%', height: '100%', borderRadius: '18px', objectFit: 'cover' }}
  />
</div>
      </div>
      <div
        ref={ctaRef}
        className={`cta-split-row scroll-animate${ctaVisible ? " visible" : ""}`}
      >
  <div className="cta-main-card">
    <h2>Start Your Transformation Today!</h2>
    <p>Join Iron Rise and unlock your best self. Flexible plans, expert trainers, and a community that cares.</p>
    <Link to="/pricing" className="cta-main-btn">See Memberships</Link>
  </div>
  <div className="cta-side-cards">
    <div className="cta-side-card cta-side-card--red">
      <h3>Need Help?</h3>
      <p>Talk to our team</p>
      <a href="tel:+911234567890" className="cta-side-link">Call Now</a>
    </div>
  <div className="cta-side-card cta-side-card--green">
  <h3>Try a Free Session</h3>
  <p>Experience our gym with a complimentary workout and meet our trainers.</p>
  <Link to="/contact" className="cta-side-link">Book Free Session</Link>
</div>
  </div>
</div>

</div>
  )
}
