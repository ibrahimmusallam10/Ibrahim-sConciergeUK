import React from 'react'

export default function App() {
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#">Ibrahim Musallam</a>
          <nav className="site-nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Designer & Developer</div>
              <h1>Hello — I build clean, modern websites.</h1>
              <p className="lead">This is a React + Vite port of your current static site. Styles and colors are preserved.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">Contact</a>
                <a className="btn btn-secondary" href="#about">About</a>
              </div>
            </div>

            <aside className="hero-panel">
              <img className="logo" src="/logo.png" alt="logo placeholder" />
              <div className="hero-stats">
                <div>
                  <strong>Available for work</strong>
                  <span>Open to freelance and collaborations</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container section-grid">
            <div className="about-copy">
              <h2>About</h2>
              <p>I design and build elegant, accessible interfaces. This React app contains the same layout and colors as your current files.</p>
            </div>
            <div>
              <div className="card">
                <h3>Key Skills</h3>
                <p>UI design, Frontend development, Accessibility, Performance</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container">
            <h2>Contact</h2>
            <div className="contact-list">
              <a href="mailto:you@example.com">you@example.com</a>
              <a href="tel:+123456789">+1 234 567 89</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">© {new Date().getFullYear()} Ibrahim Musallam</div>
      </footer>
    </div>
  )
}
