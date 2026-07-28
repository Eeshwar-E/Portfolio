import { projects } from '../data'

function Projects() {
  return (
    <div className="space-y-6 py-2 sm:py-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[24px] border border-border/70 bg-bg3/70 p-5">
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-border2 bg-bg/70 p-2 text-xl">📁</span>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-text3">Selected work</div>
            <h2 className="text-2xl font-display font-extrabold">Projects</h2>
          </div>
        </div>
        <div className="rounded-full border border-border2 bg-bg/70 px-3 py-2 text-sm font-mono text-text2">
          {projects.length} projects
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="glass-card flex flex-col gap-5 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-text3">{project.year}</div>
                <div className="mt-2 font-display text-xl font-bold text-text">{project.name}</div>
              </div>
              <span className="rounded-full border border-border2 bg-bg3/70 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-accent">
                featured
              </span>
            </div>

            <p className="text-sm leading-7 text-text2">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`rounded-full border px-2.5 py-1 text-xs font-mono ${
                    tag.style === 'green' ? 'tag-green' :
                    tag.style === 'blue' ? 'tag-blue' :
                    tag.style === 'amber' ? 'tag-amber' :
                    tag.style === 'purple' ? 'tag-purple' :
                    tag.style === 'teal' ? 'tag-teal' :
                    'tag-coral'
                  }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-max rounded-full border border-border2 px-4 py-2 text-sm font-mono text-text3 transition hover:border-accent hover:text-accent"
              >
                Go to project ↗
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
