import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <span className="italic">
              Loo<span style={{ color: "#ffc300" }}>K</span>it
            </span>
          </a>
          {/* <img src="/images/Lookiticon.png" alt="Lookit Logo" className="logoimg" /> */}
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li>
            <a href="/about" onClick={() => handleLinkClick("about")}>
              About
            </a>
          </li>
          <li>
            <a href="/terms-and-conditions" onClick={() => handleLinkClick("terms")}>
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="/privacy-policy" onClick={() => handleLinkClick("privacy")}>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/contact" onClick={() => handleLinkClick("contact")}>
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Fullscreen Menu */}
        <div className={`overlay ${isOpen ? "show" : ""}`}>
          <div className="overlay-content">
            <ul>
              <li>
                <a
                  href="/"
                  onClick={() => handleLinkClick("/")}
                  className="nav-link-mobile"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={() => handleLinkClick("about")}
                  className="nav-link-mobile"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  onClick={() => handleLinkClick("terms")}
                  className="nav-link-mobile"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={() => handleLinkClick("privacy")}
                  className="nav-link-mobile"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={() => handleLinkClick("contact")}
                  className="nav-link-mobile"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
