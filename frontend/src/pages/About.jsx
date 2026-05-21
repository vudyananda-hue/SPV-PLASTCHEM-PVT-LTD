import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Target, CheckCircle, FileText, Briefcase, Landmark, Building } from 'lucide-react'
import SEOHead from '../components/common/SEOHead'
import SectionTitle from '../components/common/SectionTitle'
import { company, companyHistory, corporateValues, corporateInfo } from '../data/content'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function About() {
  const [overviewRef, isOverviewVisible] = useIntersectionObserver()
  const [leadershipRef, isLeadershipVisible] = useIntersectionObserver()
  const [corporateRef, isCorporateVisible] = useIntersectionObserver()
  const [timelineRef, isTimelineVisible] = useIntersectionObserver()

  return (
    <>
      <SEOHead title="About Us" description="Learn about S P V PLASTCHEM — our history, vision, leadership, and commitment to industrial chemical excellence." path="/about" />

      {/* Page Header */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1B2D4A 100%)' }}>
        <div className="container-wide mx-auto px-4 sm:px-6">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-400 mb-3">About Us</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>Our Story & Vision</h1>
          <p className="text-neutral-300 text-lg max-w-2xl">A leading Indenting Agent delivering industrial chemical and machinery solutions with unwavering commitment to quality and innovation.</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white" ref={overviewRef}>
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`scroll-animate scroll-cinematic-up ${isOverviewVisible ? 'is-visible' : ''}`}>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-500 mb-3">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>A Legacy of Chemical Excellence</h2>
              <p className="text-neutral-500 leading-relaxed mb-4">{company.description}</p>
              <p className="text-neutral-500 leading-relaxed mb-6">Established in {company.founded} and commencing operations on {company.commenced}, we serve as the critical link between global manufacturers and the Sri Lankan industrial sector.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {['Global Raw Material Sourcing', 'Industrial Machinery Supply', 'Technical Consulting', 'Marketing Office Representation'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                    <span className="text-sm font-medium text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-5 rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-100 border-l-4 border-accent-500 shadow-sm relative overflow-hidden">
                <div className="absolute -right-4 -top-4 opacity-5">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-neutral-700 font-medium italic text-lg leading-relaxed relative z-10">
                  "We grow our customers, and our customers grow us."
                </p>
                <p className="text-neutral-700 font-medium italic text-lg leading-relaxed mt-2 relative z-10">
                  "Big or small, every customer matters to us."
                </p>
              </div>
            </div>
            <div 
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-800 to-primary-900 p-8 min-h-[350px] flex items-end card-pro-hover scroll-animate scroll-cinematic-up ${isOverviewVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '150ms' }}
            >
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              <div className="relative z-10 w-full glass p-6 rounded-xl border border-white/10">
                <div className="w-12 h-1 bg-accent-500 rounded-full mb-4" />
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>Established {company.founded}</h3>
                <p className="text-sm text-neutral-300">Building trust through consistent quality and representing leading global principals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-neutral-50" ref={leadershipRef}>
        <div className="container-wide mx-auto">
          <div className={`scroll-animate scroll-cinematic-up ${isLeadershipVisible ? 'is-visible' : ''}`}>
            <SectionTitle subtitle="Leadership" title="Guided by Experience" />
          </div>
          <div className={`max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-neutral-100 shadow-sm card-pro-hover text-center scroll-animate scroll-cinematic-up ${isLeadershipVisible ? 'is-visible' : ''}`}>
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-8 border-4 border-accent-500/20 shadow-lg bg-neutral-100">
               <img src="/chairman_new.png" alt={company.chairman} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-bold text-neutral-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{company.chairman}</h3>
            <p className="text-accent-500 font-medium text-lg mb-6">{company.chairmanTitle}</p>
            <div className="text-neutral-600 leading-relaxed text-left space-y-4 max-w-3xl mx-auto text-lg">
              <p>{company.chairmanBio}</p>
            </div>
          </div>
        </div>
      </section>


      {/* Timeline */}
      <section className="section-padding bg-neutral-50" ref={timelineRef}>
        <div className="container-wide mx-auto">
          <div className={`scroll-animate scroll-cinematic-up ${isTimelineVisible ? 'is-visible' : ''}`}>
            <SectionTitle subtitle="Our Journey" title="Company Milestones" />
          </div>
          <div className="max-w-3xl mx-auto">
            {companyHistory.map((item, i) => (
              <div key={i} className={`flex gap-6 mb-8 last:mb-0 scroll-animate scroll-cinematic-up ${isTimelineVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${i * 100}ms`}}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 border-2 border-accent-500/20 shadow-sm shadow-accent-500/5">
                    <span className="text-sm font-bold text-accent-600">{item.year}</span>
                  </div>
                  {i < companyHistory.length - 1 && <div className="w-0.5 flex-1 bg-neutral-200 mt-3" />}
                </div>
                <div className="pb-8 pt-3">
                  <h4 className="text-lg font-bold text-neutral-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h4>
                  <p className="text-neutral-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1B2D4A 100%)' }}>
        <div className="container-wide mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>Partner With Us</h2>
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">Ready to explore how our chemical solutions and global partnerships can support your manufacturing needs?</p>
          <Link to="/contact" className="btn-primary text-base !py-3 !px-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-500/30 transition-all">
            Contact Our Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
