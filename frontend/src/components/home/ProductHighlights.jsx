import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import BrandLogo from '../common/BrandLogo'
import { principals } from '../../data/content'

export default function ProductHighlights() {
  return (
    <section id="product-highlights" className="section-padding bg-neutral-50">
      <div className="container-wide mx-auto">
        <SectionTitle
          subtitle="Global Principals"
          title="Represented Partners & Brands"
          description="We act as an Indenting agent / Marketing office in Sri Lanka for key global companies, connecting them directly with local manufacturers."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {principals.slice(0, 6).map((principal) => {
            return (
              <Link
                key={principal.id}
                to={`/products?category=${principal.slug}`}
                className="group bg-white rounded-xl p-6 card-hover border border-neutral-100 flex flex-col justify-between"
                id={`product-card-${principal.id}`}
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
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {principals.slice(6).map((principal) => {
            return (
              <Link
                key={principal.id}
                to={`/products?category=${principal.slug}`}
                className="group bg-white rounded-xl p-6 card-hover border border-neutral-100 flex flex-col justify-between"
                id={`product-card-${principal.id}`}
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
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Link to="/products" className="btn-primary" id="view-all-products">
            View All Principals & Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
