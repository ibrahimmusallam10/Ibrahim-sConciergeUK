import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'

const resumeUrl = new URL('../resume/Ibrahim_Musallam_Resume.pdf', import.meta.url).href

const experiences = [
  {
    date: '2023 — Present',
    role: 'Founder',
    organisation: "Ibrahim’s Concierge UK",
    icon: 'briefcase',
    featured: true,
    description:
      'Built a luxury sourcing and concierge business from a £250 investment into a five-figure operation. Manage the full client journey, including sourcing, pricing, negotiation, sales, payments and delivery, while developing long-term relationships with repeat customers.',
    tags: ['£250 → Five Figures', 'Client Relations', 'Sales', 'Business Growth']
  },
  {
    date: 'July 2026',
    role: 'Work Experience Intern',
    organisation: 'BroadLab',
    icon: 'building',
    description:
      'Gained hands-on experience across Operations, Sales, Campaign Management, Product and Engineering in a fast-paced advertising technology company. Attended daily operational meetings, completed a company case study and presented research used to organise international brand data.',
    tags: ['Cross-Functional Experience', 'CRM Systems', 'Research', 'Presentation Skills']
  },
  {
    date: '2025 — 2026',
    role: 'Company Secretary & HR Manager',
    organisation: 'Young Enterprise',
    icon: 'people',
    description:
      'Helped lead Seeds & Greetings, a sustainable student company producing plantable greeting cards. Coordinated meetings, maintained company records, supported team management and contributed to sales, product development and company operations.',
    tags: ['National Finalists', '£2,100+ Revenue', 'Leadership', 'Operations']
  },
  {
    date: '2025 — 2026',
    role: 'Student Mentor',
    organisation: 'St Aloysius’ College',
    icon: 'education',
    description:
      'Mentored a younger student through regular sessions focused on confidence, academic progress and personal development. Adapted my communication and approach to provide practical guidance and create a supportive environment.',
    tags: ['Mentoring', 'Communication', 'Patience', 'Leadership']
  },
  {
    date: '2025',
    role: 'Independent Fundraising Volunteer',
    organisation: 'Human Appeal',
    icon: 'heart',
    description:
      'Raised over £2,000 within four months through independently planned fundraising initiatives while balancing school and business commitments. Managed promotion, communication and donor engagement throughout the campaign.',
    tags: ['£2,000+ Raised', 'Initiative', 'Organisation', 'Community Impact']
  },
  {
    date: '2024',
    role: 'Retail Sales Assistant',
    organisation: 'Kick Game',
    icon: 'retail',
    description:
      'Worked in a fast-paced sneaker and streetwear retailer in Covent Garden, supporting customers throughout the buying process. Developed practical experience in customer service, product knowledge, communication and teamwork.',
    tags: ['Retail Sales', 'Customer Service', 'Product Knowledge', 'Teamwork']
  }
]

const initiatives = [
  {
    title: '90-Day LinkedIn Challenge',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/ibrahim-musallam-44045a381/recent-activity/all/',
    description:
      'Posted on LinkedIn for 90 days consistently about business, mindset, learning and personal growth.',
    metric: '90 Days',
    date: 'Apr – Jul 2026'
  },
  {
    title: 'Systems & Websites',
    icon: 'code',
    description:
      'Designed and created a handful of systems and websites to solve problems, streamline workflows and improve processes.',
    metric: 'Designer & Developer',
    date: '2024 – Present'
  },
  {
    title: 'Duke of Edinburgh (DofE) Gold',
    icon: 'mountain',
    description:
      'Completed a 3-day expedition in the mountains, demonstrating resilience, teamwork and leadership in challenging conditions.',
    metric: 'Gold Award',
    date: 'Completed 2025'
  },
  {
    title: 'Investment Challenge',
    icon: 'chart',
    description:
      'Organised a 1-week investment challenge with 20 people to grow capital and deepen their understanding of markets.',
    metric: '20 Participants',
    date: 'Jul 2026'
  },
  {
    title: 'Talk to the Nation',
    icon: 'microphone',
    description:
      'Spoke on Talk to the Nation about our Young Enterprise journey and competed against someone in a general knowledge quiz for social media.',
    metric: 'Media Appearance',
    date: '2025'
  },
  {
    title: 'Human Appeal Fundraiser',
    icon: 'heart',
    description:
      'Raised over £2,000 through independently planned fundraising initiatives while balancing school and business commitments.',
    metric: '£2,000+ Raised',
    date: 'Jan – Apr 2025'
  }
]

function ExperienceTagIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase()

  if (/client|team|mentor|communication|leadership/.test(normalized)) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="8" r="3" /><path d="M3.5 19v-2a4.5 4.5 0 0 1 9 0v2M15 5.5a3 3 0 0 1 0 5.5M16 13a4.5 4.5 0 0 1 4.5 4.5V19" />
      </svg>
    )
  }

  if (/sales|finance|fundrais|figures/.test(normalized)) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20V10M10 20V5M16 20v-7M22 20H2M3 7l6-4 6 5 6-5" />
      </svg>
    )
  }

  if (/growth|business|initiative|problem/.test(normalized)) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 5c3-2 5-2 7-2 0 2 0 4-2 7l-5 5-5-5 5-5ZM9 10l-4 1-2 3 6 1M14 15l-1 6 3-2 1-4M8 16l-3 3M11 17l-4 4" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
    </svg>
  )
}

