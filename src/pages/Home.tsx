import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, Mail, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { education, profile, skills, stats } from '../data/content'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function Home() {
  return (
    <PageTransition>
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-16">
        <div className="section-container w-full">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/60 text-sm text-[color:var(--color-muted)] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[color:var(--color-cyan)] animate-pulse" />
              M.Tech, Educational Technology — IIT Bombay
            </motion.div>

            <motion.h1 variants={item} className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Hi, I'm <span className="gradient-text">{profile.name}</span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 text-xl md:text-2xl text-[color:var(--color-muted)] max-w-2xl font-display">
              {profile.tagline}
            </motion.p>

            <motion.p variants={item} className="mt-6 max-w-2xl text-base md:text-lg text-[color:var(--color-muted)] leading-relaxed">
              {profile.bio}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[color:var(--color-violet)] to-[color:var(--color-pink)] font-medium text-white shadow-lg shadow-[color:var(--color-violet)]/20 hover:shadow-xl hover:shadow-[color:var(--color-pink)]/30 hover:-translate-y-0.5 transition-all"
              >
                <Mail size={18} />
                Get in touch
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[color:var(--color-border)] hover:border-[color:var(--color-violet)]/60 hover:bg-[color:var(--color-surface)] font-medium transition-all"
              >
                View projects
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={item} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-bold font-display gradient-text">{s.value}</div>
                  <div className="text-sm text-[color:var(--color-muted)] mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative">
        <div className="section-container grid md:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-6"
          >
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-[color:var(--color-pink)] mb-1">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Designing technology that helps people learn
            </h2>
            <p className="text-lg text-[color:var(--color-muted)] leading-relaxed">
              I volunteer to support girls' participation in education, sports, and the arts, and outside of
              research I'm usually composing music, sketching, or tending to my (many) plants.
            </p>

            <div className="flex items-start gap-3 pt-2 p-4 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50">
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
      </section>
    </PageTransition>
  )
}
