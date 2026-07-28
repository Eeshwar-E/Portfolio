import { educationItems } from '../data'

function Education() {
  return (
    <div className="space-y-6 py-2 sm:py-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[24px] border border-border/70 bg-bg3/70 p-5">
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-border2 bg-bg/70 p-2 text-xl">🎓</span>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-text3">Academic background</div>
            <h2 className="text-2xl font-display font-extrabold">Education</h2>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {educationItems.map((item) => (
          <div key={item.degree} className="glass-card grid gap-5 p-5 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="space-y-3">
              <div className="font-display text-xl font-bold text-text">{item.degree}</div>
              <div className="text-sm font-mono text-accent">{item.institution}</div>
              <div className="text-xs font-mono uppercase tracking-[0.08em] text-text3">{item.period}</div>
              {item.courses ? (
                <div className="pt-2">
                  <div className="text-xs uppercase tracking-[0.2em] text-text3">Relevant coursework</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.courses.map((course) => (
                      <span key={course} className="rounded-full border border-border2 bg-bg3/70 px-3 py-1 text-xs text-text2">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            <div className="inline-flex items-center rounded-full border border-border2 bg-bg3/70 px-4 py-3 text-sm font-mono text-accent">
              {item.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
