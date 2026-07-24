import ScrollReveal from './ScrollReveal'
import { ExternalLinkIcon, GithubMark } from './Icons'

export default function ProjectCard({ project }) {
  return (
    <ScrollReveal variant="reveal" threshold={0.1}>
      <article className="group grid min-w-0 gap-8 lg:grid-cols-12 lg:items-center">
        {/* Image */}
        <div className="card card-hover overflow-hidden rounded-2xl lg:col-span-7">
          <div className="relative aspect-[16/10] overflow-hidden bg-surface">
            <img
              src={project.image}
              alt={`${project.title} — project screenshot`}
              loading="lazy"
              width="1200"
              height="750"
              className="h-full w-full object-cover opacity-90 transition-all duration-700 ease-lux group-hover:scale-[1.04] group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-5 lg:pl-4">
          <p className="eyebrow mb-3">{project.category}</p>
          <h3 className="font-display text-fluid-h3 font-bold leading-tight text-cream transition-colors duration-300 group-hover:text-accent-soft">
            {project.title}
          </h3>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-mist">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={project.liveUrl}
              target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
              rel={project.liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group/link inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_4px_14px_rgba(24,24,34,0.08)] transition-all duration-300 ease-lux hover:-translate-y-0.5 hover:bg-cream/90 hover:shadow-[0_6px_20px_rgba(24,24,34,0.14)]"
            >
              Live Demo
              <ExternalLinkIcon className="h-3.5 w-3.5 transition-transform duration-300 ease-lux group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-5 py-2.5 text-sm font-semibold text-cream shadow-[0_4px_14px_rgba(24,24,34,0.04)] transition-all duration-300 ease-lux hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface hover:text-accent-soft hover:shadow-[0_6px_20px_rgba(109,124,255,0.12)]"
            >
              GitHub
              <GithubMark className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}
