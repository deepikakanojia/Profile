import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

export default function PageHero({
  icon: Icon,
  eyebrow,
  title,
  description,
}: {
  icon: LucideIcon
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[40rem] h-64 rounded-full bg-gradient-to-r from-[color:var(--color-violet)] to-[color:var(--color-pink)] opacity-20 blur-[100px] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="w-12 h-12 rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)] flex items-center justify-center mb-6">
            <Icon size={22} className="text-[color:var(--color-violet)]" />
          </div>
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-[color:var(--color-pink)] mb-3">
            {eyebrow}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">{title}</h1>
          {description && (
            <p className="mt-5 text-lg md:text-xl text-[color:var(--color-muted)] max-w-2xl">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
