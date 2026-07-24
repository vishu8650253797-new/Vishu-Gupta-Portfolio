import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import { TechIcon } from '../components/Icons'

const IDENTITY_ROWS = [
  { label: 'Frontend', value: 'React.js · JavaScript · Tailwind CSS', icon: 'react' },
  { label: 'Backend', value: 'Node.js · Java · Spring Boot', icon: 'node' },
  { label: 'Database', value: 'MongoDB · MySQL', icon: 'mongodb' },
  { label: 'Approach', value: 'Responsive · Scalable · User-focused', icon: 'git' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-charcoal py-24 sm:py-32">
      <div className="container-lux">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left — full photo */}
          <ScrollReveal variant="reveal-left" className="order-1">
            <div className="relative">
              <div
                className="absolute -left-6 -top-6 h-40 w-40 rounded-full opacity-25"
                style={{ background: 'radial-gradient(circle, rgba(109,124,255,0.5) 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              <div className="card relative rounded-3xl p-5 sm:p-7">
                <img
                  src="/images/IMG_7198-941x941.jpg"
                  alt="Vishu Gupta"
                  className="w-full rounded-2xl object-cover shadow-[0_8px_32px_rgba(18,18,30,0.12)]"
                />
                <ul className="mt-6 space-y-5 border-t border-line pt-6">
                  {IDENTITY_ROWS.map((row) => (
                    <li key={row.label} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-soft">
                        <TechIcon name={row.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-widest text-mist">
                          {row.label}
                        </p>
                        <p className="mt-1 text-sm text-cream">{row.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — introduction */}
          <div className="order-2">
            <ScrollReveal>
              <p className="eyebrow mb-4">About Me</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-fluid-h2 font-bold leading-[1.1] tracking-tight text-cream">
                More Than Just Code.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-6 leading-relaxed text-mist">
                I&apos;m a Full-Stack Developer who genuinely enjoys building modern websites and
                web applications. My work spans the entire stack — crafting responsive,
                pixel-precise frontends with <span className="text-cream">React.js</span> and{' '}
                <span className="text-cream">JavaScript</span>, and engineering reliable backends
                with <span className="text-cream">Node.js</span>,{' '}
                <span className="text-cream">Java</span>, and{' '}
                <span className="text-cream">Spring Boot</span>.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="mt-5 leading-relaxed text-mist">
                From designing clean, modern UI/UX to structuring databases with MongoDB and
                MySQL, I focus on building scalable applications that feel effortless to use.
                Every project is an opportunity to combine thoughtful design with solid
                engineering — responsive by default, fast by design.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="mt-9">
                <Button href="#contact" variant="outline">
                  More About Me
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
