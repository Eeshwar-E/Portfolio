import { aboutSections, contactItems } from '../data'

function About() {
  return (
    <div className="space-y-6 py-2 sm:py-4">
      <div className="rounded-[24px] border border-border/70 bg-bg3/70 p-6 sm:p-8">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-accent">
          <span className="block h-px w-12 bg-accent" />
          Coimbatore, India
        </div>
        <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
          Hi, I'm Eeshwar E.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-text2 sm:text-lg">
          A full-stack engineer specialising in AI/ML and web applications, with experience building LLM-powered platforms, ML pipelines, and scalable backends using React, FastAPI, and Python. I enjoy turning complex ideas into reliable products with strong foundations in DSA, system design, and embedded AI.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[24px] border border-border/70 bg-bg3/70 p-5 sm:p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-text3">Profile overview</div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {['LLM-powered platforms', 'Scalable backends', 'Embedded AI', 'Research-oriented engineering'].map((item) => (
              <div key={item} className="rounded-[16px] border border-border/70 bg-bg/70 px-4 py-3 text-sm text-text2">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-border/70 bg-bg3/70 p-5 sm:p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-text3">Contact</div>
          <div className="mt-4 space-y-3">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-[16px] border border-border/70 bg-bg/70 px-3 py-3">
                <span className="text-lg">{item.icon}</span>
                <div className="min-w-0 text-sm text-text2">
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {aboutSections.map((section) => (
          <div key={section.label} className="glass-card p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-text3">{section.label}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {section.items.map((item) => (
                <span key={item} className={`rounded-full border px-3 py-2 text-xs font-mono ${
                  section.style === 'green' ? 'tag-green' :
                  section.style === 'blue' ? 'tag-blue' :
                  section.style === 'purple' ? 'tag-purple' :
                  section.style === 'teal' ? 'tag-teal' :
                  'tag-amber'
                }`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
