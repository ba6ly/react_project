import { FiMail, FiInstagram, FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi'

const contacts = [
  {
    icon: <FiMail size={22} />,
    label: 'Email',
    value: 'bablee@example.com',
    href: 'mailto:bablee@example.com',
    color: '#ff6b35',
  },
  {
    icon: <FiInstagram size={22} />,
    label: 'Instagram',
    value: '@bablee.dev',
    href: 'https://instagram.com',
    color: '#e1306c',
  },
  {
    icon: <FiFacebook size={22} />,
    label: 'Facebook',
    value: 'Bablee Developer',
    href: 'https://facebook.com',
    color: '#1877f2',
  },
  {
    icon: <FiGithub size={22} />,
    label: 'GitHub',
    value: 'github.com/bablee',
    href: 'https://github.com',
    color: '#333',
  },
  {
    icon: <FiLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/bablee',
    href: 'https://linkedin.com',
    color: '#0077b5',
  },
]

function Contact() {
  return (
    <div className="page contact-page">
      <div className="page-header">
        <h2 className="page-title">Get In Touch</h2>
        <p className="page-subtitle">I'm always open to new opportunities and conversations.</p>
      </div>

      <div className="contact-grid">
        {contacts.map(({ icon, label, value, href, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            style={{ '--card-accent': color }}
          >
            <div className="contact-icon">{icon}</div>
            <div className="contact-info">
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
            </div>
            <div className="contact-arrow">→</div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Contact
