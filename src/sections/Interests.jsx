import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { InterestIcon } from '../components/Icons'

const INTERESTS = [
  { name: 'Football', icon: 'football' },
  { name: 'Cricket', icon: 'cricket' },
  { name: 'Gaming', icon: 'gaming' },
  { name: 'Music', icon: 'music' },
  { name: 'Traveling', icon: 'travel' },
]

export default function Interests() {
  return (
    <section id="interests" className="relative bg-charcoal py-24 sm:py-32">
      <div className="container-lux">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Personal"
              title="Beyond the Code"
              description="When I'm not building for the web, these are the things that keep me curious, competitive, and creative."
            />
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {INTERESTS.map((interest, i) => (
                <ScrollReveal key={interest.name} as="li" delay={i * 80}>
                  <div className="group flex items-center justify-between py-5 transition-colors duration-300">
                    <div className="flex items-center gap-5">
                      <span className="font-mono text-xs text-mist/60">0{i + 1}</span>
                      <span className="font-display text-xl font-semibold text-mist transition-all duration-300 ease-lux group-hover:translate-x-2 group-hover:text-cream sm:text-2xl">
                        {interest.name}
                      </span>
                    </div>
                    <span className="text-mist/50 transition-all duration-300 ease-lux group-hover:text-accent-soft">
                      <InterestIcon name={interest.icon} className="h-5 w-5" />
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
