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

const initiatives = [
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

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.28 8.25h4.45V24H.28V8.25ZM8.25 8.25h4.27v2.15h.06c.6-1.13 2.05-2.32 4.22-2.32 4.51 0 5.35 2.97 5.35 6.83V24H17.7v-7.99c0-1.91-.03-4.36-2.66-4.36-2.66 0-3.07 2.08-3.07 4.22V24H7.52V8.25h.73Z" />
      </svg>
    )
  },
  {
    label: 'Email',
    href: 'mailto:ibrahimmusallam10@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 5.75A2.75 2.75 0 0 1 4.75 3h14.5A2.75 2.75 0 0 1 22 5.75v12.5A2.75 2.75 0 0 1 19.25 21H4.75A2.75 2.75 0 0 1 2 18.25V5.75Zm2.75-1.25c-.32 0-.61.12-.83.32L12 12.08l8.08-7.26a1.24 1.24 0 0 0-.83-.32H4.75Zm15.75 2.08-5.9 5.31 5.9 5.2V6.58Zm-.94 12.55-6.08-5.36-.65.58a1.25 1.25 0 0 1-1.66 0l-.65-.58-6.08 5.36c.1.02.2.03.31.03h14.5c.11 0 .21-.01.31-.03ZM3.5 17.09l5.9-5.2-5.9-5.31v10.51Z" />
      </svg>
    )
  }
]

export default function App() {
  return (
    <main className="site-shell">
      <aside className="intro" aria-label="Profile introduction">
        <div>
          <h1>Ibrahim Musallam</h1>
          <h2 className="intro-title">Future Business Leader / Entrepreneur</h2>
          <p className="intro-role">
            I build practical business experience through entrepreneurship, luxury retail, mentoring, and fundraising.
          </p>

          <nav className="side-nav" aria-label="Page sections">
            <a href="#about"><span />About</a>
            <a href="#experience"><span />Experience</a>
            <a href="#initiatives"><span />Initiatives</a>
          </nav>
        </div>

        <div className="intro-footer">
          {links.map((link) => (
            <a href={link.href} key={link.label} aria-label={link.label} title={link.label}>
              {link.icon}
            </a>
          ))}
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
              Over the past couple of years, I built a venture from an initial £250 investment into a five-figure
              operation, learning customer behaviour, pricing strategy, profit margins, calculated risk taking, and
              reinvesting for growth.
            </p>
            <p>
              Alongside my studies and business interests, I mentor younger students, have raised over £2,000 for
              charity, and continue to build relationships with ambitious people across business, retail, finance, and
              entrepreneurship.
            </p>
          </div>
        </section>

        <section id="experience" className="section-block">
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

        <section id="initiatives" className="section-block">
          <div className="item-list">
            {initiatives.map((item) => (
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
      </section>
    </main>
  )
}
