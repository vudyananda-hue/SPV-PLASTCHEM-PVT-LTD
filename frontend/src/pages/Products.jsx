import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import SEOHead from '../components/common/SEOHead'
import { productCategories } from '../data/content'
import BrandLogo from '../components/common/BrandLogo'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const CategorySection = ({ cat }) => {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <div ref={ref} className={`mb-16 last:mb-0 scroll-animate scroll-fade-in-up ${isVisible ? 'is-visible' : ''}`} id={`category-${cat.id}`}>
      {/* Category Header */}
      {cat.id !== 'angus' && (
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 flex items-center justify-start transition-transform hover:scale-105 origin-left">
            <BrandLogo slug={cat.slug} className="h-10 w-auto object-contain" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900" style={{ fontFamily: 'var(--font-heading)' }}>{cat.name}</h2>
            <p className="text-sm text-neutral-500">{cat.shortDescription}</p>
          </div>
        </div>
      )}

      {/* Category Description */}
      <div className="bg-white rounded-xl p-6 border border-neutral-100 mb-6">
        <p className="text-neutral-600 leading-relaxed mb-4">{cat.description}</p>
        <div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cat.products.map((product, pi) => (
          <div 
            key={pi} 
            className={`bg-white rounded-xl p-6 border border-neutral-100 card-pro-hover scroll-animate scroll-zoom-in ${isVisible ? 'is-visible' : ''}`}
            style={{ animationDelay: `${pi * 75}ms` }}
          >
            <h3 className="text-lg font-bold text-neutral-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{product.name}</h3>
            <p className="text-sm text-neutral-500 leading-relaxed mb-4">{product.description}</p>
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="bg-neutral-50 rounded-lg p-3 mb-4">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between text-xs py-1 border-b border-neutral-100 last:border-0">
                    <span className="text-neutral-500">{key}</span>
                    <span className="font-medium text-neutral-700">{val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'all'
  const [searchQuery, setSearchQuery] = useState('')

  const handleCategoryChange = (slug) => {
    if (slug === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: slug })
    }
  }

  const filteredCategories = activeCategory === 'all' ? productCategories : productCategories.filter((c) => c.slug === activeCategory)

  const displayedCategories = filteredCategories.map(cat => {
    if (!searchQuery) return cat;
    
    const lowerQuery = searchQuery.toLowerCase();
    const matchingProducts = cat.products.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.description.toLowerCase().includes(lowerQuery)
    );
    
    if (cat.name.toLowerCase().includes(lowerQuery) || cat.description.toLowerCase().includes(lowerQuery)) {
      return cat;
    }
    
    return { ...cat, products: matchingProducts };
  }).filter(cat => cat.products.length > 0);


  return (
    <>
      <SEOHead title="Products & Solutions" description="Explore our comprehensive range of industrial chemicals — PU additives, surface finishes, construction chemicals, reclaim rubber, and bonding adhesives." path="/products" />

      {/* Page Header */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1B2D4A 100%)' }}>
        <div className="container-wide mx-auto px-4 sm:px-6">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-400 mb-3">Products & Solutions</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>Our Product Range</h1>
          <p className="text-neutral-300 text-lg max-w-2xl">Specialty chemical formulations engineered for performance across multiple industrial sectors.</p>
        </div>
      </section>

      {/* Category Tabs & Search */}
      <section className="bg-white border-b border-neutral-100 sticky top-[72px] md:top-[80px] z-30 shadow-sm">
        <div className="container-wide mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              <button onClick={() => handleCategoryChange('all')} className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeCategory === 'all' ? 'bg-primary-900 text-white' : 'text-neutral-500 hover:bg-neutral-50'}`} id="tab-all">All Products</button>
              {productCategories.filter(c => c.id !== 'angus').map((cat) => (
                <button key={cat.slug} onClick={() => handleCategoryChange(cat.slug)} className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat.slug ? 'bg-primary-900 text-white' : 'text-neutral-500 hover:bg-neutral-50'}`} id={`tab-${cat.slug}`}>{cat.name}</button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64 shrink-0">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all"
              />
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-neutral-50 min-h-[50vh]">
        <div className="container-wide mx-auto">
          {displayedCategories.length > 0 ? (
            displayedCategories.map((cat) => (
              <CategorySection key={cat.id} cat={cat} />
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-neutral-500 text-lg">No products found matching "{searchQuery}".</p>
              <button onClick={() => setSearchQuery('')} className="mt-4 text-accent-600 font-medium hover:underline">Clear Search</button>
            </div>
          )}
        </div>
      </section>


    </>
  )
}
