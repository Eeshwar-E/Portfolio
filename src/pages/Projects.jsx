import { projects } from '../data'

function Projects() {
  return (
    <div className="py-8 sm:py-12">
      <div className="mb-8 flex items-center gap-3">
        <span className="text-2xl text-accent">📁</span>
        <h2 className="text-2xl font-display font-extrabold">Projects</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="card-base flex flex-col gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 text-sm text-text3">
                <div className="font-mono uppercase tracking-[0.12em] text-accent">{project.path}</div>
                <div className="text-xs uppercase tracking-[0.08em] text-text3">{project.year}</div>
              </div>
              <div className="space-y-3">
                <div className="font-display text-xl font-bold text-text">{project.name}</div>
                <p className="text-sm leading-7 text-text2">{project.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`rounded-md border px-2 py-1 text-xs font-mono ${
                    tag.style === 'green' ? 'tag-green' :
                    tag.style === 'blue' ? 'tag-blue' :
                    tag.style === 'amber' ? 'tag-amber' :
                    tag.style === 'purple' ? 'tag-purple' :
                    tag.style === 'teal' ? 'tag-teal' :
                    'tag-coral'
                  }`}>
                  {tag.label}
                </span>
              ))}
            </div>
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-max rounded-md border border-border2 px-4 py-2 text-sm font-mono text-text3 transition hover:border-accent hover:text-accent">
                {project.repo.includes('github.com') ? 'github ↗' : 'view project ↗'}
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
