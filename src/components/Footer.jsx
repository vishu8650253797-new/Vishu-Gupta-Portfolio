import { GithubMark, LinkedInIcon, MailIcon } from './Icons'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/vishu8650253797-new', Icon: GithubMark },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishu-gupta-743b34323/', Icon: LinkedInIcon },
  { label: 'Email', href: 'mailto:vishu8650253797@gmail.com', Icon: MailIcon },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-line bg-charcoal">
      <div className="container-lux py-14 sm:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="font-display text-xl font-bold tracking-tight text-cream">
              Vishu<span className="text-accent"> Gupta</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Full-Stack Developer building modern digital experiences.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/50 text-mist transition-all duration-300 ease-lux hover:border-accent/50 hover:text-cream hover:shadow-[0_4px_16px_rgba(109,124,255,0.2)] hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-mist transition-colors duration-300 hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-5">Get in touch</p>
            <a
              href="mailto:vishu8650253797@gmail.com"
              className="text-sm text-mist transition-colors duration-300 hover:text-cream"
            >
              vishu8650253797@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-mist">© 2026 Vishu Gupta. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs font-medium tracking-wide text-mist transition-colors duration-300 hover:text-cream"
          >
            Back to Top
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 ease-lux group-hover:-translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
