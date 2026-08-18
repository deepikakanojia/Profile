import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { nav } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0b0b14]/80 backdrop-blur-lg border-b border-[color:var(--color-border)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[100rem] mx-auto px-4 md:px-6 flex items-center justify-between h-16 gap-3">
        <NavLink to="/" className="font-display font-semibold text-lg tracking-tight shrink-0">
          Deepika<span className="gradient-text">.</span>
        </NavLink>

        <ul className="hidden xl:flex items-center gap-0.5 min-w-0">
          {nav.map((item) => (
            <li key={item.path} className="shrink-0">
              <NavLink
                to={item.path}
                end={item.path === '/'}
                title={item.label}
                className={({ isActive }) =>
                  `relative block px-2.5 py-2 text-xs font-medium whitespace-nowrap rounded-full transition-colors ${
                    isActive ? 'text-[color:var(--color-ink)]' : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-[color:var(--color-surface-2)]"
                        transition={{ type: 'spring', duration: 0.5 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="xl:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 shrink-0"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="xl:hidden bg-[#0b0b14]/95 backdrop-blur-lg border-b border-[color:var(--color-border)]">
          <ul className="section-container flex flex-col py-4 gap-1">
            {nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `block px-2 py-3 transition-colors ${
                      isActive ? 'text-[color:var(--color-ink)] font-medium' : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
