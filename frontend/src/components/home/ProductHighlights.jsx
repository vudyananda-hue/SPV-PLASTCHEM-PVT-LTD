import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import { productCategories } from '../../data/content'

export default function ProductHighlights() {
  return (
    <section id="product-highlights" className="section-padding bg-neutral-50">
      <div className="container-wide mx-auto">
        <SectionTitle
          subtitle="Our Products"
          title="Specialty Chemical Solutions"
          description="Comprehensive product range engineered for performance across rubber, construction, coatings, and industrial manufacturing sectors."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {productCategories.slice(0, 3).map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.id}
                to={`/products?category=${cat.slug}`}
                className="group bg-white rounded-xl p-6 card-hover border border-neutral-100"
                id={`product-card-${cat.id}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3
                  className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-accent-600 transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {cat.name}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                  {cat.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500 group-hover:gap-2.5 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {productCategories.slice(3).map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.id}
                to={`/products?category=${cat.slug}`}
                className="group bg-white rounded-xl p-6 card-hover border border-neutral-100"
                id={`product-card-${cat.id}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3
                  className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-accent-600 transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {cat.name}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                  {cat.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500 group-hover:gap-2.5 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Link to="/products" className="btn-primary" id="view-all-products">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
