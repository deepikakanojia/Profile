import { motion } from 'framer-motion'
import { FlaskConical } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import { research } from '../data/content'

export default function Research() {
  return (
    <PageTransition>
      <PageHero
        icon={FlaskConical}
        eyebrow="Research"
        title="Publications & research work"
        description="Studying how learners think and feel — through eye-tracking, cognitive science, and data."
      />

      <section className="pb-24 md:pb-32">
        <div className="section-container grid md:grid-cols-2 gap-5">
          {research.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="p-6 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50 hover:bg-[color:var(--color-surface)] hover:border-[color:var(--color-cyan)]/40 transition-all"
            >
              <FlaskConical size={20} className="text-[color:var(--color-cyan)] mb-3" />
              <h3 className="font-display font-semibold leading-snug mb-2">{r.title}</h3>
              {r.venue && <p className="text-sm text-[color:var(--color-pink)] mb-3">{r.venue}</p>}
              <ul className="space-y-1.5">
                {r.points.map((p) => (
                  <li key={p} className="text-sm text-[color:var(--color-muted)] leading-relaxed flex gap-2">
                    <span className="text-[color:var(--color-cyan)] mt-1.5">▹</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
