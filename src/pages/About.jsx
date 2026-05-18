import { aboutSections, contactItems } from '../data'

function About() {
  return (
    <div className="py-8 sm:py-12">
      <div className="space-y-10">
        <div className="space-y-6 border-b border-border pb-10">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.14em] text-accent">
            <span className="block h-px w-16 bg-accent" />
            Coimbatore, India
          </div>
          <h1 className="font-display text-5xl font-extrabold leading-tight tracking-[-0.04em] sm:text-6xl">Hi, I'm Eeshwar E.</h1>
          <p className="max-w-2xl text-base leading-8 text-text2 sm:text-lg">
            A Computer Engineering undergraduate specialising in machine learning and AI-driven systems, with strong foundations in data structures and algorithms. Experienced in developing end-to-end ML pipelines, signal processing systems, and scalable web applications using Python, React, and Node.js.
          </p>
        </div>

        <div className="grid gap-1 rounded-[1rem] border border-border bg-border p-1 md:grid-cols-2">
          {aboutSections.map((section) => (
            <div key={section.label} className="card-base">
              <div className="text-xs uppercase tracking-[0.1em] text-text3">{section.label}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span key={item} className={`rounded-md border px-3 py-2 text-xs font-mono ${
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

        <div className="card-base">
          <div className="text-xs uppercase tracking-[0.1em] text-text3">Contact</div>
          <div className="mt-6 grid gap-4">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="text-xl">{item.icon}</span>
                <div className="text-sm text-text2">
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
    </div>
  )
}

export default About
