import { ArrowLeft } from 'lucide-react'
import Container from './Container.jsx'

const EMAIL = 'cyber.markmarvin@gmail.com'
const LAST_UPDATED = '19 November 2026'

const rights = [
  'To be informed about how your information is used.',
  'To access the information I hold about you.',
  'To object to how your information is used.',
  'To correct information that is wrong or out of date.',
  'To ask me to delete or block your information.',
  'To receive a copy of your information in a common format.',
  'To claim compensation if you were harmed by misuse of your information.',
]

function PrivacyPolicy() {
  return (
    <section className="privacy section" aria-labelledby="privacy-heading">
      <Container>
        <div className="privacy__content">
          <a className="privacy__back" href="#home">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to portfolio
          </a>

          <h1 id="privacy-heading" tabIndex={-1}>
            Privacy Policy
          </h1>
          <p className="muted">Last updated: {LAST_UPDATED}</p>

          <p>
            This policy explains what personal information this website collects, why, and what
            rights you have under the Data Privacy Act of 2012 (Republic Act No. 10173) of the
            Philippines.
          </p>

          <h2>Who is responsible</h2>
          <p>
            This website is a personal portfolio run by Mark Marvin Noynay in Cebu City,
            Philippines. For anything about your information, email{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>

          <h2>What information is collected</h2>
          <p>
            The only way this website collects information is the contact form. It asks for three
            things, which are the minimum needed to reply to you:
          </p>
          <ul>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your message</li>
          </ul>

          <h2>How the contact form works</h2>
          <p>
            When you press Send message, your own email app opens with your message addressed to
            me. This website does not store your details or send them to a server. I only receive
            your message when you send it from your email app.
          </p>
          <p>
            You must tick the consent box before sending. The box is unchecked when the page loads.
          </p>

          <h2>Why I use it</h2>
          <p>
            I use your name, email address, and message only to read and reply to your message. I
            do not use them for marketing, and I do not add you to any mailing list.
          </p>

          <h2>Legal basis</h2>
          <p>
            I handle this information because you gave your consent by ticking the box. You can
            withdraw your consent at any time (see Your rights).
          </p>

          <h2>How long I keep it</h2>
          <p>
            I keep your message and my reply only as long as needed to respond and follow up. I
            delete them within 12 months after our last exchange, unless the law requires me to
            keep them longer.
          </p>

          <h2>Who I share it with</h2>
          <p>
            I do not sell, rent, or share your information. Your message passes through your email
            provider and mine (Gmail) as part of normal email delivery. I would only disclose
            information if the law requires it.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            This website does not use cookies, analytics, advertising trackers, or embedded
            third-party content. The fonts are served from this website. Because nothing is
            tracked, there is no cookie banner.
          </p>
                    <p>
            If you switch between light and dark mode, your choice is saved in your own browser
            (local storage) so the site remembers it next time. It stays on your device and is not
            used to identify you.
          </p>
          <p>
            The service that hosts this website may keep standard technical logs, such as IP
            addresses, to deliver and protect the site. I do not use that information.
          </p>

          <h2>Security</h2>
          <p>
            I take reasonable steps to protect the messages I receive. No method of sending
            information over the internet is completely secure.
          </p>

          <h2>Your rights</h2>
          <p>Under the Data Privacy Act, you have these rights:</p>
          <ul>
            {rights.map((right) => (
              <li key={right}>{right}</li>
            ))}
          </ul>
          <p>
            You may also withdraw your consent at any time. To use any of these rights, email me at{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and I will respond as soon as I can.
          </p>
          <p>
            If you believe your information was handled improperly, you can file a complaint with
            the{' '}
            <a href="https://privacy.gov.ph" target="_blank" rel="noopener noreferrer">
              National Privacy Commission
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            .
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If I change how this website handles information, I will update this page and the date
            at the top.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default PrivacyPolicy