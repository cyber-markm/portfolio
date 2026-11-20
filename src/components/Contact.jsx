import { useState } from 'react'
import { Check, ExternalLink, Mail, Send } from 'lucide-react'
import Section from './Section.jsx'

const CONTACT_EMAIL = 'cyber.markmarvin@gmail.com'
const FORM_ENDPOINT = ''

const socials = [
  { label: 'GitHub', url: 'https://github.com/cyber-markm' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/Mark-Marvin-N' },
  { label: 'Facebook', url: '' },
].filter((social) => social.url)

function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio message from ${data.get('name')}`)
      const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`)
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (response.ok) {
        form.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" title="Contact">
      <div className="contact">
        <div className="contact__info">
          <p>
            Want to talk about a project, an opportunity, or just say hello? Send me a message and
            I'll get back to you.
          </p>

          <ul className="contact__links">
            <li>
              <a className="contact__link" href={`mailto:${CONTACT_EMAIL}`}>
                <Mail size={18} aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
            </li>
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  className="contact__link"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} aria-hidden="true" />
                  {social.label}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="muted contact-form__note">
            All fields are required. I only use your details to reply to you.
          </p>

          <div className="field">
            <label htmlFor="contact-name">
              Name <span className="field__required">(required)</span>
            </label>
            <input
              id="contact-name"
              className="input"
              type="text"
              name="name"
              autoComplete="name"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="contact-email">
              Email address <span className="field__required">(required)</span>
            </label>
            <input
              id="contact-email"
              className="input"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="contact-message">
              Message <span className="field__required">(required)</span>
            </label>
            <textarea
              id="contact-message"
              className="input"
              name="message"
              rows="5"
              required
            />
          </div>

          <label className="checkbox">
            <input type="checkbox" name="consent" required />
            <span>
              I agree that Mark Marvin Noynay may use my name, email address, and message to reply
              to me. See the <a href="#privacy-policy">Privacy Policy</a>.{' '}
              <span className="field__required">(required)</span>
            </span>
          </label>

          <div>
            <button className="button" type="submit" disabled={status === 'sending'}>
              <Send size={18} aria-hidden="true" />
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
          </div>

          <div className="form-status" role="status">
            {status === 'mailto' && (
              <p>
                <Check size={16} aria-hidden="true" /> Your email app should open with your message
                ready to send. If it doesn't, email me at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            )}
            {status === 'success' && (
              <p>
                <Check size={16} aria-hidden="true" /> Thank you, your message was sent.
              </p>
            )}
            {status === 'error' && (
              <p>
                Something went wrong and your message was not sent. Please try again, or email me at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            )}
          </div>
        </form>
      </div>
    </Section>
  )
}

export default Contact