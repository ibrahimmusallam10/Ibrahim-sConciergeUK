const experiences = [
  {
    date: '2023 — Present',
    title: "Founder · Ibrahim'sConciergeUK",
    description:
      'Lead a bespoke luxury shopping and concierge service focused on sourcing premium designer fashion, rare luxury goods, and exclusive lifestyle items. Responsible for client relationships, business development, pricing, sourcing, and the full service journey from request to delivery.',
    tags: ['Business Ownership', 'Client Service', 'Luxury Retail', 'Sales']
  },
  {
    date: '2025 — Present',
    title: 'Company Secretary & Human Resources · Young Enterprise',
    description:
      'Support the organisation and administration of a student-run company by coordinating meetings, recording minutes, maintaining clear communication, and contributing to planning, product development, and sales.',
    tags: ['Administration', 'Teamwork', 'Operations', 'Leadership']
  },
  {
    date: '2025 — Present',
    title: 'Mentee · Macquarie Group',
    description:
      'Selected for mentorship focused on financial insight, professional environments, strategic thinking, and applying learning from weekly sessions to real-world scenarios.',
    tags: ['Mentoring', 'Finance', 'Decision Making', 'Problem Solving']
  },
  {
    date: '2025 — 2026',
    title: "Student Mentor · St Aloysius' College",
    description:
      'Provided academic mentoring to younger students, helping them understand key concepts, build confidence, and develop positive learning habits.',
    tags: ['Mentoring', 'Communication', 'Patience', 'Leadership']
  },
  {
    date: '2025',
    title: 'Independent Fundraising Volunteer · Human Appeal',
    description:
      'Raised over £2,000 within four months through independent fundraising initiatives while balancing academic responsibilities.',
    tags: ['Fundraising', 'Organisation', 'Initiative']
  },
  {
    date: '2024',
    title: 'Retail Sales Assistant · Kick Game',
    description:
      'Gained retail experience in a fast-paced Covent Garden environment, strengthening customer service, sales, teamwork, and communication skills.',
    tags: ['Retail Sales', 'Customer Service', 'Communication']
  }
]

const highlights = [
  {
    title: "Ibrahim'sConciergeUK",
    description:
      'Built and scaled a venture from an initial £250 investment into a five-figure operation, learning sales, pricing strategy, customer behaviour, margins, and reinvesting for growth.',
    tags: ['Founder', 'Concierge', 'Business Development']
  },
  {
    title: 'Professional Network',
    description:
      'Active member across communities including NetworkING UK, Future Leaders UK, Young Professionals, Ellavate, East London Business Alliance, and OuterCircle.',
    tags: ['Networking', 'Relationship Building', 'Growth']
  },
  {
    title: 'Public Learning',
    description:
      'Documenting consistency, mindset, and business lessons while growing an audience of 758 followers and 500+ LinkedIn connections.',
    tags: ['Activity', 'Reflection', 'Personal Brand']
  }
]

const skills = [
  'Business Development',
  'Leadership',
  'Communication',
  'Mentoring',
  'Client Relationship Management',
  'Business Ownership',
  'Fundraising',
  'Customer Service'
]

export default function App() {
  return (
    <main className="site-shell">
      <aside className="intro" aria-label="Profile introduction">
        <div>
          <h1>Ibrahim Musallam</h1>
          <h2 className="intro-title">Business Student / Entrepreneur</h2>
          <p className="intro-role">
            Founder of Ibrahim'sConciergeUK, Year 12 Business student, mentor, fundraiser, and future business leader.
          </p>

          <nav className="side-nav" aria-label="Page sections">
            <a href="#about"><span />About</a>
            <a href="#experience"><span />Experience</a>
            <a href="#highlights"><span />Highlights</a>
            <a href="#contact"><span />Contact</a>
          </nav>
        </div>

        <div className="intro-footer">
          <a href="https://www.linkedin.com" aria-label="LinkedIn">LinkedIn</a>
          <a href="mailto:you@example.com">Email</a>
        </div>
      </aside>

      <section className="content">
        <section id="about" className="section-block">
          <div className="copy">
            <p>
              I am a Year 12 sixth form student at St Aloysius RC College studying a Level 3 National Extended Diploma
              in Business, with a strong interest in entrepreneurship, sales, and business development.
            </p>
            <p>
              Over the past couple of years, I built and scaled a venture from an initial £250 investment into a
              five-figure operation. Through this, I developed practical skills in customer behaviour, pricing strategy,
              profit margins, calculated risk taking, and reinvesting for growth.
            </p>
            <p>
              Alongside my studies and business interests, I mentor younger students, have raised over £2,000 for
              charity, and continue to build relationships with ambitious people across business, retail, finance, and
              entrepreneurship.
            </p>
          </div>
        </section>

        <section id="experience" className="section-block">
          <h2>Experience</h2>
          <div className="item-list">
            {experiences.map((item) => (
              <article className="resume-item" key={item.title}>
                <p className="date">{item.date}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tag-list">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="highlights" className="section-block">
          <h2>Ventures & Highlights</h2>
          <div className="item-list">
            {highlights.map((item) => (
              <article className="feature-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <h2>Top Skills</h2>
          <div className="tag-list skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="section-block contact-block">
          <h2>Contact</h2>
          <p>
            I am open to work experience, mentorship, business conversations, and opportunities connected to
            entrepreneurship, luxury retail, finance, and business development.
          </p>
          <a className="text-link" href="mailto:you@example.com">you@example.com</a>
        </section>
      </section>
    </main>
  )
}
