import { motion } from 'framer-motion'
import { Award, Trophy } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import { positions, recognition } from '../data/content'

export default function Positions() {
  return (
    <PageTransition>
      <PageHero
        icon={Award}
        eyebrow="Leadership"
        title="Position of responsibility"
        description="Academic, residential, and community leadership roles held at IIT Bombay and beyond."
      />

      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {positions.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="p-5 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50 hover:border-[color:var(--color-violet)]/40 transition-colors"
              >
                <h4 className="font-medium">{p.title}</h4>
                {p.org && <p className="text-sm text-[color:var(--color-pink)] mt-0.5">{p.org}</p>}
                {p.period && <p className="text-xs text-[color:var(--color-muted)] mt-0.5">{p.period}</p>}
                {p.description && <p className="text-sm text-[color:var(--color-muted)] mt-2 leading-relaxed">{p.description}</p>}
              </motion.div>
            ))}
          </div>

          {recognition.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl border border-[color:var(--color-border)] bg-gradient-to-r from-[color:var(--color-violet)]/10 to-[color:var(--color-pink)]/10 flex items-center gap-4"
            >
              <Trophy className="text-[color:var(--color-pink)] shrink-0" size={28} />
              <div>
                {recognition.map((r) => (
                  <div key={r.title}>
                    <div className="font-medium">{r.title}</div>
                    {r.description && <div className="text-sm text-[color:var(--color-muted)]">{r.description}</div>}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
