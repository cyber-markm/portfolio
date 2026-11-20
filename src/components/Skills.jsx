import { Bot, Code } from 'lucide-react'
import Section from './Section.jsx'
import html5 from 'devicon/icons/html5/html5-original.svg'
import css3 from 'devicon/icons/css3/css3-original.svg'
import javascript from 'devicon/icons/javascript/javascript-original.svg'
import react from 'devicon/icons/react/react-original.svg'
import vite from 'devicon/icons/vitejs/vitejs-original.svg'
import framerMotion from 'devicon/icons/motion/motion-original.svg'
import vscode from 'devicon/icons/vscode/vscode-original.svg'

const skills = [
  { id: 'html', name: 'HTML5', short: 'HTML5', note: 'Structure and semantics', icon: html5 },
  { id: 'css', name: 'CSS3', short: 'CSS3', note: 'Responsive layouts and styling', icon: css3 },
  { id: 'js', name: 'JavaScript', short: 'JavaScript', note: 'Interaction and logic', icon: javascript },
  { id: 'react', name: 'React', short: 'React', note: 'Reusable components', icon: react },
  { id: 'vite', name: 'Vite', short: 'Vite', note: 'Project setup and builds', icon: vite },
  { id: 'motion', name: 'Framer Motion', short: 'Framer', note: 'Subtle, tasteful motion', icon: framerMotion },
  { id: 'vscode', name: 'VS Code', short: 'VS Code', note: 'Where I build and test', icon: vscode },
  { id: 'ai', name: 'AI-assisted development', short: 'AI tools', note: 'Directing AI tools, then testing the results', Icon: Bot },
]

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-layout">
        <div className="orbit-wrap">
          <div className="orbit" aria-hidden="true">
            <div className="orbit__ring">
              {skills.map(({ id, short, icon, Icon }, i) => (
                <div key={id} className="orbit__item" style={{ '--i': i, '--n': skills.length }}>
                  <div className="orbit__badge">
                    <span className="orbit__tile">
                      {icon ? (
                        <img src={icon} alt="" width="24" height="24" />
                      ) : (
                        <Icon size={22} aria-hidden="true" />
                      )}
                    </span>
                    <span className="orbit__name">{short}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="orbit__hub">
              <Code size={22} aria-hidden="true" />
            </div>
          </div>
        </div>

        <div>
          <p className="muted">The technologies I used to build this portfolio.</p>
          <ul className="skill-list">
            {skills.map(({ id, name, note }) => (
              <li key={id}>
                <span className="skill-list__name">{name}</span>
                <span className="skill-list__note">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Skills