import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Education from './pages/Education'
import { navLinks } from './data'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="relative min-h-screen text-text">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(60,140,255,0.22),_transparent_28%)] blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(20,70,180,0.18),_transparent_30%)] blur-3xl opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#02050f]/90 via-[#06112b]/60 to-[#061628]/100" />
      </div>
      <div className="relative z-10">
        <NavBar activePage={page} onNavigate={setPage} navLinks={navLinks} />
        <main className="mx-auto flex max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-white/10 bg-[rgba(7,11,19,0.72)] p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="rounded-[24px] border border-white/10 bg-[rgba(10,14,24,0.7)] p-4 sm:p-6 lg:p-8">
              <section className={page === 'home' ? 'block' : 'hidden'}>
                <Home onNavigate={setPage} />
              </section>
              <section className={page === 'projects' ? 'block' : 'hidden'}>
                <Projects />
              </section>
              <section className={page === 'about' ? 'block' : 'hidden'}>
                <About />
              </section>
              <section className={page === 'education' ? 'block' : 'hidden'}>
                <Education />
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
