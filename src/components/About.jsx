import React, { useEffect, useRef, useState } from "react";
import "../styles/About.css";
import CardSwap, { Card } from "./CardSwap";

const About = () => {
  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "4.8", label: "App Store Rating" },
    { number: "15", label: "Countries" },
    { number: "24/7", label: "Support" },
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions that anticipate user needs.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "We believe the best products are created through diverse perspectives and teamwork.",
    },
    {
      icon: "❤️",
      title: "User-Centric",
      description:
        "Our users are at the heart of everything we do. Their success is our success.",
    },
    {
      icon: "🌱",
      title: "Growth",
      description:
        "We're committed to continuous learning and improvement in all aspects of our work.",
    },
  ];

  const features = [
    {
      title: "Health Tips",
      description:
        "Get daily health tips and wellness advice from certified professionals.",
      image: "/images/health.jpg",
      color: "white",
    },
    {
      title: "Education",
      description:
        "Access educational content and learning resources across various subjects.",
      image: "/images/edu.jpg",
      color: "white",
    },
    {
      title: "Tech Tips",
      description:
        "Stay updated with the latest technology trends and practical tech advice.",
      image: "/images/tech.jpg",
      color: "white",
    },
    {
      title: "Law",
      description:
        "Understand legal concepts and get insights on important legal matters.",
      image: "/images/law.jpg",
      color: "white",
    },
    {
      title: "Sports",
      description:
        "Follow sports news, tips, and strategies from experts in various disciplines.",
      image: "/images/sports.jpg",
      color: "white",
    },
    {
      title: "Story",
      description:
        "Enjoy engaging stories and narratives from talented writers worldwide.",
      image: "/images/story.jpg",
      color: "white",
    },
  ];

  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right, .scale-in"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="about-us" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1 className="fade-in">Our Story</h1>
            <div className="hero-text">
              <p className="fade-in">
                LOOKIT was born from a simple idea: technology should work for
                you, not the other way around. Founded in 2020, our team set out
                to create a mobile companion that simplifies life while
                empowering users to achieve more.
              </p>
              <p className="fade-in">
                Today, we're proud to serve hundreds of thousands of users
                worldwide, helping them organize their lives, stay connected,
                and unlock their full potential.
              </p>
            </div>
          </div>
          <div className="hero-image scale-in">
            <img src="/images/abtimg.webp" alt="Team collaboration" />
          </div>
        </section>

        {/* Features Section with CardSwap or Carousel */}
        <section className="features-section">
          <h2 className="slide-in-left">Our Features</h2>
          <p className="section-subtitle fade-in">
            Discover the diverse content categories available in LOOKIT
          </p>

          <div className="features-container">
            <div className="features-list fade-in">
              <h3>What You'll Find</h3>
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-icon">
                      {feature.title.charAt(0)}
                    </span>
                    <div className="feature-info">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="features-cardswap">
              {!isMobile ? (
                // Desktop - CardSwap component
                <div style={{ height: "600px", position: "relative" }}>
                  <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={true}
                  >
                    {features.map((feature, index) => (
                      <Card key={index} customClass="feature-card">
                        <div
                          className="card-background"
                          style={{ backgroundImage: `url(${feature.image})` }}
                        ></div>
                        <div className="card-content">
                          <h3>{feature.title}</h3>
                          <p>{feature.description}</p>
                          <div className="card-overlay"></div>
                        </div>
                      </Card>
                    ))}
                  </CardSwap>
                </div>
              ) : (
                // Mobile - Carousel
                <div className="mobile-carousel">
                  <div className="carousel-container">
                    <div 
                      className="carousel-track"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {features.map((feature, index) => (
                        <div key={index} className="carousel-slide">
                          <div className="carousel-card">
                            <div
                              className="card-background"
                              style={{ backgroundImage: `url(${feature.image})` }}
                            ></div>
                            <div className="card-content">
                              {/* <h3>{feature.title}</h3>
                              <p>{feature.description}</p> */}
                              {/* <div className="card-overlay"></div> */}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Navigation buttons */}
                    <button className="carousel-btn carousel-prev" onClick={prevSlide}>
                      &#8249;
                    </button>
                    <button className="carousel-btn carousel-next" onClick={nextSlide}>
                      &#8250;
                    </button>
                    
                    {/* Indicators */}
                    <div className="carousel-indicators">
                      {features.map((_, index) => (
                        <button
                          key={index}
                          className={`indicator ${index === currentSlide ? 'active' : ''}`}
                          onClick={() => goToSlide(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <h2 className="slide-in-left">By The Numbers</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item scale-in">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2 className="slide-in-right">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-item fade-in">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <h2 className="slide-in-right">Our Mission</h2>
            <p className="fade-in">
              To create intuitive, powerful tools that enhance productivity and
              bring joy to everyday tasks. We believe technology should adapt to
              human needs, not the other way around.
            </p>
            <div className="mission-statement scale-in">
              <blockquote>
                "Empowering individuals to achieve more through thoughtful
                technology designed for real life."
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;