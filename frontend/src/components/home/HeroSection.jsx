import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, FlaskConical, Beaker, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { stats } from '../../data/content'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.85) 0%, rgba(17, 29, 56, 0.75) 40%, rgba(27, 45, 74, 0.65) 70%, rgba(13, 22, 46, 0.9) 100%), url('/hero-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Molecular grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px),
              radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 30px 30px',
            backgroundPosition: '0 0, 15px 15px',
          }}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-accent-500/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-[15%] w-96 h-96 bg-primary-400/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[60%] left-[50%] w-48 h-48 bg-accent-500/5 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '0.5s' }} />

        {/* Decorative molecular icons */}
        <FlaskConical className="absolute top-[20%] right-[20%] w-16 h-16 text-white/[0.03] rotate-12" />
        <Beaker className="absolute bottom-[30%] left-[8%] w-20 h-20 text-white/[0.03] -rotate-12" />
        <Shield className="absolute top-[15%] left-[25%] w-12 h-12 text-white/[0.03] rotate-6" />
      </div>

      {/* Content */}
      <div className="container-wide mx-auto px-4 sm:px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge & Theme */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass self-start animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span className="text-xs font-medium text-neutral-300 tracking-wide">
                Sri Lanka&apos;s Trusted Industrial Chemical Partner
              </span>
            </div>
            
            {/* Elegant Company Theme */}
            <div className="overflow-hidden py-1">
              <motion.h2
                className="text-base sm:text-lg md:text-xl font-bold uppercase text-accent-400 font-heading"
                initial={{ opacity: 0, y: 15, letterSpacing: "0.05em" }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  letterSpacing: "0.2em"
                }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1
                }}
                style={{
                  textShadow: '0 0 20px rgba(232, 119, 34, 0.35)'
                }}
              >
                We Drive You To The Innovation
              </motion.h2>
            </div>
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-white leading-[1.1] mb-6 animate-slide-up"
            style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
          >
            Engineering{' '}
            <span className="gradient-text">Chemical</span>{' '}
            Excellence for Industry
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-10 max-w-2xl animate-slide-up"
            style={{ animationDelay: '0.15s' }}
          >
            Specialty chemical formulations, rubber processing solutions, construction chemicals, and
            industrial bonding technologies — engineered for performance, trusted by industry.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Link to="/products" className="btn-primary text-base !py-3.5 !px-8" id="hero-cta-products">
              Explore Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-secondary text-base !py-3.5 !px-8" id="hero-cta-contact">
              Request a Quote
            </Link>
          </div>

          {/* Stats Row */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 animate-slide-up"
            style={{ animationDelay: '0.45s' }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center sm:text-left border-l-2 border-accent-500/30 pl-4"
              >
                <div
                  className="text-2xl md:text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-neutral-400" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
