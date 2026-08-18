import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import { experience } from '../data/content'

export default function Portfolio() {
  return (
    <PageTransition>
      <PageHero
        icon={Briefcase}
        eyebrow="Career"
        title="Portfolio & work experience"
        description="From curriculum design to enterprise L&D, building learning that scales."
      />

      <section className="pb-24 md:pb-32">
        <div className="section-container relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--color-violet)] via-[color:var(--color-pink)] to-transparent md:left-[23px]" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-14 md:pl-16"
              >
                <div className="absolute left-2 top-1 w-6 h-6 rounded-full bg-[color:var(--color-bg)] border-2 border-[color:var(--color-violet)] flex items-center justify-center md:left-2.5">
                  <Briefcase size={12} className="text-[color:var(--color-violet)]" />
                </div>

                <div className="p-6 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50 hover:border-[color:var(--color-violet)]/40 transition-colors">
                  <h3 className="font-display font-semibold text-lg mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-[color:var(--color-pink)] mb-4">
                    <span>{exp.org}</span>
                    {exp.location && (
                      <span className="inline-flex items-center gap-1 text-[color:var(--color-muted)]">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((p) => (
                      <li key={p} className="text-sm text-[color:var(--color-muted)] leading-relaxed flex gap-2">
                        <span className="text-[color:var(--color-violet)] mt-1.5">▹</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