function SectionIcon({ type }: { type: string }) {
  let drawing

  switch (type) {
    case 'briefcase':
      drawing = <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>
      break
    case 'building':
      drawing = <><rect x="5" y="3" width="12" height="18" rx="1" /><path d="M9 7h1M13 7h1M9 11h1M13 11h1M9 15h1M13 15h1M17 10h3v11h-3" /></>
      break
    case 'people':
      drawing = <><circle cx="8" cy="8" r="3" /><circle cx="17" cy="7" r="2.5" /><path d="M2 20v-2a5.5 5.5 0 0 1 11 0v2M14 12.5a4.5 4.5 0 0 1 7 3.7V20" /></>
      break
    case 'education':
      drawing = <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11.5V17c3 2.5 9 2.5 12 0v-5.5M22 9v7" /></>
      break
    case 'heart':
      drawing = <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
      break
    case 'retail':
      drawing = <><path d="M3 15c3 0 4-5 6-8 2 4 4 6 10 7 2 .4 3 2.2 2 4H6c-2 0-3-1-3-3Z" /><path d="M9 11h4M6 18v2h15v-2" /></>
      break
    case 'linkedin':
      drawing = <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M7 7v.1M11 17v-7M11 13a3 3 0 0 1 6 0v4" /></>
      break
    case 'code':
      drawing = <path d="m8 5-6 7 6 7M16 5l6 7-6 7M14 2l-4 20" />
      break
    case 'mountain':
      drawing = <><path d="m2 20 8-16 4 8 2-4 6 12H2Z" /><path d="m8 8 2 2 2-2M16 12l1.5 1.5L19 12" /></>
      break
    case 'chart':
      drawing = <><path d="M4 20v-6h3v6M10 20V9h3v11M16 20V4h3v16M2 20h20" /></>
      break
    case 'microphone':
      drawing = <><rect x="8" y="2" width="8" height="13" rx="4" /><path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8" /></>
      break
    default:
      drawing = <circle cx="12" cy="12" r="9" />
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true">{drawing}</svg>
}

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
  },
  {
    label: 'Call',
    href: 'tel:+447368822209',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.62 10.79a15.47 15.47 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
      </svg>
    )
  }
]

const sections = [
  { id: 'about', label: 'About' },
  { id: 'philosophy', label: 'My Philosophy' },
  { id: 'experience', label: 'Experience' },
  { id: 'initiatives', label: 'Initiatives' },
  { id: 'contact', label: 'Contact' }
]

