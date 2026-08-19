import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { nav } from '../data/content'

function ProfileDropdown({ item, isActive }: { item: Extract<(typeof nav)[number], { children: unknown }>; isActive: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <li ref={ref} className="relative shrink-0">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={`relative flex items-center gap-1 px-2.5 py-2 text-xs font-medium whitespace-nowrap rounded-full transition-colors ${
          isActive ? 'text-[color:var(--color-ink)]' : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]'
        }`}
      >
        {isActive && (
          <motion.span
            layoutId="nav-pill"
            className="absolute inset-0 rounded-full bg-[color:var(--color-surface-2)]"
            transition={{ type: 'spring', duration: 0.5 }}
          />
        )}
        <span className="relative">{item.label}</span>
        <ChevronDown size={13} className={`relative transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full mt-2 min-w-[15rem] rounded-2xl border border-[color:var(--color-border)] bg-[#12121f]/95 backdrop-blur-lg p-1.5 shadow-xl shadow-black/40"
          >
            {item.children.map((child) => (
              <li key={child.path}>
                <NavLink
                  to={child.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive: childActive }) =>
                    `block px-3.5 py-2.5 text-sm rounded-xl transition-colors ${
                      childActive
                        ? 'text-[color:var(--color-ink)] bg-[color:var(--color-surface-2)]'
                        : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)] hover:bg-[color:var(--color-surface-2)]/60'
                    }`
                  }
                >
                  {child.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false)
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

        <ul className="hidden lg:flex items-center gap-0.5 min-w-0">
          {nav.map((item) =>
            item.children ? (
              <ProfileDropdown
                key={item.label}
                item={item}
                isActive={item.children.some((c) => c.path === location.pathname)}
              />
            ) : (
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
            )
          )}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 shrink-0"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-[#0b0b14]/95 backdrop-blur-lg border-b border-[color:var(--color-border)]">
          <ul className="section-container flex flex-col py-4 gap-1">
            {nav.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button
                    onClick={() => setMobileProfileOpen((o) => !o)}
                    className="w-full flex items-center justify-between px-2 py-3 text-[color:var(--color-muted)]"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} className={`transition-transform ${mobileProfileOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileProfileOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4"
                      >
                        {item.children.map((child) => (
                          <li key={child.path}>
                            <NavLink
                              to={child.path}
                              className={({ isActive }) =>
                                `block px-2 py-2.5 text-sm transition-colors ${
                                  isActive ? 'text-[color:var(--color-ink)] font-medium' : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]'
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
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
              )
            )}
          </ul>
        </div>
      )}
    </header>
  )
}
