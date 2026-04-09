import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/education', label: 'Education' },
  { to: '/skills', label: 'Skills' },
  { to: '/weather', label: 'Weather' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-dot">⁕</span> Bablee
      </div>
      <ul className="nav-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end={to === '/'}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
