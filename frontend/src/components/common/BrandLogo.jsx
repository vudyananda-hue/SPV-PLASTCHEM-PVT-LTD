import React from 'react'

export default function BrandLogo({ slug, className = "h-8 w-auto" }) {
  switch (slug) {
    case 'dow-chemical':
      return (
        <svg viewBox="0 0 160 80" className={className}>
          {/* Dow Red Diamond Logo */}
          <polygon points="75,10 140,40 75,70 10,40" fill="#E50000" />
          <text x="75" y="52" fontFamily="Georgia, 'Times New Roman', serif" fontSize="34" fontWeight="bold" fill="white" textAnchor="middle">DOW</text>
          <text x="145" y="65" fontFamily="Arial, sans-serif" fontSize="12" fill="#E50000">®</text>
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
        <svg viewBox="0 0 180 60" className={className}>
          {/* DuPont Modern Logo */}
          <path d="M 28 18 Q 5 30 28 42 Q 22 30 28 18 Z" fill="#E50000" />
          <text x="90" y="42" fontFamily="Impact, Arial Black, sans-serif" fontSize="36" fill="#E50000" textAnchor="middle" letterSpacing="1">DUPONT</text>
          <path d="M 152 18 Q 175 30 152 42 Q 158 30 152 18 Z" fill="#E50000" />
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
        <svg viewBox="0 0 255 65" className={className}>
          <g fill="#8C1974">
            {/* Evonik Stylized 'e' Symbol */}
            <path d="M 38 28 H 12 A 18 18 0 1 1 42 43.4" fill="none" stroke="#8C1974" strokeWidth="8" strokeLinecap="butt" />
            
            {/* EVONIK Custom Typography */}
            <path d="M 95 15 H 75 Q 70 15 70 20 V 40 Q 70 45 75 45 H 95 V 37 H 78 V 34 H 90 V 26 H 78 V 23 H 95 Z" />
            <path d="M 98 15 H 107 L 115 35 L 123 15 H 132 L 120 45 H 110 Z" />
            <path d="M 142 15 H 152 Q 160 15 160 20 V 40 Q 160 45 152 45 H 142 Q 134 45 134 40 V 20 Q 134 15 142 15 Z M 142 23 V 37 H 152 V 23 H 142 Z" />
            <path d="M 168 15 H 176 L 189 36 V 15 H 197 V 45 H 189 L 176 24 V 45 H 168 Z" />
            <path d="M 205 15 H 213 V 45 H 205 Z" />
            <path d="M 218 15 H 226 V 26 L 238 15 H 248 L 234 29 L 249 45 H 238 L 226 32 V 45 H 218 Z" />
          </g>
          <text x="249" y="58" fontFamily="Helvetica, Arial, sans-serif" fontSize="10" fontWeight="900" fill="#8C1974" letterSpacing="1" textAnchor="end">POWER TO CREATE</text>
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
        <svg viewBox="0 0 220 50" className={className}>
          {/* Yong Fong Rubber Logo */}
          <rect width="220" height="50" rx="4" fill="#14532D" />
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
