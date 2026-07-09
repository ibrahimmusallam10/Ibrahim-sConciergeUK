const skills = [
  'Business Development',
  'Leadership',
  'Communication',
  'Mentoring',
  'Client Relationship Management',
  'Business Ownership',
  'Fundraising',
  'Problem Solving'
]

const stats = [
  { value: '500+', label: 'LinkedIn connections' },
  { value: '758', label: 'followers' },
  { value: '£2,000+', label: 'raised for charity' },
  { value: '12', label: 'experience entries' }
]

const experiences = [
  {
    role: 'Founder',
    company: "Ibrahim'sConciergeUK Ltd",
    date: 'Nov 2023 - Present',
    meta: 'London Area, United Kingdom',
    badge: 'IC',
    tone: 'navy',
    description:
      "Leading a bespoke luxury shopping and concierge service specialising in sourcing premium designer fashion, rare luxury goods, and exclusive lifestyle items. The role combines client relationship management, business development, client acquisition, and overseeing the full client service journey from request through to delivery.",
    skills: ['Business Ownership', 'Business Analysis', 'Client Service']
  },
  {
    role: 'Apprentice / Mentee',
    company: 'Macquarie Group',
    date: 'Nov 2025 - Present',
    meta: 'Weekly mentorship and career development',
    badge: 'MQ',
    tone: 'mono',
    description:
      'Selected as a mentee to develop financial insight, strategic thinking, and professional decision making through weekly mentorship. The experience has strengthened a proactive, solutions focused mindset and a stronger understanding of professional environments.',
    skills: ['Mentee', 'Reflective Listening', 'Decision Making']
  },
  {
    role: 'Company Secretary & Human Resources',
    company: 'Young Enterprise',
    date: 'Oct 2025 - Present',
    meta: 'Student company programme',
    badge: 'YE',
    tone: 'teal',
    description:
      'Supporting the organisation and administration of a student run company by coordinating meetings, recording minutes, maintaining clear communication, and contributing to planning, product development, and sales.',
    skills: ['Oversight', 'Administration', 'Teamwork']
  },
  {
    role: 'Student Mentor',
    company: "St Aloysius' College",
    date: 'Dec 2025 - May 2026',
    meta: 'Academic mentoring',
    badge: 'SA',
    tone: 'gold',
    description:
      'Provided mentorship to Year 7 students by supporting academic development, helping them understand key concepts, and encouraging positive learning habits in a supportive environment.',
    skills: ['Mentoring', 'Patience', 'Leadership']
  },
  {
    role: 'Independent Fundraising Volunteer',
    company: 'Human Appeal',
    date: 'Mar 2025 - Jun 2025',
    meta: 'Independent fundraising initiative',
    badge: 'HA',
    tone: 'purple',
    description:
      'Raised over £2,000 within four months through independent fundraising initiatives, supporting aid, meals, shelter, and necessities while balancing academic responsibilities.',
    skills: ['Fundraising', 'Organisation', 'Initiative']
  },
  {
    role: 'Retail Sales Assistant',
    company: 'Kick Game',
    date: 'Jun 2024',
    meta: 'Covent Garden, London - On-site',
    badge: 'KG',
    tone: 'black',
    description:
      'Built practical retail experience in a fast paced environment, developing customer service, communication, teamwork, and an understanding of customer behaviour.',
    skills: ['Customer Service', 'Retail Sales', 'Communication']
  }
]

const memberships = [
  'NetworkING UK',
  'Future Leaders UK',
  'Young Professionals',
  'Ellavate',
  'East London Business Alliance',
  'OuterCircle'
]

export default function App() {
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Ibrahim Musallam home">
            Ibrahim Musallam
          </a>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-cover" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Founder | Student | Future Entrepreneur</p>
              <h1>Business-minded sixth form student building a luxury concierge brand.</h1>
              <p className="lead">
                I am a Year 12 student at St Aloysius RC College studying a Level 3 National Extended Diploma in
                Business, with practical experience across entrepreneurship, retail, mentoring, fundraising, and
                professional development.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#experience">View Experience</a>
                <a className="btn btn-secondary" href="#contact">Get In Touch</a>
              </div>
            </div>

            <aside className="profile-card" aria-label="Profile summary">
              <div className="avatar-mark">
                <span>IM</span>
              </div>
              <h2>Ibrahim Musallam</h2>
              <p className="profile-title">
                Founder of Ibrahim'sConciergeUK | Open to work experience | Business leader in progress
              </p>
              <p className="profile-location">London Area, United Kingdom</p>
              <div className="profile-tags">
                <span>NetworkING UK</span>
                <span>500+ connections</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="stats-band" aria-label="Profile highlights">
          <div className="container stats-grid">
            {stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <div className="container section-grid">
            <div>
              <p className="eyebrow">About</p>
              <h2>Entrepreneurship, service, and practical business experience.</h2>
            </div>
            <div className="rich-copy">
              <p>
                I have a strong interest in entrepreneurship, sales, and business development. Over the past couple
                years, I built and scaled a venture from an initial £250 investment into a five figure operation,
                developing skills in sales, customer behaviour, pricing strategy, profit margins, calculated risk
                taking, and reinvesting for growth.
              </p>
              <p>
                Alongside my studies and business interests, I mentor younger students, have raised over £2,000 for
                charity within four months, and actively build transferable skills in leadership, organisation,
                responsibility, and risk aware decision making.
              </p>
              <p>
                I am committed to expanding my experience in business and entrepreneurship while building meaningful
                relationships with ambitious individuals and learning from those already making an impact.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Top Skills</p>
              <h2>Commercial instincts with people-first execution.</h2>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span className="skill-pill" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container activity-card">
            <div>
              <p className="eyebrow">Activity</p>
              <h2>Sharing the journey while building momentum.</h2>
              <p>
                Recent reflection: a five minute delay can ruin your day or save your life. I use short posts to
                document consistency, mindset, and what I am learning while growing my network.
              </p>
            </div>
            <div className="post-preview">
              <span>Day 78/90</span>
              <strong>A five minute delay can ruin your day or save your life.</strong>
              <small>10 impressions</small>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Experience</p>
              <h2>Business, mentoring, charity, and professional growth.</h2>
            </div>
            <div className="timeline">
              {experiences.map((item) => (
                <article className="experience-card" key={`${item.role}-${item.company}`}>
                  <div className={`company-badge ${item.tone}`}>{item.badge}</div>
                  <div className="experience-content">
                    <div className="experience-topline">
                      <div>
                        <h3>{item.role}</h3>
                        <p>{item.company}</p>
                      </div>
                      <span>{item.date}</span>
                    </div>
                    <p className="experience-meta">{item.meta}</p>
                    <p>{item.description}</p>
                    <div className="mini-tags">
                      {item.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container memberships">
            <div>
              <p className="eyebrow">Networks</p>
              <h2>Communities and memberships</h2>
            </div>
            <div className="membership-grid">
              {memberships.map((membership) => (
                <span key={membership}>{membership}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-card">
            <p className="eyebrow">Contact</p>
            <h2>Open to work experience, mentorship, and business conversations.</h2>
            <p>
              If you are interested in entrepreneurship, luxury retail, business development, or professional
              mentoring, I would be glad to connect.
            </p>
            <div className="contact-list">
              <a href="mailto:you@example.com">you@example.com</a>
              <a href="tel:+123456789">+1 234 567 89</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">© {new Date().getFullYear()} Ibrahim Musallam. Built for growth.</div>
      </footer>
    </div>
  )
}
