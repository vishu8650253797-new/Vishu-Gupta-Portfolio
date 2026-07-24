import ScrollReveal from './ScrollReveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`max-w-3xl ${alignment} mb-14 sm:mb-20`}>
      {eyebrow && (
        <ScrollReveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={100}>
        <h2 className="font-display text-fluid-h2 font-bold leading-[1.1] tracking-tight text-cream">
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={200}>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-mist">{description}</p>
        </ScrollReveal>
      )}
    </div>
  )
}