export default function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id)

  useEffect(() => {
    const updateCursorGlow = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.pageX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.pageY}px`)
      document.documentElement.style.setProperty('--cursor-glow-opacity', '1')
    }

    const hideCursorGlow = () => {
      document.documentElement.style.setProperty('--cursor-glow-opacity', '0')
    }

    window.addEventListener('pointermove', updateCursorGlow, { passive: true })
    document.documentElement.addEventListener('mouseleave', hideCursorGlow)

    return () => {
      window.removeEventListener('pointermove', updateCursorGlow)
      document.documentElement.removeEventListener('mouseleave', hideCursorGlow)
    }
  }, [])

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const message = String(form.get('message') || '')
    const subject = encodeURIComponent(`Website enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)

    window.location.href = `mailto:ibrahimmusallam10@gmail.com?subject=${subject}&body=${body}`
  }

  useEffect(() => {
    const updateActiveSection = () => {
      const readingLine = window.innerHeight * 0.32
      let currentSection = sections[0].id

      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element && element.getBoundingClientRect().top <= readingLine) {
          currentSection = section.id
        }
      })

      const pageBottom = window.scrollY + window.innerHeight
      const hasReachedBottom = pageBottom >= document.documentElement.scrollHeight - 8
      if (hasReachedBottom) {
        currentSection = sections[sections.length - 1].id
      }

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <main className="site-shell">
      <aside className="intro" aria-label="Profile introduction">
        <div>
          <h1>Ibrahim Musallam</h1>
          <h2 className="intro-title">Entrepreneur &amp; Problem Solver</h2>
          <p className="intro-role">
            I turn ideas into systems, build businesses and create value through entrepreneurship, strategy and meaningful relationships.
          </p>

          <nav className="side-nav" aria-label="Page sections">
            {sections.map((section) => (
              <a
                aria-current={activeSection === section.id ? 'true' : undefined}
                className={activeSection === section.id ? 'active' : undefined}
                href={`#${section.id}`}
                key={section.id}
              >
                <span />
                {section.label}
              </a>
            ))}
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
          <h2>Who Am I</h2>
          <div className="copy">
            <p>
              Hi, I’m Ibrahim. I’m someone who loves building things, solving problems and constantly learning.
            </p>
            <p>
              Business has never been just an interest to me. It’s how I’ve learnt many of life’s biggest lessons. I
              started Ibrahim’sConciergeUK with an initial investment of just £250. Since then, I’ve grown it into a 5
              figure business, but the biggest rewards haven’t been financial. The journey has taught me resilience,
              adaptability and the importance of trust.
            </p>
            <p>
              I’m naturally curious and enjoy understanding how things work. Whether it’s analysing business models,
              improving processes, exploring new technologies, investing, networking or tackling complex problems, I
              enjoy learning and applying new ideas. That curiosity has pushed me to look beyond the classroom and
              actively seek opportunities that help me grow.
            </p>
            <p>
              Alongside running my business, I’ve gained experience across retail, operations and business through work
              experience, internships and leadership roles. I’ve worked alongside professionals in operations, sales,
              engineering and marketing, represented an award winning Young Enterprise company that reached the UK
              Finals, mentored younger students and helped raise over £2,000 for charity. Every experience has
              strengthened my belief that growth comes from taking initiative and putting yourself in environments
              where you’re constantly learning.
            </p>
            <p>
              Outside of business, I enjoy staying active by going to the gym and playing football, spending time with
              friends and family, and attending networking events. These events allow me to connect with ambitious
              people, hear different perspectives and continue learning from their experiences.
            </p>
            <p>
              Being a Muslim is a central part of who I am. My faith shapes my values, guides my decisions and reminds
              me to approach every opportunity with gratitude, purpose and sincerity.
            </p>
            <p>
              At the end of the day, I don’t want to be known only for what I’ve achieved, but also for the person I’ve
              become along the way. I want to continue learning, help others and leave every opportunity better than I
              found it.
            </p>
            <p>
              The more I learn, the more I realise how much there is still to learn. That’s what motivates me. There
              will always be another challenge to embrace, another skill to develop and another person to learn from. My
              goal is to keep growing, keep building and make a meaningful impact wherever I can.
            </p>
          </div>
        </section>

        <section id="philosophy" className="section-block">
          <h2>My Philosophy</h2>
          <div className="copy philosophy-copy">
            <p>
              I’ve come to realise that successful businesses are not where everything begins. They begin with the
              person behind them.
            </p>
            <p>That’s why I try to live by three simple principles:</p>
            <p className="philosophy-line">
              <span>Build Yourself</span>
              <span>Build Relationships</span>
              <span>Build Businesses</span>
            </p>
            <p>
              I believe investing in yourself is the foundation of everything else. Every challenge teaches you
              something, every conversation offers a new perspective and every relationship has the potential to create
              opportunities you may never find alone.
            </p>
            <p>
              To me, success isn’t just about what you build. It’s about the trust you earn, the value you create and
              the way you treat people throughout the journey. The businesses you build may open doors, but your
              character determines how long they remain open.
            </p>
          </div>
        </section>

        <section id="experience" className="section-block">
          <h2>Experience</h2>
          <div className="item-list timeline-list">
            {experiences.map((item) => (
              <article className={`resume-item${item.featured ? ' featured' : ''}`} key={`${item.role}-${item.organisation}`}>
                <p className="date">{item.date}</p>
                <div className="timeline-marker" aria-hidden="true">
                  <span className="timeline-dot" />
                </div>
                <div className="experience-icon">
                  <SectionIcon type={item.icon} />
                </div>
                <div className="experience-content">
                  <h3>
                    {item.role} <span className="title-separator">·</span>{' '}
                    <span className="organisation">{item.organisation}</span>
                  </h3>
                  <p>{item.description}</p>
                  <div className="tag-list">
                    {item.tags.map((tag) => (
                      <span key={tag}><ExperienceTagIcon label={tag} />{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a className="experience-resume-link" href={resumeUrl} target="_blank" rel="noreferrer">
            View Full CV
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </section>

        <section id="initiatives" className="section-block">
          <h2>Initiatives</h2>
          <div className="initiatives-grid">
            {initiatives.map((item) => (
              <article className="initiative-card" key={item.title}>
                <div className="initiative-icon"><SectionIcon type={item.icon} /></div>
                <h3>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
                  ) : item.title}
                </h3>
                <p>{item.description}</p>
                {item.href && (
                  <a className="initiative-action" href={item.href} target="_blank" rel="noreferrer">
                    View LinkedIn posts <span aria-hidden="true">↗</span>
                  </a>
                )}
                <div className="initiative-meta">
                  <span>{item.metric}</span>
                  <time>{item.date}</time>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-block contact-section">
          <div className="contact-intro">
            <div className="contact-heading">
              <p className="contact-kicker">Get in touch</p>
              <h2>
                Let’s Build Something
                <br />
                Meaningful.
              </h2>
            </div>
            <div className="contact-copy">
              <p>
                The best opportunities rarely begin with a contract — they begin with a conversation. If you have an
                idea, challenge or you simply want to connect, I would love to hear from you.
              </p>
              <div className="contact-details">
                <a href="mailto:ibrahimmusallam10@gmail.com">ibrahimmusallam10@gmail.com</a>
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" required />

            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required />

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows={3} required />

            <button type="submit">Let’s Talk</button>
          </form>
        </section>
      </section>
    </main>
  )
}
