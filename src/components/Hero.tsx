import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { profile, stats } from '../data/content'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
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
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[color:var(--color-violet)] to-[color:var(--color-pink)] font-medium text-white shadow-lg shadow-[color:var(--color-violet)]/20 hover:shadow-xl hover:shadow-[color:var(--color-pink)]/30 hover:-translate-y-0.5 transition-all"
            >
              <Mail size={18} />
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[color:var(--color-border)] hover:border-[color:var(--color-violet)]/60 hover:bg-[color:var(--color-surface)] font-medium transition-all"
            >
              View projects
            </a>
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

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 text-[color:var(--color-muted)]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}
