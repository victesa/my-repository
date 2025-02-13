// Home.jsx
import "./Home.css";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Works from "./works";
// (No need to import react-scroll now)
import { useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const skills = [
    { name: "Android Development", level: "90%" },
    { name: "Web Development", level: "85%" },
    { name: "UI/UX Design", level: "75%" },
    { name: "Public Speaking", level: "80%" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("https://api.victorkirui.dev/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResponseMessage(result.error || "Failed to send message.");
      }
    } catch (error) {
      setResponseMessage("Something went wrong. Try again later.");
    }
    setIsSubmitting(false);
  };

  // Custom function to scroll to the Contact section
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="home">
      {/* HERO SECTION */}
      <div id="hero" className="hero-section">
        <div className="left-div">
          <p className="hi">Hi I am</p>
          <h2>Victor Kirui</h2>
          <h1 className="h1-top">Android & Web</h1>
          <h1 className="h1-bottom">Developer</h1>
          <p className="subtitle">
            I am a native android and web app developer residing in Nairobi,
            Kenya. I have over 6 years of experience building software solutions.
          </p>
          <button onClick={scrollToContact}>Contact Me</button>
        </div>

        <div className="right-div">
          <img
            src="/profile-pic.png"
            alt="Victor Kirui"
            className="profile-pic"
          />
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/victor-kirui-16317a2a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/Victorvics42"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://github.com/victesa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* ABOUT ME SECTION */}
      <div id="about" className="about-me">
        <div className="about-me-left-div">
          <img src="/about-me-pic.png" alt="Victor speaking at an event" />
        </div>
        <div className="about-me-right-div">
          <h2>About me</h2>
          <p>
            I’m an Android and web developer with a passion for building efficient
            and user-friendly applications. Beyond coding, I also share my
            knowledge as a speaker at tech events, helping others navigate the
            world of software development.
          </p>
          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-label">{skill.name}</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div id="services" className="services">
        <h1>Services</h1>
        <p>
          From apps to websites, I build solutions that work for you.
          <br />
          Below are the key services I offer.
        </p>
        <div className="item-cards-div">
          <div className="item-card">
            <img src="/phone-icon.png" alt="App Development Icon" style={{ width: "33px" }} />
            <h3>App Development</h3>
            <p>Building mobile applications tailored to your needs.</p>
          </div>
          <div className="item-card">
            <img src="/web-dev-icon.png" alt="Web Development Icon" />
            <h3>Web Development</h3>
            <p>Creating modern and responsive websites.</p>
          </div>
          <div className="item-card">
            <img src="/UI-icon.png" alt="UI/UX Icon" />
            <h3>UI/UX</h3>
            <p>Designing intuitive and engaging user interfaces.</p>
          </div>
          <div className="item-card">
            <img src="/bug-fixes.png" alt="Bug Fixes Icon" />
            <h3>Bug fixes</h3>
            <p>Debugging and optimizing applications for better performance.</p>
          </div>
        </div>
      </div>

      {/* WORKS SECTION - Wrapped with an id */}
      <div id="works">
        <Works />
      </div>

      {/* CONTACT SECTION */}
      <div id="contact" className="contact-me">
        <h2>Let's Work Together</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-div-name">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default Home;
