import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import BrandLogo from '../common/BrandLogo'
import { principals } from '../../data/content'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export default function ProductHighlights() {
  const [ref, isVisible] = useIntersectionObserver()
  const displayedPrincipals = principals.filter(p => p.id !== 'angus');

  return (
    <section id="product-highlights" className="section-padding bg-neutral-50" ref={ref}>
      <div className="container-wide mx-auto">
        <div className={`scroll-animate scroll-cinematic-up ${isVisible ? 'is-visible' : ''}`}>
          <SectionTitle
            subtitle="Global Principals"
            title="Represented Partners & Brands"
            description="We act as an Indenting agent / Marketing office in Sri Lanka for key global companies, connecting them directly with local manufacturers."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayedPrincipals.slice(0, 6).map((principal, i) => {
            return (
              <Link
                key={principal.id}
                to={`/products?category=${principal.slug}`}
                className={`group bg-white rounded-xl p-6 card-pro-hover border border-neutral-100 flex flex-col justify-between scroll-animate scroll-cinematic-up ${isVisible ? 'is-visible' : ''}`}
                id={`product-card-${principal.id}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div>
                  <div className="h-14 flex items-center justify-start mb-5 transition-transform group-hover:scale-105 origin-left">
                    <BrandLogo slug={principal.slug} className="h-10 max-w-full object-contain" />
                  </div>
                  <h3
                    className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-accent-600 transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {principal.name}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                    {principal.shortDescription}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500 group-hover:gap-2.5 transition-all mt-4">
                  View Scope & Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayedPrincipals.slice(6).map((principal, i) => {
            return (
              <Link
                key={principal.id}
                to={`/products?category=${principal.slug}`}
                className={`group bg-white rounded-xl p-6 card-pro-hover border border-neutral-100 flex flex-col justify-between scroll-animate scroll-cinematic-up ${isVisible ? 'is-visible' : ''}`}
                id={`product-card-${principal.id}`}
                style={{ transitionDelay: `${(i + 6) * 100}ms` }}
              >
                <div>
                  <div className="h-14 flex items-center justify-start mb-5 transition-transform group-hover:scale-105 origin-left">
                    <BrandLogo slug={principal.slug} className="h-10 max-w-full object-contain" />
                  </div>
                  <h3
                    className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-accent-600 transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {principal.name}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                    {principal.shortDescription}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500 group-hover:gap-2.5 transition-all mt-4">
                  View Scope & Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>

        <div className={`text-center scroll-animate scroll-cinematic-zoom ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '800ms' }}>
          <Link to="/products" className="btn-primary btn-shimmer text-base !py-3.5 !px-8" id="view-all-products">
            View All Principals & Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
