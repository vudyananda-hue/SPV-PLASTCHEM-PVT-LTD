import { Link } from 'react-router-dom'
import { FlaskConical, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { company } from '../../data/content'

/* Inline SVG brand icons — lucide-react doesn't include brand icons */
const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const WhatsappIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.004 0C5.378 0 .004 5.374.004 12c0 2.113.547 4.178 1.59 5.992L0 24l6.17-1.618C7.88 23.314 9.9 23.856 12 23.856c6.626 0 12-5.375 12-12s-5.374-12-11.996-12zm6.304 17.078c-.26.732-1.288 1.332-1.785 1.393-.47.057-.932.186-2.998-.67-2.64-1.092-4.305-3.8-4.436-3.98-.13-.178-1.077-1.435-1.077-2.738 0-1.302.68-1.942.92-2.203.24-.26.522-.326.696-.326.173 0 .347.003.5.01.164.008.384-.06.6.474.223.55.76 1.854.826 1.987.067.132.112.285.023.46-.089.176-.134.307-.267.46-.134.155-.282.347-.402.467-.134.133-.275.277-.116.55.158.272.7 1.155 1.503 1.868.803.714 1.48 1.144 1.69 1.252.21.109.332.092.455-.05.123-.142.53-.615.67-.822.143-.207.286-.176.48-.102.193.073 1.22.576 1.43.684.21.109.35.163.4.25.05.088.05.512-.21 1.244z"/>
  </svg>
)

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' },
]

const productLinks = [
  { label: 'PU Additives', path: '/products?category=pu-additives' },
  { label: 'Surface Finishes', path: '/products?category=surface-finishes' },
  { label: 'Construction Chemicals', path: '/products?category=construction-chemicals' },
  { label: 'Reclaim Rubber', path: '/products?category=reclaim-rubber' },
  { label: 'Bonding Adhesives', path: '/products?category=rubber-to-metal-bonding' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/s-p-v-plastchem-pvt-ltd/?originalSubdomain=lk', Icon: LinkedinIcon },
  { label: 'Facebook', href: 'https://web.facebook.com/spvplastchempvtltd5887/?_rdc=1&_rdr#', Icon: FacebookIcon },
  { label: 'WhatsApp', href: 'https://wa.me/94777317030', Icon: WhatsappIcon },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="site-footer">
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900">
        <div className="container-wide mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
              >
                Ready to Partner with Us?
              </h3>
              <p className="text-neutral-300 text-base">
                Let&apos;s discuss how our chemical solutions can support your manufacturing needs.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-primary text-base !py-3 !px-8 whitespace-nowrap"
              id="footer-cta"
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-primary-900 text-neutral-300">
        <div className="container-wide mx-auto px-4 sm:px-6 py-14 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <img 
                  src="/logo.jpg" 
                  alt="Logo" 
                  className="h-12 w-auto object-contain rounded-lg border-2 border-white/10 shadow-lg" 
                />
                <div className="flex flex-col">
                  <span 
                    className="text-white font-bold text-lg leading-none tracking-tight group-hover:text-accent-400 transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    SPV Plastchem
                  </span>
                  <span className="text-neutral-500 text-[0.6rem] font-bold tracking-[0.2em] uppercase">
                    (Pvt) Ltd
                  </span>
                </div>
              </Link>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                Sri Lanka&apos;s trusted industrial chemical manufacturing company delivering
                specialty formulations and technical solutions across multiple industries.
              </p>
              <p className="text-xs font-semibold text-accent-400 uppercase tracking-widest mb-6">
                We Drive You To The Innovation
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-primary-800 flex items-center justify-center text-neutral-400 hover:bg-accent-500 hover:text-white transition-all duration-200"
                    aria-label={s.label}
                  >
                    <s.Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-white font-semibold text-sm mb-5 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-neutral-400 hover:text-accent-400 transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4
                className="text-white font-semibold text-sm mb-5 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Products
              </h4>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-neutral-400 hover:text-accent-400 transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-white font-semibold text-sm mb-5 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <a
                    href={`tel:${company.phone.replace(/\s/g, '')}`}
                    className="text-sm text-neutral-400 hover:text-accent-400 transition-colors"
                  >
                    {company.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <a
                    href={`mailto:${company.email}`}
                    className="text-sm text-neutral-400 hover:text-accent-400 transition-colors"
                  >
                    {company.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-neutral-400">{company.fullAddress}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-primary-800">
          <div className="container-wide mx-auto px-4 sm:px-6 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-neutral-500">
                &copy; {currentYear} {company.name}. All rights reserved.
              </p>
              <div className="flex gap-5">
                <span className="text-xs text-neutral-500">Privacy Policy</span>
                <span className="text-xs text-neutral-500">Terms of Use</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
