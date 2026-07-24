// Inline SVG icons — no external icon libraries.
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const TechIcon = ({ name, className = 'h-6 w-6' }) => {
  switch (name) {
    case 'html':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" />
          <path d="M8 7.5h8l-.4 4.5H8.8l.3 3.5 2.9 1 2.9-1 .2-2" />
        </svg>
      )
    case 'css':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" />
          <path d="M16 7.5H8.2l.3 3.5H15l-.3 4-2.7.9-2.7-.9-.2-2" />
        </svg>
      )
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M10 11v5a2 2 0 01-2 2" />
          <path d="M17 11h-2.5a1.25 1.25 0 000 2.5h1a1.25 1.25 0 010 2.5H13" />
        </svg>
      )
    case 'react':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
        </svg>
      )
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M6.5 10c1-3 3-4.5 5.5-4.5 3 0 3.75 2.25 5.25 2.75 1 .35 2-.05 2.75-1-1 3-3 4.5-5.5 4.5-3 0-3.75-2.25-5.25-2.75-1-.35-2 .05-2.75 1z" />
          <path d="M2 16.75c1-3 3-4.5 5.5-4.5 3 0 3.75 2.25 5.25 2.75 1 .35 2-.05 2.75-1-1 3-3 4.5-5.5 4.5-3 0-3.75-2.25-5.25-2.75-1-.35-2 .05-2.75 1z" />
        </svg>
      )
    case 'node':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" />
          <path d="M9 15.5c.5.9 1.4 1.5 2.8 1.5 1.7 0 2.7-.8 2.7-2 0-1.4-1.1-1.8-2.6-2.2-1.3-.4-2.3-.7-2.3-1.9 0-1.1.9-1.9 2.3-1.9 1.1 0 1.9.4 2.4 1.2" />
        </svg>
      )
    case 'java':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M12 8c2-1.5 1-3-1-4.5 3 .5 4 2.5 1 4.5z" />
          <path d="M7.5 12c-1.5.8-1.5 1.7 0 2.2 2.5.9 6.5.9 9 0 1.5-.5 1.5-1.4 0-2.2" />
          <path d="M6 16.5c-2 1-1.5 2.3 1 3 3 .9 7 .9 10 0 2.5-.7 3-2 1-3" />
        </svg>
      )
    case 'spring':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M19 4.5A9.5 9.5 0 1121.5 12" />
          <path d="M8 13.5c2.5 1.5 6 1 8-1.5 1.5-2 1.5-4.5.5-6.5-.5 2-2 3.5-4.5 4-2.2.4-4 1.5-4 4z" />
        </svg>
      )
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M12 2c3.5 4 5 6.8 5 10a5.5 5.5 0 01-4.5 5.5L12 22l-.5-4.5A5.5 5.5 0 017 12c0-3.2 1.5-6 5-10z" />
          <path d="M12 6v12" />
        </svg>
      )
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
          <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
        </svg>
      )
    case 'git':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <circle cx="6" cy="6" r="2.2" />
          <circle cx="6" cy="18" r="2.2" />
          <circle cx="18" cy="12" r="2.2" />
          <path d="M6 8.2v7.6M8 7l7.8 4M8 17l7.8-4" />
        </svg>
      )
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
        </svg>
      )
    case 'gitlab':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M12 21L3.5 14.7a1.2 1.2 0 01-.4-1.4L5 6l2.5 7h9L19 6l1.9 7.3a1.2 1.2 0 01-.4 1.4L12 21z" />
        </svg>
      )
    case 'postman':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <circle cx="12" cy="12" r="9" />
          <path d="M14.5 7.5l-6 6M13 13.5l2.5 1M9.5 12.5L8 16l3.5-1.5" />
        </svg>
      )
    case 'vscode':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M17 3l4 2v14l-4 2-9-8-3.5 2.5L3 14l4-2-4-2 1.5-1.5L8 11l9-8z" />
          <path d="M17 7.5v9" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />
        </svg>
      )
  }
}

export const ServiceIcon = ({ name, className = 'h-7 w-7' }) => {
  switch (name) {
    case 'code':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />
        </svg>
      )
    case 'stack':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
          <path d="M3 12l9 4.5 9-4.5M3 16.5L12 21l9-4.5" />
        </svg>
      )
    case 'design':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 000 18M12 7.5a4.5 4.5 0 000 9" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12.5h18" />
        </svg>
      )
    case 'refresh':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M21 12a9 9 0 11-2.6-6.4M21 3v6h-6" />
        </svg>
      )
    case 'api':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <circle cx="5" cy="12" r="2.2" />
          <circle cx="19" cy="6" r="2.2" />
          <circle cx="19" cy="18" r="2.2" />
          <path d="M7 11l10-4.2M7 13l10 4.2" />
        </svg>
      )
    default:
      return null
  }
}

export const ExternalLinkIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
)

export const GithubMark = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
)

export const LinkedInIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 00-4 0" />
  </svg>
)

export const MailIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

export const InterestIcon = ({ name, className = 'h-5 w-5' }) => {
  switch (name) {
    case 'football':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7l4 3-1.5 4.5h-5L8 10l4-3zM12 3v4M8 10l-4.5-1M16 10l4.5-1M9.5 14.5L7 18.5M14.5 14.5l2.5 4" />
        </svg>
      )
    case 'cricket':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M5 19l9.5-9.5M13 4l7 7-4.5 1.5L10 7 13 4z" />
          <circle cx="6.5" cy="6.5" r="2" />
        </svg>
      )
    case 'gaming':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M6 9h12a4 4 0 014 4v2a4 4 0 01-4 4c-1.5 0-2.5-1-3.5-2h-5c-1 1-2 2-3.5 2a4 4 0 01-4-4v-2a4 4 0 014-4z" />
          <path d="M8 12v3M6.5 13.5h3M15.5 12.5v.01M17.5 14.5v.01" />
        </svg>
      )
    case 'music':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M9 18V6l11-2v12" />
          <circle cx="6.5" cy="18" r="2.5" />
          <circle cx="17.5" cy="16" r="2.5" />
        </svg>
      )
    case 'travel':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M10.5 13.5L3 11l1.5-1.5 6 1L16 5a1.8 1.8 0 012.5 2.5l-5.5 5.5 1 6L12.5 20.5l-2-7z" />
        </svg>
      )
    default:
      return null
  }
}
