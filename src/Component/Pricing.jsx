import React, { useEffect } from 'react';
import './Pricing.css';

export default function Pricing() {
  // Animate numbers, tilt, and features on mount
  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      // Wait for the animation to finish
      card.addEventListener('animationend', function handleAnim() {
        card.classList.add('throw-complete');
        card.removeEventListener('animationend', handleAnim);

        const tilt = card.querySelector('.card-tilt');
        if (!tilt) return;

        const handleMouseMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateY = ((centerX - x) / 8).toFixed(2); // adjust divisor for effect
          const rotateX = ((y - centerY ) / 8).toFixed(2);
          tilt.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05,1.05,1.05)`;
          const shine = card.querySelector('.shine');
          if (shine) {
            shine.style.opacity = "1";
            shine.style.transform = `rotate(30deg) translateX(${x / 10}%)`;
          }
        };
        const handleMouseLeave = () => {
          tilt.style.transform = '';
          const shine = card.querySelector('.shine');
          if (shine) shine.style.opacity = "0";
        };
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup if needed
      });
    });

    // Animate pricing amounts
    const amounts = document.querySelectorAll('.amount');
    amounts.forEach(amount => {
      const targetValue = parseInt(amount.textContent);
      animateValue(amount, 0, targetValue, 1500);
    });

    // Select plan effect
    const selectButtons = document.querySelectorAll('.select-btn');
    selectButtons.forEach(button => {
      const handleSelect = function () {
        const card = this.closest('.card');
        const tier = card.dataset.tier;
        cards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        card.classList.add('pulse');
        setTimeout(() => {
          card.classList.remove('pulse');
        }, 500);
        // You can add more logic here for selecting a pricing tier
        console.log(`Selected tier: ${tier}`);
      };
      button.addEventListener('click', handleSelect);

      // Cleanup
      return () => {
        button.removeEventListener('click', handleSelect);
      };
    });

    // Animate features list items
    const featuresList = document.querySelectorAll('.features li');
    featuresList.forEach((item, index) => {
      item.style.animationDelay = `${index * 100 + 300}ms`;
    });

    // No need to inject CSS dynamically; keep it in Pricing.css

  }, []);

  // Helper function for counting animation
  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  return (
    <div className='pricing-page'>
      <div className="container">
        <h1 className="main-title"><span>Pricing</span> Plans</h1>
        <p className="subtitle">Choose the perfect plan that suits your needs</p>

        <div className="pricing-cards">
          <div className="card" data-tier="basic">
            <div className="card-tilt">
              <div className="card-header">
                <div className="tier">Basic Fit</div>
                <div className="price">
                  <span className="currency">₹</span>
                  <span className="amount">1999</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="card-content">
                <ul className="features">
                  <li>Access to gym equipment</li>
                  <li>Free fitness assessment</li>
                  <li>Locker room access</li>
                  <li>Basic support</li>
                  <li className="not-included">Personalized workout plan</li>
                  <li className="not-included">Personal Trainer</li>
                  <li className="not-included">Monthly body composition analysis</li>
                  <li className="not-included">Protein powders</li>
                </ul>
                <button className="select-btn">Select Plan</button>
              </div>
            </div>
            <div className="shine"></div>
          </div>

          <div className="card premium" data-tier="premium">
            <div className="popular-tag">Most Popular</div>
            <div className="card-tilt">
            <div className="card-header">
              <div className="tier">Pro Fit</div>
              <div className="price">
                <span className="currency">₹</span>
                <span className="amount">3999</span>
                <span className="period">/month</span>
              </div>
            </div>
            <div className="card-content">
              <ul className="features">
                <li>Access to gym equipment</li>
                <li>Free fitness assessment</li>
                <li>Locker room access</li>
                <li>Basic support</li>
                <li>Personalized workout plan</li>
                <li>Personal Trainer</li>
                <li className="not-included">Monthly body composition analysis</li>
                <li className="not-included">Protein powders</li>
              </ul>
              <button className="select-btn">Select Plan</button>
            </div>
            </div>
            <div className="shine"></div>
          </div>

          <div className="card" data-tier="enterprise">
            <div className="card-tilt">
            <div className="card-header">
              <div className="tier">Elite Fit</div>
              <div className="price">
                <span className="currency">₹</span>
                <span className="amount">5999</span>
                <span className="period">/month</span>
              </div>
            </div>
            <div className="card-content">
              <ul className="features">
                <li>Access to gym equipment</li>
                <li>Free fitness assessment</li>
                <li>Locker room access</li>
                <li>Basic support</li>
                <li>Personalized workout plan</li>
                <li>Personal Trainer</li>
                <li>Monthly body composition analysis</li>
                <li>Protein powders</li>
              </ul>
              <button className="select-btn">Select Plan</button>
            </div>
            </div>
            <div className="shine"></div>
          </div>
        </div>
      </div>
    </div>
  );
}