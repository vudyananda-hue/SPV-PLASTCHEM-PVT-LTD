import React from 'react'

export default function BrandLogo({ slug, className = "h-8 w-auto" }) {
  switch (slug) {
    case 'dow-chemical':
      return (
        <svg viewBox="0 0 120 70" className={className}>
          {/* Dow Red Diamond Logo */}
          <polygon points="60,5 115,35 60,65 5,35" fill="#E11D48" />
          <text x="60" y="44" fontFamily="Arial Black, Impact, sans-serif" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">DOW</text>
        </svg>
      )
    case 'angus-chemical':
      return (
        <svg viewBox="0 0 180 50" className={className}>
          {/* Angus Blue Block Logo */}
          <rect width="180" height="50" rx="4" fill="#0F172A" />
          <rect x="5" y="5" width="85" height="40" fill="#2563EB" rx="2" />
          <text x="47" y="32" fontFamily="Helvetica, Arial, sans-serif" fontSize="22" fontWeight="900" fill="white" textAnchor="middle" letterSpacing="1">ANGUS</text>
          <text x="135" y="24" fontFamily="Helvetica, Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#94A3B8" textAnchor="middle">People. Chemistry.</text>
          <text x="135" y="36" fontFamily="Helvetica, Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#94A3B8" textAnchor="middle">Commitment.</text>
        </svg>
      )
    case 'dupont':
      return (
        <svg viewBox="0 0 120 60" className={className}>
          {/* DuPont Red Oval Logo */}
          <ellipse cx="60" cy="30" rx="55" ry="25" fill="none" stroke="#DC2626" strokeWidth="6" />
          <text x="60" y="38" fontFamily="Arial, Helvetica, sans-serif" fontSize="20" fontWeight="900" fill="#DC2626" textAnchor="middle" letterSpacing="-1">DUPONT</text>
        </svg>
      )
    case 'idex':
      return (
        <svg viewBox="0 0 100 40" className={className}>
          {/* IDEX Blue Italic Logo */}
          <text x="10" y="30" fontFamily="Impact, Arial Black, sans-serif" fontSize="28" fontWeight="bold" fontStyle="italic" fill="#1D4ED8">IDEX</text>
          <rect x="68" y="22" width="22" height="6" fill="#60A5FA" />
        </svg>
      )
    case 'evonik':
      return (
        <svg viewBox="0 0 150 45" className={className}>
          {/* Evonik Purple Logo */}
          <circle cx="20" cy="22" r="14" fill="none" stroke="#7C3AED" strokeWidth="4" />
          <circle cx="20" cy="22" r="6" fill="#7C3AED" />
          <text x="44" y="28" fontFamily="Helvetica, Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#7C3AED" letterSpacing="-0.5">EVONIK</text>
          <text x="44" y="38" fontFamily="Helvetica, Arial, sans-serif" fontSize="7" fontWeight="bold" fill="#A78BFA" letterSpacing="1">POWER TO CREATE</text>
        </svg>
      )
    case 'seiko':
      return (
        <svg viewBox="0 0 160 50" className={className}>
          {/* Seiko Instruments SII Logo */}
          <text x="10" y="30" fontFamily="Arial Black, Impact, sans-serif" fontSize="28" fontWeight="900" fill="#334155" letterSpacing="2">SII</text>
          <circle cx="85" cy="20" r="10" fill="#3B82F6" opacity="0.8" />
          <circle cx="95" cy="24" r="6" fill="#93C5FD" opacity="0.6" />
          <text x="10" y="44" fontFamily="Helvetica, Arial, sans-serif" fontSize="6" fontWeight="bold" fill="#64748B" letterSpacing="0.5">Seiko Instruments GmbH</text>
        </svg>
      )
    case 'soujanya':
      return (
        <svg viewBox="0 0 180 50" className={className}>
          {/* Soujanya Color India Logo */}
          <text x="10" y="28" fontFamily="Georgia, serif" fontSize="24" fontWeight="bold" fill="#BE185D" letterSpacing="1">SOUJANYA</text>
          <line x1="10" y1="34" x2="160" y2="34" stroke="#475569" strokeWidth="1" />
          <text x="10" y="44" fontFamily="Helvetica, Arial, sans-serif" fontSize="7" fontWeight="bold" fill="#64748B" letterSpacing="2">ADDING LIFE TO COLOR</text>
        </svg>
      )
    case 'yong-fong':
      return (
        <svg viewBox="0 0 180 50" className={className}>
          {/* Yong Fong Rubber Logo */}
          <rect width="180" height="50" rx="4" fill="#14532D" />
          <circle cx="25" cy="25" r="18" fill="none" stroke="#22C55E" strokeWidth="2" />
          <path d="M15,25 Q25,15 35,25 Q25,35 15,25 Z" fill="none" stroke="#22C55E" strokeWidth="1" />
          <line x1="25" y1="7" x2="25" y2="43" stroke="#22C55E" strokeWidth="1" />
          <line x1="7" y1="25" x2="43" y2="25" stroke="#22C55E" strokeWidth="1" />
          <text x="55" y="32" fontFamily="cursive, KaiTi, sans-serif" fontSize="20" fontWeight="bold" fill="#FACC15">永 峰</text>
          <text x="105" y="31" fontFamily="Impact, Arial Black, sans-serif" fontSize="20" fontWeight="bold" fill="white" letterSpacing="1">YONG FONG</text>
        </svg>
      )
    case 'malion':
      return (
        <svg viewBox="0 0 130 40" className={className}>
          {/* Malion Logo */}
          <text x="5" y="28" fontFamily="Arial Black, Impact, sans-serif" fontSize="26" fontWeight="900" fill="#0284C7" letterSpacing="1">MALI</text>
          <circle cx="95" cy="20" r="12" fill="none" stroke="#0284C7" strokeWidth="6" />
          <circle cx="103" cy="12" r="4" fill="#F59E0B" />
          <text x="110" y="28" fontFamily="Arial Black, Impact, sans-serif" fontSize="26" fontWeight="900" fill="#0284C7">N</text>
        </svg>
      )
    case 'micas':
      return (
        <svg viewBox="0 0 120 45" className={className}>
          {/* Micas Organics Logo */}
          <polygon points="10,35 25,10 40,35" fill="#3B82F6" />
          <polygon points="25,10 35,25 15,25" fill="#F59E0B" />
          <text x="50" y="28" fontFamily="Helvetica, Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#1E293B" letterSpacing="1">MICAS</text>
          <circle cx="95" cy="12" r="2" fill="#475569" />
          <text x="95" y="14" fontFamily="sans-serif" fontSize="6" fill="#475569">®</text>
        </svg>
      )
    case 'manali':
      return (
        <svg viewBox="0 0 140 40" className={className}>
          {/* Manali Petrochemicals */}
          <rect x="5" y="10" width="20" height="24" fill="#8B5CF6" rx="2" />
          <rect x="12" y="5" width="6" height="5" fill="#C084FC" />
          <line x1="15" y1="5" x2="15" y2="34" stroke="white" strokeWidth="2" />
          <text x="32" y="28" fontFamily="Arial, Helvetica, sans-serif" fontSize="20" fontWeight="900" fill="#6D28D9" letterSpacing="0.5">MANALI</text>
        </svg>
      )
    default:
      return (
        <div className="flex items-center gap-2 text-neutral-400">
          <span className="font-bold text-sm tracking-wider uppercase">{slug}</span>
        </div>
      )
  }
}
