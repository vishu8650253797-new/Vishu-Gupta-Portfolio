import { useEffect } from 'react'

const RESUME_URL = '/Vishu_Gupta_Resume.pdf'

export default function ResumeModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Resume viewer"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/90 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="glass relative z-10 flex h-full max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <span className="font-display text-sm font-semibold text-cream">
            Vishu Gupta — Resume
          </span>
          <div className="flex items-center gap-2.5">
            <a
              href={RESUME_URL}
              download="Vishu_Gupta_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-violet px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_24px_rgba(109,124,255,0.4)] hover:brightness-110"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="M7 10l5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              Download
            </a>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full text-mist transition-colors hover:bg-surface hover:text-cream"
              aria-label="Close resume viewer"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <iframe
          src={`${RESUME_URL}#toolbar=0&navpanes=0`}
          title="Vishu Gupta Resume"
          className="h-full w-full flex-1 bg-white"
        />
      </div>
    </div>
  )
}
