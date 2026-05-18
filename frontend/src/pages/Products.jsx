import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Send, X, ChevronRight } from 'lucide-react'
import SEOHead from '../components/common/SEOHead'
import { productCategories } from '../data/content'
import { api } from '../lib/api'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'all'
  const [inquiryProduct, setInquiryProduct] = useState(null)
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', company: '', message: '' })
  const [inquirySubmitted, setInquirySubmitted] = useState(false)
  const [inquiryLoading, setInquiryLoading] = useState(false)
  const [inquiryError, setInquiryError] = useState(null)

  const handleCategoryChange = (slug) => {
    if (slug === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: slug })
    }
  }

  const filteredCategories = activeCategory === 'all' ? productCategories : productCategories.filter((c) => c.slug === activeCategory)

  const handleInquirySubmit = async (e) => {
    e.preventDefault()
    setInquiryLoading(true)
    setInquiryError(null)
    try {
      await api.submitInquiry({
        name: inquiryForm.name,
        email: inquiryForm.email,
        company: inquiryForm.company || undefined,
        product_category: inquiryProduct?.name || undefined,
        message: inquiryForm.message
      })
      setInquirySubmitted(true)
      setTimeout(() => { setInquirySubmitted(false); setInquiryProduct(null); setInquiryForm({ name: '', email: '', company: '', message: '' }) }, 3000)
    } catch (err) {
      setInquiryError(err.message || 'Failed to send inquiry. Please try again.')
    } finally {
      setInquiryLoading(false)
    }
  }

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

      {/* Category Tabs */}
      <section className="bg-white border-b border-neutral-100 sticky top-[72px] md:top-[80px] z-30">
        <div className="container-wide mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            <button onClick={() => handleCategoryChange('all')} className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeCategory === 'all' ? 'bg-primary-900 text-white' : 'text-neutral-500 hover:bg-neutral-50'}`} id="tab-all">All Products</button>
            {productCategories.map((cat) => (
              <button key={cat.slug} onClick={() => handleCategoryChange(cat.slug)} className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat.slug ? 'bg-primary-900 text-white' : 'text-neutral-500 hover:bg-neutral-50'}`} id={`tab-${cat.slug}`}>{cat.name}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide mx-auto">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <div key={cat.id} className="mb-16 last:mb-0" id={`category-${cat.id}`}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${cat.color}15`, color: cat.color }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900" style={{ fontFamily: 'var(--font-heading)' }}>{cat.name}</h2>
                    <p className="text-sm text-neutral-500">{cat.shortDescription}</p>
                  </div>
                </div>

                {/* Category Description */}
                <div className="bg-white rounded-xl p-6 border border-neutral-100 mb-6">
                  <p className="text-neutral-600 leading-relaxed mb-4">{cat.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-800 mb-2">Key Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.applications.map((app, i) => (
                        <span key={i} className="px-3 py-1 bg-neutral-50 text-neutral-600 text-xs rounded-full border border-neutral-200">{app}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.products.map((product, pi) => (
                    <div key={pi} className="bg-white rounded-xl p-6 border border-neutral-100 card-hover">
                      <h3 className="text-lg font-bold text-neutral-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{product.name}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed mb-4">{product.description}</p>
                      {product.specs && (
                        <div className="bg-neutral-50 rounded-lg p-3 mb-4">
                          <h5 className="text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Specifications</h5>
                          {Object.entries(product.specs).map(([key, val]) => (
                            <div key={key} className="flex justify-between text-xs py-1 border-b border-neutral-100 last:border-0">
                              <span className="text-neutral-500">{key}</span>
                              <span className="font-medium text-neutral-700">{val}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <button onClick={() => setInquiryProduct(product)} className="w-full py-2.5 rounded-lg border-2 border-accent-500/20 text-accent-600 text-sm font-semibold hover:bg-accent-50 hover:border-accent-500/40 transition-all flex items-center justify-center gap-2">
                        Request Info <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Inquiry Modal */}
      {inquiryProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setInquiryProduct(null)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setInquiryProduct(null)} className="absolute top-4 right-4 p-1.5 rounded-lg text-neutral-400 hover:bg-neutral-100" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-neutral-900 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Product Inquiry</h3>
            <p className="text-sm text-neutral-500 mb-6">Inquiring about: <strong>{inquiryProduct.name}</strong></p>

            {inquirySubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="text-green-600 font-semibold mb-1">Inquiry Submitted!</div>
                <p className="text-sm text-green-500">Our team will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3">
                {inquiryError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                    {inquiryError}
                  </div>
                )}
                <input type="text" placeholder="Your Name" required value={inquiryForm.name} onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none" />
                <input type="email" placeholder="Email" required value={inquiryForm.email} onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none" />
                <input type="text" placeholder="Company (optional)" value={inquiryForm.company} onChange={(e) => setInquiryForm({ ...inquiryForm, company: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none" />
                <textarea placeholder="Your message..." required rows={3} value={inquiryForm.message} onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none resize-none" />
                <button type="submit" disabled={inquiryLoading} className="btn-primary w-full justify-center disabled:opacity-50">
                  {inquiryLoading ? 'Sending...' : <>Send Inquiry <Send className="w-4 h-4" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
