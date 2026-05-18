import { homeCards, projects, aboutSections, educationItems } from '../data'

function Home({ onNavigate }) {
  const previewProjects = projects.slice(0, 3)
  const previewSkills = aboutSections.flatMap((section) => section.items).slice(0, 8)
  const previewEducation = educationItems.slice(0, 2)

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.14em] text-accent">
            <span className="block h-px w-16 bg-accent" />
            Open to internships & collaborations
          </div>
          <div className="space-y-5">
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-[-0.03em] sm:text-5xl md:text-6xl">
              Eeshwar E
              <br />
              <em className="text-text2 not-italic font-normal text-2xl sm:text-3xl">ML & Full-Stack Engineer</em>
            </h1>
            <p className="max-w-3xl text-base leading-8 text-text2 sm:text-lg">
              Computer Engineering undergrad at Amrita Vishwa Vidyapeetham building end-to-end ML pipelines, signal processing systems, and scalable web applications. Specialising in Python, React, and embedded AI.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => onNavigate('projects')} className="btn-primary">
              View projects
            </button>
            <a href="https://github.com/Eeshwar-E" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-mono text-text2 transition hover:text-text">
              github ↗
            </a>
            <a href="https://linkedin.com/in/eeshwar-e" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-mono text-text2 transition hover:text-text">
              linkedin ↗
            </a>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {homeCards.map((card) => (
            <button
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className="card-base text-left">
              <div className="text-2xl">{card.icon}</div>
              <div className="mt-5 space-y-2">
                <div className="font-display text-base font-bold">{card.title}</div>
                <div className="text-sm text-text3 font-mono">{card.subtitle}</div>
                <div className="text-sm text-text3 font-mono">{card.action}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.15em] text-text3">Featured work</div>
              <h2 className="mt-3 text-2xl font-display font-extrabold">Recent projects</h2>
            </div>
            <button onClick={() => onNavigate('projects')} className="rounded-md border border-border2 bg-bg3 px-4 py-2 text-sm font-mono text-text2 transition hover:border-accent hover:text-accent">
              See all projects
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {previewProjects.map((project) => (
              <div key={project.name} className="rounded-3xl border border-border bg-bg p-5 text-sm text-text2">
                <div className="mb-3 font-display text-base font-bold text-text">{project.name}</div>
                <div className="mb-3 rounded-2xl bg-bg3 p-3 text-xs text-accent">{project.path}</div>
                <p className="leading-6">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          <div className="card-base">
            <div className="text-xs uppercase tracking-[0.1em] text-text3">Skills snapshot</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {previewSkills.map((skill) => (
                <span key={skill} className="rounded-md border border-border2 bg-bg3 px-3 py-2 text-xs font-mono text-text2">
                  {skill}
                </span>
              ))}
            </div>
            <button onClick={() => onNavigate('about')} className="mt-5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg transition hover:bg-accent2">
              More skills
            </button>
          </div>

          <div className="card-base xl:col-span-2">
            <div className="text-xs uppercase tracking-[0.1em] text-text3">Education preview</div>
            <div className="mt-4 space-y-4">
              {previewEducation.map((item) => (
                <div key={item.degree} className="rounded-3xl border border-border2 bg-bg3 p-5">
                  <div className="font-display text-base font-bold text-text">{item.degree}</div>
                  <div className="mt-2 text-sm text-accent font-mono">{item.institution}</div>
                  <div className="text-xs text-text3 font-mono uppercase tracking-[0.04em]">{item.period}</div>
                </div>
              ))}
            </div>
            <button onClick={() => onNavigate('education')} className="mt-5 rounded-md border border-border2 bg-bg px-4 py-2 text-sm font-mono text-text2 transition hover:border-accent hover:text-accent">
              Full education
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
