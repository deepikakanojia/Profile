import { motion } from 'framer-motion'
import { HelpCircle, Mail } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import { profile } from '../data/content'

const topics = [
  'Admission process & eligibility for the IDP in Educational Technology',
  'What the coursework and research areas actually look like',
  'Life as an M.Tech student at IIT Bombay',
  'Choosing a thesis topic and finding an advisor',
  'Career paths after graduating — industry vs. research',
]

export default function Faq() {
  return (
    <PageTransition>
      <PageHero
        icon={HelpCircle}
        eyebrow="Prospective students"
        title="Queries about the M.Tech programme"
        description="Thinking about the Interdisciplinary Programme in Educational Technology at IIT Bombay? Happy to help."
      />

      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-5 gap-10"
          >
            <div className="md:col-span-3 space-y-4">
              <p className="text-lg text-[color:var(--color-muted)] leading-relaxed">
                As an alumna of the M.Tech Educational Technology programme at IIT Bombay, I get questions from
                prospective students fairly often — about admissions, the kind of research the department supports,
                and what day-to-day life in the programme is like. If you're considering applying, feel free to
                reach out directly.
              </p>
              <ul className="space-y-3 pt-2">
                {topics.map((t) => (
                  <li key={t} className="flex gap-3 text-[color:var(--color-muted)]">
                    <span className="text-[color:var(--color-violet)] mt-1">▹</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 p-6 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50 h-fit">
              <h3 className="font-display font-semibold mb-2">Have a question?</h3>
              <p className="text-sm text-[color:var(--color-muted)] mb-5 leading-relaxed">
                Send an email and I'll get back to you as soon as I can.
              </p>
              <a
                href={`mailto:${profile.email}?subject=Question about M.Tech Educational Technology at IIT Bombay`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[color:var(--color-violet)] to-[color:var(--color-pink)] font-medium text-white hover:-translate-y-0.5 transition-transform text-sm"
              >
                <Mail size={16} />
                Email {profile.name.split(' ')[0]}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
