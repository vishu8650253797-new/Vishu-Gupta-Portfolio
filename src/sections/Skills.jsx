import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { TechIcon } from '../components/Icons'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I Build With"
          description="A curated stack of technologies I use to design, build, and ship modern web applications."
        />

        <div className="space-y-14">
          {skillCategories.map((group) => (
            <div key={group.category}>
              <ScrollReveal>
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-mist">
                    {group.category}
                  </h3>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {group.skills.map((skill, i) => (
                  <ScrollReveal key={skill.name} delay={i * 70}>
                    <div className="card card-hover group h-full p-5">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-soft transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                        <TechIcon name={skill.icon} className="h-5 w-5" />
                      </div>
                      <p className="font-display text-sm font-semibold text-cream">{skill.name}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-accent-soft/70">
                        {group.category}
                      </p>
                      <p className="mt-2.5 text-xs leading-relaxed text-mist">
                        {skill.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
