import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import { TechIcon } from '../components/Icons'
import { stats } from '../data/stats'

const ORBIT_TECHS = [
  { name: 'React.js', icon: 'react', className: 'left-[-8%] top-[12%] animate-float' },
  { name: 'JavaScript', icon: 'javascript', className: 'right-[-6%] top-[4%] animate-float-slow' },
  { name: 'Node.js', icon: 'node', className: 'left-[-10%] bottom-[22%] animate-float-slow' },
  { name: 'MongoDB', icon: 'mongodb', className: 'right-[-8%] bottom-[30%] animate-float' },
  { name: 'Java', icon: 'java', className: 'left-[14%] bottom-[-6%] animate-float' },
  { name: 'Spring Boot', icon: 'spring', className: 'right-[16%] bottom-[-8%] animate-float-slow' },
]

const CODE_LINES = [
  { indent: 0, content: <><span className="text-accent-violet">const</span> <span className="text-accent-soft">developer</span> = {'{'}</> },
  { indent: 1, content: <><span className="text-mist">name:</span> <span className="text-emerald-600">'Vishu Gupta'</span>,</> },
  { indent: 1, content: <><span className="text-mist">role:</span> <span className="text-emerald-600">'Full-Stack Developer'</span>,</> },
  { indent: 1, content: <><span className="text-mist">stack:</span> [<span className="text-emerald-600">'React'</span>, <span className="text-emerald-600">'Node'</span>, <span className="text-emerald-600">'Spring Boot'</span>],</> },
  { indent: 1, content: <><span className="text-mist">focus:</span> <span className="text-emerald-600">'Scalable web experiences'</span>,</> },
  { indent: 0, content: <>{'}'}</> },
]

function StatCounter({ value, suffix, label, start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value)
      return
    }
    let raf
    const duration = 1600
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, value])

  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-display text-3xl sm:text-4xl font-bold text-cream">
        {count}
        <span className="text-accent">{suffix}</span>
      </span>
      <span className="text-xs sm:text-sm text-mist">{label}</span>
    </div>
  )
}

export default function Hero() {
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(t)
  }, [])

  useEffect(() => {
    const node = statsRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const entrance = (delay) =>
    `transition-all duration-700 ease-lux ${
      loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-[70%] aurora" aria-hidden="true" />

      <div className="container-lux relative pt-36 pb-20 sm:pt-44 sm:pb-24">
        <div className="grid min-w-0 items-center gap-16 lg:grid-cols-2 lg:gap-10">
          {/* Left — copy */}
          <div className="min-w-0">
            <div className={entrance(0)} style={{ transitionDelay: '100ms' }}>
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-glow rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400/80" />
                </span>
                <span className="text-[11px] sm:text-xs font-medium tracking-wide text-mist">
                  Available for Freelance &amp; Full-Time Opportunities
                </span>
              </div>
            </div>

            <p className={`eyebrow mb-5 ${entrance(0)}`} style={{ transitionDelay: '200ms' }}>
              Full-Stack Developer
            </p>

            <h1
              className={`font-display text-fluid-hero font-extrabold leading-[1.05] tracking-tight text-cream ${entrance(0)}`}
              style={{ transitionDelay: '300ms' }}
            >
              Building Digital Experiences That Make an{' '}
              <span className="text-gradient">Impact.</span>
            </h1>

            <p
              className={`mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-mist ${entrance(0)}`}
              style={{ transitionDelay: '420ms' }}
            >
              I design and develop modern web experiences that combine thoughtful UI/UX,
              powerful technology, and scalable architecture.
            </p>

            <div
              className={`mt-9 flex flex-col gap-4 sm:flex-row ${entrance(0)}`}
              style={{ transitionDelay: '540ms' }}
            >
              <Button href="#projects" variant="primary" className="w-full justify-center sm:w-auto">
                View My Work
              </Button>
              <Button href="#contact" variant="outline" className="w-full justify-center sm:w-auto">
                Let&apos;s Work Together
              </Button>
            </div>
          </div>

          {/* Right — visual */}
          <div
            className={`relative min-w-0 mx-auto w-full max-w-md lg:max-w-none ${entrance(0)}`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="relative min-w-0 px-8 py-6 sm:px-12 sm:py-10">
              {/* Code panel */}
              <div className="glass relative z-10 rounded-2xl p-5 sm:p-7" style={{ boxShadow: 'var(--shadow-panel)' }}>
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
                  <span className="ml-3 font-mono text-[11px] text-mist">developer.js</span>
                </div>
                <pre className="overflow-x-auto font-mono text-[12px] sm:text-[13px] leading-7 text-cream">
                  {CODE_LINES.map((line, i) => (
                    <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                      {line.content}
                    </div>
                  ))}
                  <div className="mt-1 flex items-center gap-1 text-mist">
                    <span className="text-accent-violet">export default</span> developer
                    <span className="ml-0.5 inline-block h-4 w-[7px] animate-blink bg-accent/80" />
                  </div>
                </pre>
              </div>

              {/* Floating tech chips */}
              {ORBIT_TECHS.map((tech) => (
                <div
                  key={tech.name}
                  className={`glass absolute z-20 hidden items-center gap-2 rounded-full px-3.5 py-2 sm:flex ${tech.className} transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(109,124,255,0.2)]`}
                >
                  <TechIcon name={tech.icon} className="h-4 w-4 text-accent-soft" />
                  <span className="font-mono text-[11px] text-cream">{tech.name}</span>
                </div>
              ))}

              {/* Mobile tech row */}
              <div className="mt-5 flex flex-wrap justify-center gap-2 sm:hidden">
                {ORBIT_TECHS.map((tech) => (
                  <div key={tech.name} className="glass flex items-center gap-1.5 rounded-full px-3 py-1.5">
                    <TechIcon name={tech.icon} className="h-3.5 w-3.5 text-accent-soft" />
                    <span className="font-mono text-[10px] text-cream">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Decorative glow */}
              <div
                className="absolute -right-10 -top-10 h-48 w-48 animate-pulse-glow rounded-full opacity-30"
                style={{ background: 'radial-gradient(circle, rgba(142,109,255,0.4) 0%, transparent 70%)' }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`card mt-20 grid grid-cols-2 gap-8 p-8 sm:mt-24 sm:p-10 md:grid-cols-4 ${entrance(0)}`}
          style={{ transitionDelay: '700ms' }}
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} start={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
