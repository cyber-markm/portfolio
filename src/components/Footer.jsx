import Container from './Container.jsx'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p className="muted">© {year} Mark Marvin Noynay. Cebu City, Philippines.</p>
        <p className="muted">Icons: Devicon and Lucide. Fonts: Inter and Plus Jakarta Sans.</p>
        <a href="#privacy-policy">Privacy Policy</a>
      </Container>
    </footer>
  )
}

export default Footer