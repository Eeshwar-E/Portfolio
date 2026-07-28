function NavBar({ activePage, onNavigate, navLinks }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 rounded-full border border-border/70 bg-bg3/70 px-3 py-2 text-left transition hover:border-accent/50 focus:outline-none">
          <span className="font-display text-lg font-extrabold tracking-[0.08em] text-text">EE<span className="text-accent">.</span></span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-text2"></span>
        </button>

        <div className="flex flex-wrap items-center gap-2 rounded-full border border-border/70 bg-bg3/70 p-1.5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`rounded-full px-3 py-2 text-sm font-mono uppercase tracking-[0.16em] transition ${
                activePage === link.id ? 'bg-accent text-bg shadow-lg shadow-accent/20' : 'text-text2 hover:bg-bg/80 hover:text-text'
              }`}>
              {link.label}
            </button>
          ))}
        </div>

        <a
          href="mailto:eeshwarelango@gmail.com"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-bg transition hover:bg-accent2"
        >
          contact ↗
        </a>
      </div>
    </nav>
  )
}

export default NavBar
