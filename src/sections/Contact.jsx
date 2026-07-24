import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import { GithubMark, LinkedInIcon, MailIcon } from '../components/Icons'

const CONTACT_DETAILS = [
  { label: 'Email', value: 'vishu8650253797@gmail.com', href: 'mailto:vishu8650253797@gmail.com', Icon: MailIcon },
  { label: 'GitHub', value: 'github.com/vishu8650253797-new', href: 'https://github.com/vishu8650253797-new', Icon: GithubMark },
  { label: 'LinkedIn', value: 'linkedin.com/in/vishu-gupta', href: 'https://www.linkedin.com/in/vishu-gupta-743b34323/', Icon: LinkedInIcon },
]

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

// Submissions are delivered via Formspree to vishu8650253797@gmail.com
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdaqwqow'

async function submitForm(data) {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })
  return { ok: res.ok }
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.subject.trim()) errors.subject = 'Please enter a subject.'
  if (!form.message.trim()) {
    errors.message = 'Please enter a message.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

const inputClasses = (hasError) =>
  `w-full rounded-xl border bg-surface/60 px-4 py-3.5 text-base sm:text-sm text-cream placeholder:text-mist/50 outline-none transition-all duration-300 ease-lux focus:bg-surface ${
    hasError
      ? 'border-red-400/60 focus:border-red-400'
      : 'border-line focus:border-accent/60 focus:shadow-[0_0_20px_rgba(109,124,255,0.12)]'
  }`

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [submittedName, setSubmittedName] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setStatus('loading')
    try {
      const res = await submitForm(form)
      if (res.ok) {
        setSubmittedName(form.name.trim().split(' ')[0])
        setStatus('success')
        setForm(INITIAL_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-x-0 bottom-0 h-[60%] aurora rotate-180" aria-hidden="true" />

      <div className="container-lux relative">
        <SectionHeading
          eyebrow="Contact"
          title="Have an Idea? Let's Build It."
          description="Whether you're launching a new product, redesigning an existing website, or looking for a developer, let's create something exceptional."
        />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Contact details */}
          <ScrollReveal variant="reveal-left" className="lg:col-span-4">
            <ul className="space-y-6">
              {CONTACT_DETAILS.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-soft transition-all duration-300 ease-lux group-hover:bg-accent/20 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-mist">
                        {label}
                      </span>
                      <span className="mt-0.5 block text-sm text-cream transition-colors duration-300 group-hover:text-accent-soft">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="card mt-10 p-6">
              <p className="text-sm leading-relaxed text-mist">
                Currently{' '}
                <span className="text-emerald-600">available</span> for freelance projects and
                full-time opportunities. Typical response time:{' '}
                <span className="text-cream">within 24 hours</span>.
              </p>
            </div>
          </ScrollReveal>

          {/* Form / Thank-you */}
          <ScrollReveal variant="reveal-right" className="lg:col-span-8">
            {status === 'success' ? (
              <div className="card flex h-full min-h-[420px] flex-col items-center justify-center p-10 text-center sm:p-14">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                  <svg
                    className="h-8 w-8 text-emerald-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-cream sm:text-3xl">
                  Thank You{submittedName ? `, ${submittedName}` : ''}!
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-mist sm:text-base">
                  Your message has been sent successfully. I&apos;ll get back to you at the email
                  you provided — usually within 24 hours.
                </p>
                <div className="mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    showArrow={false}
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-medium tracking-wide text-mist">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClasses(!!errors.name)}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium tracking-wide text-mist">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClasses(!!errors.email)}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-xs font-medium tracking-wide text-mist">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputClasses(!!errors.subject)}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && <p className="mt-1.5 text-xs text-red-500">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-medium tracking-wide text-mist">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputClasses(!!errors.message)} resize-y`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
              </div>

              <div className="flex flex-col items-stretch gap-5 pt-2 sm:flex-row sm:items-center">
                <Button type="submit" variant="primary" className="w-full justify-center sm:w-auto" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </Button>
                <div aria-live="polite">
                  {status === 'error' && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Please try again or email me directly at{' '}
                      <a href="mailto:vishu8650253797@gmail.com" className="underline">
                        vishu8650253797@gmail.com
                      </a>
                      .
                    </p>
                  )}
                </div>
              </div>
            </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
