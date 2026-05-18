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
    <div className="min-h-screen bg-bg text-text">
      <NavBar activePage={page} onNavigate={setPage} navLinks={navLinks} />
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
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
      </main>
    </div>
  )
}

export default App
