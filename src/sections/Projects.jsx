import { useMemo, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import { ExternalLinkIcon } from '../components/Icons'
import { projects, projectFilters } from '../data/projects'

function Spotlight({ project }) {
  return (
    <ScrollReveal variant="reveal-scale" threshold={0.1}>
      <div className="card group grid overflow-hidden rounded-3xl lg:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} — featured project screenshot`}
            loading="lazy"
            width="1200"
            height="750"
            className="h-full min-h-[260px] w-full object-cover opacity-90 transition-all duration-700 ease-lux group-hover:scale-[1.03] group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/40 hidden lg:block" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
          <p className="eyebrow mb-4">Featured Project</p>
          <h3 className="font-display text-fluid-h3 font-bold leading-tight text-cream">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-mist">{project.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={project.liveUrl} variant="accent">
              View Live Website
            </Button>
            <Button href={project.githubUrl} variant="outline" showArrow={false}>
              View Project
              <ExternalLinkIcon className="h-4 w-4 transition-transform duration-300 ease-lux group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const featured = useMemo(() => projects.find((p) => p.featured), [])
  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? projects.filter((p) => !p.featured)
        : projects.filter((p) => !p.featured && p.tags.includes(activeFilter)),
    [activeFilter]
  )

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          description="A collection of projects that reflect how I approach design, engineering, and problem-solving."
        />

        {/* Spotlight */}
        {featured && (
          <div className="mb-20">
            <Spotlight project={featured} />
          </div>
        )}

        {/* Filters */}
        <ScrollReveal>
          <div className="mb-14 flex flex-wrap gap-2" role="group" aria-label="Project filters">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`rounded-full border px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ease-lux ${
                  activeFilter === filter
                    ? 'border-transparent bg-gradient-to-r from-accent to-accent-violet text-white shadow-[0_4px_16px_rgba(109,124,255,0.3)]'
                    : 'border-line bg-surface/50 text-mist hover:border-mist/40 hover:text-cream'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project list */}
        <div key={activeFilter} className="space-y-20 sm:space-y-24">
          {filtered.length === 0 ? (
            <p className="text-sm text-mist">No projects in this category yet.</p>
          ) : (
            filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
