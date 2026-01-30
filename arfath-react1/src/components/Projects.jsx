import '../styles/Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather app with location-based forecasts',
      technologies: ['React', 'API Integration', 'Charts.js'],
      link: '#'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A content management system for creating and sharing articles',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
      link: '#'
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
