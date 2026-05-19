import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { company } from '../../data/content'

const highlights = [
  'Global raw materials indenting',
  'Industrial machinery representation',
  'Experienced leadership (25+ years)',
  'Active development & promotion',
]

export default function CompanyIntro() {
  return (
    <section id="company-intro" className="section-padding bg-white industrial-texture">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-500 mb-3">
              About Our Company
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Leading Plastics & Chemical Indenting Agent Since {company.founded}
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed mb-6">
              {company.description}
            </p>
            <p className="text-neutral-500 text-base leading-relaxed mb-8">
              Under the leadership of Chairman / Managing Director Dr. Vudyananda Sellahewa, who has experience working with Dow chemical products and other multinationals since 1997, we connect Sri Lankan manufacturers with the world's leading chemical and machinery principals.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                  <span className="text-sm font-medium text-neutral-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="btn-primary"
              id="intro-learn-more"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — Visual Card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-800 to-primary-900 p-8 md:p-10 min-h-[400px] flex flex-col justify-end">
              {/* Decorative background pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
                    linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
                  `,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                }}
              />

              {/* Floating stat cards */}
              <div className="absolute top-6 right-6 glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
                  25+
                </div>
                <div className="text-xs text-neutral-300 uppercase tracking-wider">Years Exp</div>
              </div>

              <div className="absolute top-1/3 left-6 glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-accent-400" style={{ fontFamily: 'var(--font-heading)' }}>
                  11
                </div>
                <div className="text-xs text-neutral-300 uppercase tracking-wider">Principals</div>
              </div>

              {/* Bottom text */}
              <div className="relative z-10">
                <div className="w-12 h-1 bg-accent-500 rounded-full mb-4" />
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
                >
                  Global Indenting Partners
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Acting as the Marketing Office in Sri Lanka for key multinational enterprises, ensuring a reliable supply of raw materials and machinery.
                </p>
              </div>
            </div>

            {/* Decorative accent bar */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-accent-500/10 rounded-2xl -z-10" />
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-primary-500/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
