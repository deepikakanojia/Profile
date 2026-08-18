import { motion } from 'framer-motion'
import { Music } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import { hobbies } from '../data/content'

export default function Hobbies() {
  return (
    <PageTransition>
      <PageHero
        icon={Music}
        eyebrow="Beyond work"
        title="Hobbies & interests"
        description="Music, art, and community — the things that keep me grounded and curious."
      />

      <section className="pb-24 md:pb-32">
        <div className="section-container grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hobbies.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50 hover:border-[color:var(--color-pink)]/40 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[color:var(--color-pink)]/10 flex items-center justify-center mb-4">
                <Music size={16} className="text-[color:var(--color-pink)]" />
              </div>
              <h3 className="font-display font-semibold mb-2">{h.title}</h3>
              <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">{h.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
