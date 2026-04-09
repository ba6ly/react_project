import { StretchHorizontal } from "lucide-react"

const education = [
  {
    year: '2025– Present',
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Dhemaji Engineering College',
    location: 'Dhemaji, Assam',
  },
  {
    year: '2022 – 2025',
    degree: 'Diploma in Computer Engineering',
    school: 'Assam Engineering Institute',
    location: 'Guwahati, Assam',
  },
  {
    year: '2020 – 2022',
    degree: 'Science Stream (PCMB)',
    school: 'Cotton University',
    location: 'Guwahati, Assam',
  },
  {
    year: '2009 – 2020',
    degree: 'Schooling',
    school: 'Holy Child School',
    location: 'Guwahati, Assam',
  },
]

function Education() {
  return (
    <div className="page education-page">
      <div className="page-header">
        <h2 className="page-title">Education</h2>
        <p className="page-subtitle">My academic journey in chronological order.</p>
      </div>
         <StretchHorizontal size={30} className="icon" />
      <div className="timeline">
        {education.map((item, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-marker">
              <div className="timeline-dot" />
              {i < education.length - 1 && <div className="timeline-line" />}
            </div>
            <div className="timeline-card">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-degree">{item.degree}</h3>
              <p className="timeline-school">{item.school} · {item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
