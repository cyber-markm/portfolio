import { BookOpen, Clock, Code, ExternalLink, Landmark } from 'lucide-react'
import Section from './Section.jsx'
import Carousel from './Carousel.jsx'

const projects = [
  {
    id: 'barangay-services',
    title: 'Barangay Services App',
    status: 'In progress',
    Icon: Landmark,
    description:
      'A web app that makes barangay services information easier to find and use for people in my community, on any device.',
    tech: ['React', 'Vite', 'JavaScript'],
    demoUrl: null,
    repoUrl: null,
  },
  {
    id: 'student-study-hub',
    title: 'Student Study Hub',
    status: 'In progress',
    Icon: BookOpen,
    description:
      'A shared space for student resources and study tools, built for students like me.',
    tech: ['React', 'Vite', 'JavaScript'],
    demoUrl: null,
    repoUrl: null,
  },
]

function ProjectCard({ project }) {
  const { Icon } = project
  const hasLinks = project.demoUrl || project.repoUrl

  return (
    <article className="skill-card project-card">
      <span className="skill-card__icon">
        <Icon size={28} aria-hidden="true" />
      </span>
      <p className="skill-card__tag">{project.status}</p>
      <h3>{project.title}</h3>
      <p className="muted">{project.description}</p>

      <ul className="chip-list" aria-label="Planned technologies">
        {project.tech.map((name) => (
          <li key={name} className="chip">
            {name}
          </li>
        ))}
      </ul>

      <div className="project-card__links">
        {project.demoUrl && (
          <a
            className="project-card__link"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} aria-hidden="true" />
            Live demo
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        )}
        {project.repoUrl && (
          <a
            className="project-card__link"
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code size={16} aria-hidden="true" />
            Source code
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        )}
        {!hasLinks && (
          <p className="project-card__soon">
            <Clock size={16} aria-hidden="true" />
            Demo and repository links coming soon
          </p>
        )}
      </div>
    </article>
  )
}

function Projects() {
  return (
    <Section id="projects" title="Projects" alt>
      <p className="muted">Swipe, drag, or use the arrow keys to browse my projects.</p>
      <Carousel
        label="Projects"
        items={projects}
        renderItem={(project) => <ProjectCard project={project} />}
      />
    </Section>
  )
}

export default Projects
