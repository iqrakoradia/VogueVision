import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

import "./Explore.css"; // Your CSS file

const Explore = () => {
  useEffect(() => {
    AOS.init();
  }, []);

      return (
    <div className="explore-container">
      {/* Animated Header */}
      <div className="explore-header">
        <span className="curated-style">Curated</span>
        <span className="curated-style">Style</span>
        <span className="crafted-for-you">Crafted</span>
        <span className="crafted-for-you">for</span>
        <span className="crafted-for-you">You!</span>
        <span className="curated-style">Curated</span>
        <span className="curated-style">Style</span>
        <span className="crafted-for-you">Crafted</span>
        <span className="crafted-for-you">for</span>
        <span className="crafted-for-you">You!</span>
      </div>
      {/* Module 1 */}
      <section className="module" id="module1" data-aos="fade-up">
        <div className="module-content">
          <h2>Virtual Stylist and Outfit Recommender</h2>
          <p>Personalized outfit suggestions based on your body type, season and more.</p>
          <Link to="/virtual-stylist">
            <button className="explore-button">Explore Now</button>
          </Link>
        </div>
      </section>

      {/* Module 2 */}
      <section className="module" id="module2" data-aos="fade-up">
        <div className="module-content">
          <h2>Makeup Shade Matcher</h2>
          <p>Find your perfect foundation and lipstick shade based on your unique skin tone.</p>
          <Link to="/makeup-shade-matcher">
            <button className="explore-button">Explore Now</button>
          </Link>
        </div>
      </section>

{/* Module 3 */}
<section className="module" id="module3" data-aos="fade-up">
  <div className="module-content">
    <h2>Image-Based Try-On</h2>
    <p>See it. Try it. Love it—before you plan to buy!</p>
    <Link to="/image-tryon"> {/* Updated route to VirtualTryOn */}
      <button className="explore-button">Explore Now</button>
    </Link>
  </div>
</section>


      {/* Module 4 */}
      <section className="module" id="module4" data-aos="fade-up">
        <div className="module-content">
          <h2>Style Evolution Tracker</h2>
          <p>Track your style over time and get insights into your fashion journey.</p>
          <Link to="/style-evolution-tracker">
            <button className="explore-button">Explore Now</button>
          </Link>
        </div>
      </section>

      {/* Module 5 */}
      {/* Module 5 - Mood Board Generator */}
      <section className="module" id="module5" data-aos="fade-up">
        <div className="module-content">
          <h2>Fashion Mood Board Generator</h2>
          <p>Generate mood boards based on themes, trends, or your favorite outfits.</p>
          <Link to="/moodboard">
            <button className="explore-button">Explore Now</button>
          </Link>
        </div>
      </section>

      {/* Module 6 */}
    <section className="module" id="module6" data-aos="fade-up">
      <div className="module-content">
        <h2>Ethical and Sustainable Brand Finder</h2>
        <p>Find fashion brands that align with your values for sustainability and ethics.</p>
        <Link to="/ethical-brand-finder">
           <button className="explore-button">Explore Now</button>
        </Link>
      </div>
    </section>

    </div>
  );
};

export default Explore;
