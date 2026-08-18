import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Music, Presentation, Trophy } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { hobbies, positions, recognition, workshops, type ListItem } from '../data/content'

type Tab = 'positions' | 'workshops' | 'hobbies'

const tabs: { id: Tab; label: string; icon: typeof Award }[] = [
  { id: 'positions', label: 'Leadership', icon: Award },
  { id: 'workshops', label: 'Workshops & Conferences', icon: Presentation },
  { id: 'hobbies', label: 'Beyond Work', icon: Music },
]

function Item({ item }: { item: ListItem }) {
  return (
    <div className="p-5 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50">
      <h4 className="font-medium">{item.title}</h4>
      {item.org && <p className="text-sm text-[color:var(--color-pink)] mt-0.5">{item.org}</p>}
      {item.period && <p className="text-xs text-[color:var(--color-muted)] mt-0.5">{item.period}</p>}
      {item.description && <p className="text-sm text-[color:var(--color-muted)] mt-2 leading-relaxed">{item.description}</p>}
    </div>
  )
}

export default function More() {
  const [tab, setTab] = useState<Tab>('positions')

  return (
    <section id="more" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading eyebrow="More" title="Leadership, learning & life outside work" />

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                tab === id ? 'text-white' : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]'
              }`}
            >
              {tab === id && (
                <motion.span
                  layoutId="more-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[color:var(--color-violet)] to-[color:var(--color-pink)]"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <Icon size={16} className="relative" />
              <span className="relative">{label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {tab === 'positions' && positions.map((p) => <Item key={p.title} item={p} />)}
            {tab === 'workshops' && workshops.map((w) => <Item key={w.title} item={w} />)}
            {tab === 'hobbies' && hobbies.map((h) => <Item key={h.title} item={h} />)}
          </motion.div>
        </AnimatePresence>

        {recognition.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 p-6 rounded-2xl border border-[color:var(--color-border)] bg-gradient-to-r from-[color:var(--color-violet)]/10 to-[color:var(--color-pink)]/10 flex items-center gap-4"
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
  )
}
