import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

const STAGES = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the idea, requirements, and goals.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create a thoughtful and user-focused experience.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Build with modern and scalable technologies.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Test, optimize, and deploy.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Process"
          title="How I Build"
          description="A clear, structured approach that turns ideas into polished, production-ready products."
        />

        {/* Desktop: horizontal / Mobile: vertical timeline */}
        <div className="relative">
          {/* Horizontal connector (desktop) */}
          <div
            className="absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-accent/50 via-line to-transparent lg:block"
            aria-hidden="true"
          />
          {/* Vertical connector (mobile) */}
          <div
            className="absolute bottom-6 left-[26px] top-2 w-px bg-gradient-to-b from-accent/50 via-line to-transparent lg:hidden"
            aria-hidden="true"
          />

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {STAGES.map((stage, i) => (
              <ScrollReveal key={stage.number} as="li" delay={i * 120}>
                <div className="group relative flex gap-6 lg:block">
                  <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-line bg-ink font-mono text-sm text-accent-soft transition-all duration-300 ease-lux group-hover:border-accent/60 group-hover:shadow-[0_0_24px_rgba(109,124,255,0.25)]">
                    {stage.number}
                  </div>
                  <div className="pt-2 lg:pt-7">
                    <h3 className="font-display text-lg font-semibold text-cream transition-colors duration-300 group-hover:text-accent-soft">
                      {stage.title}
                    </h3>
                    <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-mist">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
