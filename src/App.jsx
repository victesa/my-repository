import { useTheme } from "./ThemeContext"; 
import "./App.css";
import Navbar from "./NavBar";
import Home from "./Home";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
      {/* Wrapper for navbar and main content (75vw) */}
      <div className="container">
        <Navbar />
        <main className="main">
          <Home />
        </main>
      </div>

      {/* Footer (100vw) */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Victor Kirui. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/victesa" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/victor-kirui-16317a2a5/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
