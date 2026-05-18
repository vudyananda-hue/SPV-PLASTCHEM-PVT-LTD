import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { company } from '../../data/content'
import { api } from '../../lib/api'

export default function ContactPreview() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await api.submitInquiry({
        name: form.name,
        email: form.email,
        message: form.message
      })
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setError(err.message || 'Failed to send inquiry. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="contact-preview" className="section-padding bg-primary-900 relative overflow-hidden">
      {/* Decorative background orb */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-[100px]" />
      
      <div className="container-wide mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Quick Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-white bg-accent-500 px-3 py-1 rounded-md mb-3">Get In Touch</span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
            >
              Send Us an Inquiry
            </h2>
            <p className="text-neutral-300 mb-8">Have a question about our products or need a custom formulation? Our technical team is here to help.</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="text-green-600 font-semibold mb-1">Thank you!</div>
                <p className="text-sm text-green-500">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="quick-inquiry-form">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                    {error}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-sm focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all" />
                  <input type="email" placeholder="Email Address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-sm focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all" />
                </div>
                <textarea placeholder="How can we help you?" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-sm focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all resize-none" />
                <button type="submit" disabled={loading} className="btn-primary disabled:opacity-50">
                  {loading ? 'Sending...' : <>Send Inquiry <Send className="w-4 h-4" /></>}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right — Contact Cards */}
          <motion.div 
            className="flex flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="group glass rounded-xl p-6 border border-white/10 card-hover flex items-start gap-4 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-500/20 flex items-center justify-center shrink-0 group-hover:bg-accent-500/30 transition-colors">
                <Phone className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-accent-400 transition-colors">Call Us</h4>
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-sm text-neutral-300 group-hover:text-white transition-colors">{company.phone}</a>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="group glass rounded-xl p-6 border border-white/10 card-hover flex items-start gap-4 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-500/20 flex items-center justify-center shrink-0 group-hover:bg-accent-500/30 transition-colors">
                <Mail className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-accent-400 transition-colors">Email Us</h4>
                <a href={`mailto:${company.email}`} className="text-sm text-neutral-300 group-hover:text-white transition-colors">{company.email}</a>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="group glass rounded-xl p-6 border border-white/10 card-hover flex items-start gap-4 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-500/20 flex items-center justify-center shrink-0 group-hover:bg-accent-500/30 transition-colors">
                <MapPin className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-accent-400 transition-colors">Visit Us</h4>
                <p className="text-sm text-neutral-300 group-hover:text-white transition-colors">{company.fullAddress}</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link to="/contact" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors" id="contact-full-page-link">
                View Full Contact Page <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
