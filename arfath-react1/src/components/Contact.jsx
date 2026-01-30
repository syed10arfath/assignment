import '../styles/Contact.css'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you! I will get back to you soon.')
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          Have a project in mind? Let's collaborate!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Connect With Me</h3>
            <div className="contact-links">
              <a href="mailto:hello@arfath.dev" className="contact-link">
                📧 Email: hello@arfath.dev
              </a>
              <a href="https://linkedin.com" className="contact-link">
                💼 LinkedIn
              </a>
              <a href="https://github.com" className="contact-link">
                🐙 GitHub
              </a>
              <a href="https://twitter.com" className="contact-link">
                𝕏 Twitter
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
