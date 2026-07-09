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
    href: 'https://www.linkedin.com/in/ibrahim-musallam-44045a381',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    )
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/447368822209',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.95L.05 24l6.27-1.64a11.93 11.93 0 0 0 5.76 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.18-3.5-8.42Zm-8.43 18.33h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.9 9.9 0 0 1-1.52-5.26c0-5.46 4.44-9.91 9.9-9.91a9.83 9.83 0 0 1 7.01 2.9 9.84 9.84 0 0 1 2.9 7.01c0 5.46-4.45 9.88-9.92 9.88Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
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
