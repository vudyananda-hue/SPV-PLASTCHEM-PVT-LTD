import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Target, Award, Users, CheckCircle } from 'lucide-react'
import SEOHead from '../components/common/SEOHead'
import SectionTitle from '../components/common/SectionTitle'
import { company, companyHistory, corporateValues } from '../data/content'

export default function About() {
  return (
    <>
      <SEOHead title="About Us" description="Learn about S P V Plastchem — our history, vision, leadership, and commitment to industrial chemical excellence." path="/about" />

      {/* Page Header */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1B2D4A 100%)' }}>
        <div className="container-wide mx-auto px-4 sm:px-6">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-400 mb-3">About Us</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>Our Story & Vision</h1>
          <p className="text-neutral-300 text-lg max-w-2xl">Over 25 years of delivering industrial chemical solutions with unwavering commitment to quality and innovation.</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-500 mb-3">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>A Legacy of Chemical Excellence</h2>
              <p className="text-neutral-500 leading-relaxed mb-4">{company.description}</p>
              <p className="text-neutral-500 leading-relaxed mb-6">Founded in {company.founded}, we have evolved from a specialty chemical trading company into a fully integrated manufacturer and solutions provider, serving the rubber, paint & coatings, construction, and industrial manufacturing sectors across Sri Lanka.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {['Specialty chemical manufacturing', 'Custom formulation capabilities', 'Technical consulting services', 'Island-wide distribution'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                    <span className="text-sm font-medium text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-800 to-primary-900 p-8 min-h-[350px] flex items-end">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              <div className="relative z-10">
                <div className="w-12 h-1 bg-accent-500 rounded-full mb-4" />
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>Established {company.founded}</h3>
                <p className="text-sm text-neutral-300">Building trust through consistent quality and technical expertise across multiple industrial sectors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide mx-auto">
          <SectionTitle subtitle="Our Purpose" title="Vision & Mission" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-neutral-100 card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary-900 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
              <p className="text-neutral-500 leading-relaxed">To be the most trusted and innovative industrial chemical solutions provider in South Asia, driving manufacturing excellence through superior products and technical partnerships.</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-neutral-100 card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary-900 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
              <p className="text-neutral-500 leading-relaxed">To deliver high-quality specialty chemical formulations that enhance industrial processes, while maintaining the highest standards of safety, environmental responsibility, and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <SectionTitle subtitle="Our Journey" title="Company Milestones" />
          <div className="max-w-3xl mx-auto">
            {companyHistory.map((item, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center shrink-0 border-2 border-accent-500/20">
                    <span className="text-xs font-bold text-accent-600">{item.year}</span>
                  </div>
                  {i < companyHistory.length - 1 && <div className="w-0.5 flex-1 bg-neutral-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <h4 className="font-bold text-neutral-900 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide mx-auto">
          <SectionTitle subtitle="Leadership" title="Guided by Experience" />
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-10 border border-neutral-100 card-hover text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-accent-500/20 shadow-xl">
              <img 
                src="/chairman.jpg" 
                alt={company.chairman} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{company.chairman}</h3>
            <p className="text-accent-500 font-medium text-sm mb-5">{company.chairmanTitle}</p>
            <p className="text-neutral-500 leading-relaxed">{company.chairmanBio}</p>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <SectionTitle subtitle="Our Values" title="What Drives Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateValues.map((val, i) => {
              const Icon = val.icon
              return (
                <div key={i} className="text-center p-6">
                  <div className="w-14 h-14 rounded-xl bg-accent-500/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent-500" />
                  </div>
                  <h4 className="font-bold text-neutral-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{val.title}</h4>
                  <p className="text-sm text-neutral-500">{val.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1B2D4A 100%)' }}>
        <div className="container-wide mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 animate-scale-up" style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>Partner With Us</h2>
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">Ready to explore how our chemical solutions can support your manufacturing needs?</p>
          <Link to="/contact" className="btn-primary text-base !py-3 !px-8">
            Contact Our Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
