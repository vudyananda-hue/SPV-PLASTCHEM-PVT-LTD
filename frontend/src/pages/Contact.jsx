import { useState } from 'react'
import { Send, Clock } from 'lucide-react'
import SEOHead from '../components/common/SEOHead'
import { contactInfo } from '../data/content'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { api } from '../lib/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [ref, isVisible] = useIntersectionObserver()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await api.submitInquiry({
        name: form.name,
        email: form.email,
        company: form.company || null,
        phone: form.phone || null,
        product_category: form.subject || null,
        message: form.message
      })

      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
      setForm({ name: '', email: '', company: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }


  return (
    <>
      <SEOHead title="Contact Us" description="Get in touch with S P V Plastchem for product inquiries, technical support, or partnership opportunities." path="/contact" />

      {/* Page Header */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1B2D4A 100%)' }}>
        <div className="container-wide mx-auto px-4 sm:px-6">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-400 mb-3">Contact Us</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>Get In Touch</h1>
          <p className="text-neutral-300 text-lg max-w-2xl">Have a question about our products or need technical support? Our team is ready to assist you.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form — 3 cols */}
            <div className={`lg:col-span-3 scroll-animate scroll-cinematic-up ${isVisible ? 'is-visible' : ''}`}>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Send Us a Message</h2>
              <p className="text-neutral-500 mb-8">Fill out the form below and our team will respond within 24 business hours.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-green-700 mb-2">Message Sent!</h3>
                  <p className="text-sm text-green-600">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                      {error}
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Full Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Email Address *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Company</label>
                      <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all" placeholder="Company name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all" placeholder="+94 XX XXX XXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Subject *</label>
                    <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all">
                      <option value="" className="text-neutral-900 dark:text-white">Select a subject</option>
                      <option value="product-inquiry" className="text-neutral-900 dark:text-white">Product Inquiry</option>
                      <option value="technical-support" className="text-neutral-900 dark:text-white">Technical Support</option>
                      <option value="partnership" className="text-neutral-900 dark:text-white">Partnership Opportunity</option>
                      <option value="quote" className="text-neutral-900 dark:text-white">Request a Quote</option>
                      <option value="other" className="text-neutral-900 dark:text-white">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all resize-none" placeholder="Tell us how we can help..." />
                  </div>
                  <button type="submit" disabled={loading} className="btn-primary !py-3 !px-8 disabled:opacity-50">
                    {loading ? 'Sending...' : <>Send Message <Send className="w-4 h-4" /></>}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info — 2 cols */}
            <div 
              className={`lg:col-span-2 space-y-5 scroll-animate scroll-cinematic-up ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '150ms' }}
            >
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <div key={i} className="bg-neutral-50 rounded-xl p-5 border border-neutral-100 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 text-sm mb-1">{info.label}</h4>
                      {info.href ? (
                        <a href={info.href} className="text-sm text-neutral-500 hover:text-accent-500 transition-colors">{info.value}</a>
                      ) : (
                        <p className="text-sm text-neutral-500">{info.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}

              {/* Business Hours */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-100 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent-500/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm mb-1">Business Hours</h4>
                  <p className="text-sm text-neutral-500">Mon – Fri: 8:00 AM – 5:30 PM</p>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-neutral-100 h-[250px]">
                <iframe
                  title="SPV Plastchem Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63388.94825946328!2d79.8893!3d6.7972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245416b7eb89b%3A0x8e8334a1795c479e!2sPiliyandala%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
