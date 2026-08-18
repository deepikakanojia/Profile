import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[color:var(--color-muted)]">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React, Tailwind CSS & Framer Motion.</p>
      </div>
    </footer>
  )
}
