import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="page home-page">
      <div className="home-hero">
        {/* <div className="home-tag">Available for work</div> */}
        <h1 className="home-title">
          Hi, I'm <span className="accent">Bably Rangpi</span>
        </h1>
        <p className="home-subtitle">Full-Stack Developer & UI Enthusiast</p>
        <p className="home-bio">
          I craft thoughtful digital experiences with clean code and intentional design.
          Based in Assam, India. I've built web applications that ease the lives of users. I love turning 
          complex problems into simple, elegant solutions.
        </p>
        <p className="home-bio">
          When I'm not writing code, you'll find me dancing, editing videos, 
          experimenting with new technologies, or contributing to open-source projects. 
          I believe great software is built with empathy, curiosity, and coffee.
        </p>
      </div>

      <div className="counter-card">
        <p className="counter-label">Coffees consumed today</p>
        <div className="counter-display">{count}</div>
        <div className="counter-actions">
          <button className="btn-counter dec" onClick={() => setCount(c => Math.max(0, c - 1))}>−</button>
          <button className="btn-counter inc" onClick={() => setCount(c => c + 1)}>+</button>
        </div>
        <button className="btn-reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default Home
