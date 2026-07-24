import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="relative bg-charcoal py-24 sm:py-32">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & Growth"
          description="The path that shaped how I build — from learning the fundamentals to shipping real projects."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-line to-transparent sm:left-[9px]"
            aria-hidden="true"
          />

          <ol className="space-y-12">
            {experience.map((item, i) => (
              <ScrollReveal key={`${item.position}-${i}`} as="li" delay={i * 100}>
                <div className="relative pl-10 sm:pl-14">
                  {/* Node */}
                  <span
                    className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-accent/60 bg-charcoal sm:h-[19px] sm:w-[19px]"
                    aria-hidden="true"
                  >
                    <span className="h-[5px] w-[5px] rounded-full bg-accent sm:h-[7px] sm:w-[7px]" />
                  </span>

                  <p className="font-mono text-xs tracking-widest text-accent-soft">
                    {item.duration}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-cream sm:text-2xl">
                    {item.position}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-mist">{item.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{item.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="chip hover:border-accent/40 hover:text-cream"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
