import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SEOHead from '../components/common/SEOHead'
import { industries } from '../data/content'

export default function Industries() {
  return (
    <>
      <SEOHead title="Industries Served" description="We serve rubber, paint & coatings, construction, and industrial manufacturing sectors with specialty chemical solutions." path="/industries" />

      {/* Page Header */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1B2D4A 100%)' }}>
        <div className="container-wide mx-auto px-4 sm:px-6">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-400 mb-3">Industries We Serve</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>Sector Expertise</h1>
          <p className="text-neutral-300 text-lg max-w-2xl">Tailored chemical solutions for diverse industrial applications, backed by deep technical knowledge.</p>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            const isEven = i % 2 === 0
            return (
              <div key={industry.id} className={`grid lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${!isEven ? 'lg:direction-rtl' : ''}`} id={`industry-${industry.id}`}>
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 rounded-xl bg-accent-500/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-accent-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{industry.name}</h2>
                  <p className="text-neutral-500 leading-relaxed mb-6">{industry.description}</p>
                  <h4 className="text-sm font-semibold text-neutral-800 uppercase tracking-wider mb-3">Our Solutions</h4>
                  <ul className="space-y-2.5 mb-6">
                    {industry.solutions.map((sol, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                        <span className="text-sm text-neutral-600">{sol}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors">
                    View Related Products <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`relative rounded-2xl overflow-hidden min-h-[300px] ${!isEven ? 'lg:order-1' : ''}`} style={{ background: `linear-gradient(135deg, ${i % 2 === 0 ? '#0A1628, #1B2D4A' : '#111D38, #0D162E'})` }}>
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <Icon className="w-16 h-16 text-white/10 mb-4" />
                    <div className="w-12 h-1 bg-accent-500 rounded-full mb-3" />
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>{industry.name}</h3>
                    <p className="text-sm text-neutral-400 mt-1" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{industry.solutions.length} solution areas</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1B2D4A 100%)' }}>
        <div className="container-wide mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>Need a Specific Sourcing Solution?</h2>
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">We work closely with our global partners and principals to secure the exact raw materials and machinery required for your custom manufacturing specifications.</p>
          <Link to="/contact" className="btn-primary text-base !py-3 !px-8">
            Discuss Your Requirements <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
