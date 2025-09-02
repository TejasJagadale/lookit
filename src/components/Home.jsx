import React, { useEffect, useRef } from "react";
import "../styles/Home.css";

const Home = () => {
  const images = [
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/12.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/1.jpg",
    "/images/4.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/15.jpg",
    "/images/16.jpg",
    "/images/11.jpg",
  ];

  // Duplicate the images to create a seamless loop
  const duplicatedImages = [...images, ...images, ...images];
  
  const sliderRef = useRef(null);
  const leftContentRef = useRef(null);
  const homepageRef = useRef(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Apply parallax to left content
      if (leftContentRef.current) {
        leftContentRef.current.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      }
      
      // Apply parallax to slider
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateY(${scrollPosition * -0.1}px) rotate(-5deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Infinite scroll animation for the image slider
    const slider = sliderRef.current;
    let animationId;
    
    const animateSlider = () => {
      if (slider) {
        // Reset position when scrolled halfway
        if (slider.scrollTop > slider.scrollHeight / 2) {
          slider.scrollTop = 0;
        } else {
          slider.scrollTop += 0.5;
        }
      }
      animationId = requestAnimationFrame(animateSlider);
    };
    
    animateSlider();

    // Add initial fade-in animation for the whole page
    if (homepageRef.current) {
      homepageRef.current.style.opacity = '1';
    }

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="homepage" ref={homepageRef}>
      {/* Animated background elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Left Content */}
      <div className="left-content" ref={leftContentRef}>
        <h1 className="fade-in-up">
          Discover your smart mobile companion
        </h1>

        <p className="subtitle fade-in-up">
          Download LOOKIT today and explore powerful features <br /> right from
          your phone.
        </p>

        <ul className="features-listhome">
          <li className="slide-in-left">📅 Smart calendar to organize your day efficiently</li>
          <li className="slide-in-left">🔔 Reminders and notifications so you never miss anything</li>
          <li className="slide-in-left">📊 Track your habits and progress over time</li>
          <li className="slide-in-left">💬 Seamless social sharing with friends and family</li>
          <li className="slide-in-left">🔒 Secure and privacy-focused experience</li>
        </ul>

        <div className="buttons pulse">
          <a
            href="https://play.google.com/store/apps/details?id=com.makkal.calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="linkit"
          >
            <div>Install the App from</div>
            <img
              src="/images/google-play.png"
              alt="Get it on Google Play"
              className="play-badge"
            />
          </a>
        </div>

        <p className="cta fade-in">
          Start your journey to smarter planning today. Your productivity
          awaits!
        </p>
      </div>

      {/* Right Tilted Image Grid */}
      <div className="right-slider" ref={sliderRef}>
        <div className="column column-up">
          {duplicatedImages.slice(0, 8).map((src, i) => (
            <img key={i} src={src} alt={`col1-${i}`} className="zoom-on-hover" />
          ))}
        </div>
        <div className="column column-down">
          {duplicatedImages.slice(8, 16).map((src, i) => (
            <img key={i} src={src} alt={`col2-${i}`} className="zoom-on-hover" />
          ))}
        </div>
        <div className="column column-up">
          {duplicatedImages.slice(8, 16).map((src, i) => (
            <img key={i} src={src} alt={`col3-${i}`} className="zoom-on-hover" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;