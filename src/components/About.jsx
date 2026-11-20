import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Award,
  Briefcase,
  CreditCard,
  GraduationCap,
  Headset,
  ListChecks,
  MessageSquare,
  Users,
  Wrench,
} from 'lucide-react'
import Container from './Container.jsx'

const skills = [
  { label: 'Customer service', Icon: Headset },
  { label: 'Communication', Icon: MessageSquare },
  { label: 'Troubleshooting', Icon: Wrench },
  { label: 'Multitasking', Icon: ListChecks },
  { label: 'Teamwork', Icon: Users },
  { label: 'FinTech credit and subscription handling', Icon: CreditCard },
]

const journey = [
  {
    id: 'bsit',
    period: 'Present',
    title: 'BS Information Technology',
    place: 'Cebu Roosevelt Memorial Colleges, Bogo City, Cebu',
    detail: 'Full-time student, learning to build web software with AI assistance.',
    award: null,
    Icon: GraduationCap,
  },
  {
    id: 'ctnp',
    period: 'Oct 2025 – Mar 2026',
    title: 'Customer Service Representative',
    place: 'Cebu Tele-Net (CTNP), Cebu City',
    detail:
      'FinTech account: credit and subscription management, account reviews, churn reduction, cancellations, and credit adjustments.',
    award: null,
    Icon: Briefcase,
  },
  {
    id: 'bstm',
    period: 'Aug 2025 – Dec 2025',
    title: 'Bachelor of Science in Tourism Management',
    place: 'Cebu Technological University, Main Campus, Cebu City',
    detail: 'First semester only.',
    award: null,
    Icon: GraduationCap,
  },
  {
    id: 'qualfon',
    period: 'May 2023 – Mar 2025',
    title: 'Customer Service Representative',
    place: 'Qualfon Philippines, Cebu City',
    detail: 'Handled customer inquiries and resolved issues while multitasking.',
    award: 'Top Agent Certification, awarded 7 August 2024',
    Icon: Briefcase,
  },
  {
    id: 'jollibee',
    period: 'Aug 2019 – Jan 2022',
    title: 'Service Crew',
    place: 'Jollibee Corp. / Topserve Solutions, Mandaue City',
    detail: 'Took orders and assisted customers as part of a team.',
    award: null,
    Icon: Briefcase,
  },
  {
    id: 'shs',
    period: '2018 – 2020',
    title: 'Senior High School graduate',
    place: 'Asian College of Technology, Cebu City',
    detail: null,
    award: null,
    Icon: GraduationCap,
  },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const revealLate = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.15 } },
}

function ProfilePhoto() {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="about__photo about__photo--fallback"
        role="img"
        aria-label="Placeholder for Mark Marvin Noynay's profile photo"
      >
        MN
      </div>
    )
  }

  return (
    <img
      className="about__photo"
      src="/profile.jpg"
      alt="Mark Marvin Noynay smiling slightly, wearing a black suit, white shirt, and black tie with a star-shaped brooch"
      width="400"
      height="400"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

function About() {
  return (
    <section id="about" className="section section--alt" aria-labelledby="about-heading">
      <Container>
        <div className="about-grid">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 id="about-heading">About Me</h2>

            <div className="about__body">
              <ProfilePhoto />
              <p>
                I'm a full-time BS Information Technology student at Cebu Roosevelt Memorial
                Colleges in Bogo City, based in Cebu City. Before studying IT full time, I worked in
                customer service at Qualfon Philippines and Cebu Tele-Net, handling customer
                concerns and FinTech accounts every day.
              </p>
              <p className="about__more">
                That work taught me to troubleshoot, communicate clearly, and stay steady while
                juggling several things at once. Now I'm learning to build websites and web software
                with AI assistance, for things people around me can actually use: barangay services,
                small businesses, and students.
              </p>
            </div>

            <h3 className="subheading">Skills from work experience</h3>
            <ul className="chip-list" aria-label="Skills from work experience">
              {skills.map(({ label, Icon }) => (
                <li key={label} className="chip">
                  <Icon size={14} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={revealLate}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2>Journey so far</h2>
            <ol className="journey-list">
              {journey.map(({ id, period, title, place, detail, award, Icon }) => (
                <li key={id} className="journey-item">
                  <span className="journey-item__marker">
                    <Icon size={13} aria-hidden="true" />
                  </span>
                  <p className="journey-item__period">{period}</p>
                  <h3 className="journey-item__title">{title}</h3>
                  <p className="journey-item__place">{place}</p>
                  {detail && <p className="journey-item__detail">{detail}</p>}
                  {award && (
                    <p className="journey-item__award">
                      <Award size={14} aria-hidden="true" />
                      {award}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default About