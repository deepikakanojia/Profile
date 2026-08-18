import { motion } from 'framer-motion'
import { Presentation } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import { workshops } from '../data/content'

export default function Workshops() {
  return (
    <PageTransition>
      <PageHero
        icon={Presentation}
        eyebrow="Community"
        title="Workshops & conferences"
        description="Conferences attended and training programmes volunteered for."
      />

      <section className="pb-24 md:pb-32">
        <div className="section-container grid sm:grid-cols-2 gap-5">
          {workshops.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50 hover:border-[color:var(--color-cyan)]/40 transition-colors"
            >
              <Presentation size={20} className="text-[color:var(--color-cyan)] mb-3" />
              <h3 className="font-display font-semibold mb-1">{w.title}</h3>
              {w.org && <p className="text-sm text-[color:var(--color-pink)]">{w.org}</p>}
              {w.period && <p className="text-xs text-[color:var(--color-muted)] mt-0.5">{w.period}</p>}
              {w.description && <p className="text-sm text-[color:var(--color-muted)] mt-3 leading-relaxed">{w.description}</p>}
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
