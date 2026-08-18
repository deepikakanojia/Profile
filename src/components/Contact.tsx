import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { FacebookIcon, LinkedinIcon } from './icons'
import { profile } from '../data/content'

const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, '')}` },
  { icon: LinkedinIcon, label: 'LinkedIn', href: profile.social.linkedin },
  { icon: FacebookIcon, label: 'Facebook', href: profile.social.facebook },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50 p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-[color:var(--color-violet)] to-[color:var(--color-pink)] opacity-20 blur-[100px]" />

          <span className="relative inline-block text-sm font-medium tracking-widest uppercase text-[color:var(--color-pink)] mb-3">
            Get in touch
          </span>
          <h2 className="relative text-3xl md:text-5xl font-bold tracking-tight mb-5">
            Let's build something <span className="gradient-text">meaningful</span>
          </h2>
          <p className="relative text-[color:var(--color-muted)] text-lg max-w-xl mx-auto mb-10">
            Open to conversations about learning technology, research collaborations, or instructional design work.
          </p>

          <div className="relative flex flex-wrap items-center justify-center gap-3">
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-bg)]/40 hover:border-[color:var(--color-violet)]/60 hover:-translate-y-0.5 transition-all text-sm font-medium"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
