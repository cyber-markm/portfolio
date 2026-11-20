import Container from './Container.jsx'

function Section({ id, title, alt = false, children }) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={alt ? 'section section--alt' : 'section'}
    >
      <Container>
        <h2 id={headingId}>{title}</h2>
        {children}
      </Container>
    </section>
  )
}

export default Section