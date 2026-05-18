import { educationItems } from '../data'

function Education() {
  return (
    <div className="py-8 sm:py-12">
      <div className="mb-8 flex items-center gap-3">
        <span className="text-2xl text-accent">🎓</span>
        <h2 className="text-2xl font-display font-extrabold">Education</h2>
      </div>
      <div className="grid gap-1 rounded-[1rem] border border-border bg-border p-1">
        {educationItems.map((item) => (
          <div key={item.degree} className="card-base grid gap-6 md:grid-cols-[1fr_auto]">
            <div className="space-y-3">
              <div className="font-display text-xl font-bold">{item.degree}</div>
              <div className="text-sm text-accent font-mono">{item.institution}</div>
              <div className="text-xs text-text3 font-mono uppercase tracking-[0.04em]">{item.period}</div>
              {item.courses ? (
                <div className="mt-3">
                  <div className="text-xs uppercase tracking-[0.1em] text-text3">Relevant Coursework</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.courses.map((course) => (
                      <span key={course} className="rounded-md border border-border2 bg-bg3 px-3 py-1 text-xs text-text2">{course}</span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            <div className="inline-flex items-center rounded-full border border-border2 bg-bg3 px-4 py-3 text-xs font-mono text-accent">
              {item.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
