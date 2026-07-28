import { homeCards, projects, aboutSections, educationItems } from '../data'

function Home({ onNavigate }) {
  const previewProjects = projects.slice(0, 3)
  const previewSkills = aboutSections.flatMap((section) => section.items).slice(0, 8)
  const previewEducation = educationItems.slice(0, 2)

  return (
    <div className="space-y-8 py-2 sm:py-4">
      <section className="rounded-[24px] border border-border/70 bg-bg3/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)] sm:p-8">
        <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.2em] text-accent">
          <span className="block h-px w-12 bg-accent" />
          Coimbatore, India
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5">
            <h1 className="font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-5xl md:text-6xl">
              Eeshwar E
              <span className="mt-3 block text-2xl font-medium text-text2 sm:text-3xl">
                ML & Full-Stack Engineer
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-text2 sm:text-lg">
              Full-stack engineer specialising in AI/ML and web applications, building LLM-powered platforms, ML pipelines, and scalable backends using React, FastAPI, and Python with strong foundations in DSA, system design, and embedded AI.
            </p>
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

          <div className="rounded-[20px] border border-border/70 bg-bg/70 p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-text3">Current focus</div>
            <ul className="mt-4 space-y-3 text-sm text-text2">
              <li className="rounded-2xl border border-border/70 bg-bg3/70 px-3 py-2">LLM-powered platforms and semantic search</li>
              <li className="rounded-2xl border border-border/70 bg-bg3/70 px-3 py-2">Scalable Python and FastAPI backends</li>
              <li className="rounded-2xl border border-border/70 bg-bg3/70 px-3 py-2">Applied ML and embedded AI systems</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-3">
        {homeCards.map((card) => (
          <button
            key={card.id}
            onClick={() => onNavigate(card.id)}
            className="glass-card text-left p-5"
          >
            <div className="text-2xl">{card.icon}</div>
            <div className="mt-5 space-y-2">
              <div className="font-display text-base font-bold text-text">{card.title}</div>
              <div className="text-sm font-mono text-text3">{card.subtitle}</div>
              <div className="text-sm font-mono text-accent">{card.action}</div>
            </div>
          </button>
        ))}
      </div>

      <section className="rounded-[24px] border border-border/70 bg-bg3/70 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-text3">Featured work</div>
            <h2 className="mt-2 text-2xl font-display font-extrabold">Recent projects</h2>
          </div>
          <button onClick={() => onNavigate('projects')} className="rounded-full border border-border2 bg-bg/70 px-4 py-2 text-sm font-mono text-text2 transition hover:border-accent hover:text-accent">
            See all projects
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {previewProjects.map((project) => (
            <div key={project.name} className="rounded-[20px] border border-border/70 bg-bg/70 p-5 text-sm text-text2">
              <div className="mb-3 font-display text-base font-bold text-text">{project.name}</div>
              <div className="mb-3 rounded-2xl border border-border2 bg-bg3/70 p-3 text-xs font-mono text-accent">{project.path}</div>
              <p className="leading-6">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="glass-card p-5">
          <div className="text-xs uppercase tracking-[0.2em] text-text3">Skills snapshot</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {previewSkills.map((skill) => (
              <span key={skill} className="rounded-full border border-border2 bg-bg3/70 px-3 py-2 text-xs font-mono text-text2">
                {skill}
              </span>
            ))}
          </div>
          <button onClick={() => onNavigate('about')} className="mt-5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg transition hover:bg-accent2">
            More skills
          </button>
        </div>

        <div className="glass-card p-5 xl:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-text3">Education preview</div>
          <div className="mt-4 space-y-4">
            {previewEducation.map((item) => (
              <div key={item.degree} className="rounded-[18px] border border-border2 bg-bg3/70 p-5">
                <div className="font-display text-base font-bold text-text">{item.degree}</div>
                <div className="mt-2 text-sm font-mono text-accent">{item.institution}</div>
                <div className="text-xs font-mono uppercase tracking-[0.08em] text-text3">{item.period}</div>
              </div>
            ))}
          </div>
          <button onClick={() => onNavigate('education')} className="mt-5 rounded-full border border-border2 bg-bg/70 px-4 py-2 text-sm font-mono text-text2 transition hover:border-accent hover:text-accent">
            Full education
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
