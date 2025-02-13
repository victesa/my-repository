// Navbar.jsx
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Custom function to force scroll to a section by id
  const scrollToSection = (id) => {
    // Close the mobile menu if it's open
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop, // You might subtract a fixed header height if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <RouterLink to="/" className="logo">
          Victor
        </RouterLink>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li onClick={() => scrollToSection("services")}>Services</li>
          <li onClick={() => scrollToSection("works")}>Works</li>
          <li>
            <a href="/your_cv.pdf" download>
              Download CV
            </a>
          </li>
          <li onClick={() => scrollToSection("contact")}>Contact Me</li>
          <li>
            <button
              className="dark-mode-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
