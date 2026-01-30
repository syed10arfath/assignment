import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm Arfath</h1>
        <p>Full Stack Developer | Designer | Problem Solver</p>
        <p className="hero-description">
          I create beautiful and functional web experiences
        </p>
        <button className="cta-button">Get In Touch</button>
      </div>
      <div className="hero-shape"></div>
    </section>
  )
}
