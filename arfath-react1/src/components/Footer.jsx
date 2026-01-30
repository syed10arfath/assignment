import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Arfath</h3>
            <p>Full Stack Developer & Designer</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow</h4>
            <ul>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://github.com">GitHub</a></li>
              <li><a href="https://linkedin.com">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Arfath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
