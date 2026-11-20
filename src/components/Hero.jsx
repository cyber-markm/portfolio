import { motion } from 'framer-motion'
import { ArrowRight, Code, GraduationCap, Headset, Mail, MapPin, User } from 'lucide-react'
import Container from './Container.jsx'

const facts = [
  { key: 'Based in', value: 'Cebu City, Philippines', Icon: MapPin },
  { key: 'Studying', value: 'BS Information Technology', Icon: GraduationCap },
  { key: 'Building', value: 'Community-focused web software', Icon: Code },
  { key: 'Background', value: 'Customer service and troubleshooting', Icon: Headset },
]

const nameWords = ['Mark', 'Marvin', 'Noynay']

const group = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const word = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: 'easeOut' },
  },
}

const card = {
  hidden: { opacity: 0, x: 48, scale: 0.94 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: 'easeOut',
      delay: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.18,
    },
  },
}

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <Container>
        <div className="hero__layout">
          <motion.div className="hero__content" variants={group} initial="hidden" animate="show">

            <motion.h1 id="hero-heading" variants={group}>
              {nameWords.map((text, i) => (
                <span key={text}>
                  {i > 0 && ' '}
                  <motion.span className="hero__word" variants={word}>
                    {text}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p className="lead" variants={item}>
              A full-time IT student with real work experience, learning to build web software that
              helps my community.
            </motion.p>

            <motion.div className="hero__actions" variants={item}>
              <a className="button" href="#projects">
                View my projects
                <ArrowRight size={20} aria-hidden="true" />
              </a>
              <a className="button button--ghost" href="#contact">
                <Mail size={20} aria-hidden="true" />
                Get in touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="player-card" variants={card} initial="hidden" animate="show">
            <motion.p className="player-card__label" variants={item}>
              <User size={16} aria-hidden="true" />
              Player profile
            </motion.p>
            <dl className="player-card__list">
              {facts.map(({ key, value, Icon }) => (
                <motion.div key={key} className="player-card__item" variants={item}>
                  <dt className="player-card__key">
                    <span className="player-card__icon">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    {key}
                  </dt>
                  <dd className="player-card__value">{value}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero