import { useRef } from 'react'

const ArrowIcon = () => (
  <svg
    className="h-4 w-4 transition-transform duration-300 ease-lux group-hover:translate-x-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
)

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  showArrow = true,
  type,
  disabled = false,
  className = '',
  download,
  target,
}) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (el) el.style.transform = ''
  }

  const base =
    'group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-lux will-change-transform rounded-full'
  const variants = {
    primary:
      'bg-cream text-ink hover:bg-cream/90 hover:shadow-[0_8px_32px_rgba(109,124,255,0.25)]',
    outline:
      'border border-line bg-surface/50 text-cream hover:border-accent/60 hover:bg-surface hover:shadow-[0_8px_24px_rgba(109,124,255,0.15)]',
    accent:
      'bg-gradient-to-r from-accent to-accent-violet text-white hover:shadow-[0_8px_32px_rgba(109,124,255,0.4)] hover:brightness-110',
  }

  const props = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `${base} ${variants[variant]} ${disabled ? 'opacity-60 pointer-events-none' : ''} ${className}`,
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
        {showArrow && <ArrowIcon />}
      </a>
    )
  }

  return (
    <button type={type || 'button'} onClick={onClick} disabled={disabled} {...props}>
      {children}
      {showArrow && <ArrowIcon />}
    </button>
  )
}
