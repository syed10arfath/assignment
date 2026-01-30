import '../styles/About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer with 5+ years of experience building web applications.
              I specialize in React, Node.js, and creating responsive designs that work across all devices.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="about-skills">
            <h3>Skills</h3>
            <div className="skills-grid">
              <div className="skill-tag">React</div>
              <div className="skill-tag">JavaScript</div>
              <div className="skill-tag">CSS3</div>
              <div className="skill-tag">Node.js</div>
              <div className="skill-tag">Express</div>
              <div className="skill-tag">MongoDB</div>
              <div className="skill-tag">Git</div>
              <div className="skill-tag">Web Design</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
