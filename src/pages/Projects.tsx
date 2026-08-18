import { motion } from 'framer-motion'
import { ExternalLink, FolderKanban, Rocket } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <PageTransition>
      <PageHero
        icon={FolderKanban}
        eyebrow="Projects"
        title="Selected projects"
        description="Prototypes and studies spanning VR, adaptive learning, robotics, and game design."
      />

      <section className="pb-24 md:pb-32">
        <div className="section-container grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50 overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br from-[color:var(--color-violet)] to-[color:var(--color-pink)] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />

              <div className="relative flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[color:var(--color-violet)]/10 flex items-center justify-center">
                  <Rocket size={18} className="text-[color:var(--color-violet)]" />
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title}`}
                    className="text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)] transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <h3 className="relative font-display font-semibold text-lg mb-1.5">{p.title}</h3>
              {p.meta && <p className="relative text-xs text-[color:var(--color-pink)] mb-3">{p.meta}</p>}
              <p className="relative text-sm text-[color:var(--color-muted)] leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
