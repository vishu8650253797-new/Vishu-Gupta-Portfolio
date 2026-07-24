import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { ServiceIcon } from '../components/Icons'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="relative bg-charcoal py-24 sm:py-32">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Services"
          title="What I Can Build"
          description="From single-page interfaces to complete full-stack products — here's how I can help."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.number} delay={(i % 3) * 100}>
              <div className="card card-hover group relative h-full overflow-hidden p-7">
                <div className="mb-8 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-soft transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                    <ServiceIcon name={service.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-sm text-mist/50 transition-colors duration-300 group-hover:text-accent-soft/70">
                    {service.number}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-cream">{service.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{service.description}</p>
                <span
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-violet transition-transform duration-500 ease-lux group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
