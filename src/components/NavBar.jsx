function NavBar({ activePage, onNavigate, navLinks }) {
  return (
    <nav className="sticky top-0 z-50 bg-bg/95 border-b border-border backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <button onClick={() => onNavigate('home')} className="font-display text-lg font-extrabold text-text transition hover:text-accent focus:outline-none">
          EE<span className="text-accent">.</span>
        </button>
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => onNavigate(link.id)}
                className={`rounded-md px-4 py-2 text-sm font-mono tracking-[0.05em] transition ${
                  activePage === link.id ? 'bg-bg3 text-text' : 'text-text2 hover:text-text hover:bg-bg3'
                }`}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => onNavigate('about')}
          className="rounded-md bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-[0.04em] text-bg transition hover:bg-accent2">
          contact →
        </button>
      </div>
    </nav>
  )
}

export default NavBar
