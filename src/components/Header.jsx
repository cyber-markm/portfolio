import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from './Container.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="site-header__brand" href="#home" onClick={close}>
          Mark Marvin Noynay
        </a>

        <button
          ref={buttonRef}
          type="button"
          className="menu-button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav id="primary-nav" aria-label="Primary" className={open ? 'site-nav site-nav--open' : 'site-nav'}>
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <a className="nav-link" href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />
      </Container>
    </header>
  )
}

export default Header