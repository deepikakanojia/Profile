import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-12 md:mb-16 max-w-2xl"
    >
      <span className="inline-block text-sm font-medium tracking-widest uppercase text-[color:var(--color-pink)] mb-3">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-[color:var(--color-muted)] text-lg">{description}</p>}
    </motion.div>
  )
}
