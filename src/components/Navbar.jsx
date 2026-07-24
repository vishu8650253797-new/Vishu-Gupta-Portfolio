import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Scroll progress indicator */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-accent to-accent-violet transition-[width] duration-150 rounded-full"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <div
        className={`container-lux transition-all duration-500 ease-lux ${
          scrolled ? 'pt-3' : 'pt-5'
        }`}
      >
        <nav
          className={`flex h-[64px] items-center justify-between rounded-2xl px-5 transition-all duration-500 ease-lux ${
            scrolled ? 'glass' : 'border border-transparent'
          }`}
          aria-label="Main navigation"
        >
        <a
          href="#home"
          onClick={closeMenu}
          className="font-display text-lg font-bold tracking-tight text-cream transition-colors hover:text-accent-soft"
        >
          Vishu<span className="text-accent"> Gupta</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'bg-accent/10 text-accent-soft'
                    : 'text-mist hover:bg-surface hover:text-cream'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-violet px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 ease-lux hover:shadow-[0_8px_24px_rgba(109,124,255,0.4)] hover:brightness-110"
          >
            Let&apos;s Talk
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`absolute h-px w-6 bg-cream transition-all duration-300 ease-lux ${
                menuOpen ? 'rotate-45' : '-translate-y-[5px]'
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-cream transition-all duration-300 ease-lux ${
                menuOpen ? '-rotate-45' : 'translate-y-[5px]'
              }`}
            />
          </button>
        </div>
        </nav>
      </div>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 top-[84px] z-40 bg-ink/95 backdrop-blur-xl transition-all duration-500 ease-lux lg:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="container-lux flex flex-col gap-1 pt-10">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-500 ease-lux ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 60 + 100}ms` : '0ms' }}
            >
              <a
                href={link.href}
                onClick={closeMenu}
                className={`flex items-baseline gap-4 border-b border-line py-4 font-display text-2xl font-semibold transition-colors ${
                  activeSection === link.href.slice(1) ? 'text-accent-soft' : 'text-cream'
                }`}
              >
                <span className="font-mono text-xs text-mist">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
          <li
            className={`pt-8 transition-all duration-500 ease-lux ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '580ms' : '0ms' }}
          >
            <a
              href="#contact"
              onClick={closeMenu}
              className="inline-flex items-center gap-2 rounded-sm bg-cream px-7 py-3.5 text-sm font-medium text-ink"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
