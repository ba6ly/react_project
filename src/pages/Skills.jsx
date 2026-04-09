import { useState, useEffect } from 'react'

const skills = [
  { name: 'React', level: 95, cat: 'Frontend' },
  { name: 'TypeScript', level: 88, cat: 'Frontend' },
  { name: 'CSS / Tailwind', level: 92, cat: 'Frontend' },
  { name: 'Node.js', level: 85, cat: 'Backend' },
  { name: 'PostgreSQL', level: 80, cat: 'Backend' },
  { name: 'GraphQL', level: 75, cat: 'Backend' },
  { name: 'Docker', level: 70, cat: 'DevOps' },
  { name: 'AWS', level: 68, cat: 'DevOps' },
  { name: 'Figma', level: 82, cat: 'Design' },
]
const catColors = {
  Frontend: '#e35813',
  Backend: '#243dd9ee',
  DevOps: '#651ea4',
  Design: '#dfd4a0',
}


function Skills() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => { setUsers(data); setLoading(false) })
      .catch(() => { setError('Failed to load users.'); setLoading(false) })
  }, [])
  return (
    <div className="page skills-page">
      <div className="page-header">
        <h2 className="page-title">Skills</h2>
        <p className="page-subtitle">Technologies I work with regularly.</p>
      </div>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.name} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-cat" style={{ color: catColors[skill.cat] }}>{skill.cat}</span>
            </div>
            <div className="skill-bar-track">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%`, background: catColors[skill.cat] }}
              />
            </div>
            <span className="skill-pct">{skill.level}%</span>
          </div>
        ))}
      </div>
      <div className="section-divider">
        <h3 className="section-heading">User Directory</h3>
        <p className="section-subheading">Data fetched from JSONPlaceholder API</p>
      </div>
      {loading && <div className="loading-msg">Loading users…</div>}
      {error && <div className="error-msg">{error}</div>}
      {!loading && !error && (
        <div className="users-grid">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <div className="user-avatar">{user.name.charAt(0)}</div>
              <div className="user-info">
                <p className="user-name">{user.name}</p>
                <p className="user-email">{user.email}</p>
                <p className="user-company">{user.company.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Skills
