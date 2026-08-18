import { motion } from 'framer-motion'
import { GraduationCap, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { education, profile, skills } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading eyebrow="About" title="Designing technology that helps people learn" />

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-lg text-[color:var(--color-muted)] leading-relaxed">{profile.bio}</p>
            <p className="text-lg text-[color:var(--color-muted)] leading-relaxed">
              I volunteer to support girls' participation in education, sports, and the arts, and outside of
              research I'm usually composing music, sketching, or tending to my (many) plants.
            </p>

            <div className="flex items-start gap-3 pt-4 p-4 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50">
              <GraduationCap className="text-[color:var(--color-violet)] shrink-0 mt-1" size={22} />
              <div>
                {education.map((e) => (
                  <div key={e.degree}>
                    <div className="font-medium">{e.degree}</div>
                    <div className="text-sm text-[color:var(--color-muted)]">{e.school}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 p-6 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-[color:var(--color-pink)]" />
              <h3 className="font-display font-semibold">Skills & Focus Areas</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.technical.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-full bg-[color:var(--color-surface-2)] border border-[color:var(--color-border)] text-[color:var(--color-ink)]/90"
                >
                  {s}
                </span>
              ))}
            </div>
            <h4 className="text-sm font-medium text-[color:var(--color-muted)] mb-3">Working style</h4>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-[color:var(--color-violet)]/10 text-[color:var(--color-violet)]">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
