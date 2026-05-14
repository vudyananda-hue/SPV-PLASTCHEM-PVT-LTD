import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight, FlaskConical } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products & Solutions', path: '/products' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { user } = useAuth()
  const location = useLocation()

  /* Track scroll position */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Close mobile menu on route change */
  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname])

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const isHome = location.pathname === '/'
  const showTransparent = isHome && !isScrolled

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-lg shadow-neutral-900/5'
        }`}
      >
        <div className="container-wide mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" id="logo-link">
              <img 
                src="/logo.jpg" 
                alt="Logo" 
                className="h-10 md:h-11 w-auto object-contain rounded-lg border-2 border-white/20 shadow-sm group-hover:border-accent-500/50 transition-all duration-300" 
              />
              <div className="flex flex-col animate-slide-right">
                <span 
                  className={`text-base md:text-lg font-bold leading-none tracking-tight transition-all duration-300 group-hover:text-accent-500 ${
                    showTransparent ? 'text-white' : 'text-primary-900'
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  SPV Plastchem
                </span>
                <span 
                  className={`text-[0.6rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                    showTransparent ? 'text-neutral-300' : 'text-neutral-500'
                  }`}
                >
                  (Pvt) Ltd
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? showTransparent
                          ? 'text-accent-400 bg-white/10'
                          : 'text-accent-600 bg-accent-50'
                        : showTransparent
                        ? 'text-neutral-200 hover:text-white hover:bg-white/10'
                        : 'text-neutral-600 hover:text-primary-900 hover:bg-neutral-50'
                    }`
                  }
                  id={`nav-${link.path.replace('/', '') || 'home'}`}
                >
                  {link.label}
                </NavLink>
              ))}

              {user && (
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-accent-600 bg-accent-50'
                        : showTransparent
                        ? 'text-neutral-200 hover:text-white hover:bg-white/10'
                        : 'text-neutral-600 hover:text-primary-900 hover:bg-neutral-50'
                    }`
                  }
                  id="nav-admin"
                >
                  Admin
                </NavLink>
              )}

              <Link
                to="/contact"
                className="ml-3 btn-primary text-sm !py-2 !px-5"
                id="nav-cta"
              >
                Get a Quote
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                showTransparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 lg:hidden ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-drawer"
      >
        <div className="flex items-center justify-between p-5 border-b border-neutral-100">
          <span className="font-bold text-primary-900" style={{ fontFamily: 'var(--font-heading)' }}>
            Menu
          </span>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="p-1.5 rounded-lg text-neutral-500 hover:bg-neutral-100"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-accent-600 bg-accent-50'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-primary-900'
                }`
              }
            >
              <ChevronRight className="w-4 h-4 text-neutral-300" />
              {link.label}
            </NavLink>
          ))}

          {user && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-accent-600 bg-accent-50'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-primary-900'
                }`
              }
            >
              <ChevronRight className="w-4 h-4 text-neutral-300" />
              Admin Panel
            </NavLink>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-neutral-100">
          <Link
            to="/contact"
            className="btn-primary w-full justify-center text-sm"
          >
            Get a Quote
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  )
}
