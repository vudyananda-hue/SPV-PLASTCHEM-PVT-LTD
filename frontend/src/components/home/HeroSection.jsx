import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, FlaskConical, Beaker, Shield } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { stats } from '../../data/content'
import { useCountUp } from '../../hooks/useCountUp'
import Magnetic from '../common/Magnetic'

const StatCounter = ({ stat }) => {
  const [ref, count] = useCountUp(stat.value, 2000);
  
  return (
    <div
      className="text-center sm:text-left border-l-2 border-accent-500/30 pl-4"
      ref={ref}
    >
      <div
        className="text-2xl md:text-3xl font-bold text-white mb-1"
        style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
      >
        {count}
      </div>
      <div className="text-xs text-neutral-400 uppercase tracking-wider font-medium">
        {stat.label}
      </div>
    </div>
  );
};

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Background Parallax
  const backgroundY = useTransform(scrollY, [0, 800], ['0%', '20%']);
  const backgroundScale = useTransform(scrollY, [0, 800], [1, 1.06]);

  // Dynamic Parallax layers (Depth levels)
  const layer1Y = useTransform(scrollY, [0, 800], [0, -100]); // Fast upward motion
  const layer2Y = useTransform(scrollY, [0, 800], [0, 150]);  // Downward motion
  const layer3Y = useTransform(scrollY, [0, 800], [0, -50]);  // Slow upward motion

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-primary-950"
    >
      {/* Background Parallax & Reveal Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.85) 0%, rgba(17, 29, 56, 0.75) 40%, rgba(27, 45, 74, 0.65) 70%, rgba(13, 22, 46, 0.9) 100%), url('/hero-bg.png')`,
              y: backgroundY,
              scale: backgroundScale,
            }}
          />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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
        {/* Floating orbs with depth translations */}
        <motion.div style={{ y: layer1Y }} className="absolute top-1/4 left-[10%] w-72 h-72 bg-accent-500/10 rounded-full blur-[100px] animate-pulse-glow" />
        <motion.div style={{ y: layer2Y }} className="absolute bottom-1/4 right-[15%] w-96 h-96 bg-primary-400/10 rounded-full blur-[120px] animate-pulse-glow" />
        <motion.div style={{ y: layer3Y }} className="absolute top-[60%] left-[50%] w-48 h-48 bg-accent-500/5 rounded-full blur-[80px] animate-pulse-glow" />

        {/* Decorative molecular icons with depth translations */}
        <motion.div style={{ y: layer1Y }} className="absolute top-[20%] right-[20%] w-16 h-16 text-white/[0.03] rotate-12">
          <FlaskConical className="w-full h-full animate-float-slow" />
        </motion.div>
        <motion.div style={{ y: layer2Y }} className="absolute bottom-[30%] left-[8%] w-20 h-20 text-white/[0.03] -rotate-12">
          <Beaker className="w-full h-full animate-float" />
        </motion.div>
        <motion.div style={{ y: layer3Y }} className="absolute top-[15%] left-[25%] w-12 h-12 text-white/[0.03] rotate-6">
          <Shield className="w-full h-full animate-float-fast" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container-wide mx-auto px-4 sm:px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge & Theme */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass self-start animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span className="text-xs font-medium text-neutral-300 tracking-wide">
                Trusted Industrial Chemical Partner — Exporting Globally
              </span>
            </div>
            
            {/* Elegant Company Theme */}
            <div className="overflow-hidden py-1">
              <motion.h2
                className="text-base sm:text-lg md:text-xl font-bold uppercase font-heading flex flex-wrap gap-x-2 gap-y-1"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
              >
                {/* Regular Words */}
                {["We", "Drive", "You", "To", "The"].map((word, i) => (
                  <motion.span
                    key={i}
                    className="text-neutral-300 inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 10, letterSpacing: "0.05em" },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        letterSpacing: "0.15em",
                        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                      }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
                
                {/* Featured Word "Innovation" */}
                <motion.span
                  className="gradient-text inline-block font-extrabold"
                  variants={{
                    hidden: { opacity: 0, y: 15, scale: 0.9, letterSpacing: "0.05em" },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      letterSpacing: "0.2em",
                      transition: { 
                        duration: 1.2, 
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }
                  }}
                  style={{
                    textShadow: '0 0 25px rgba(232, 119, 34, 0.45)'
                  }}
                >
                  Innovation
                </motion.span>
              </motion.h2>
            </div>
          </div>

          {/* Main heading with split-text mask reveal */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-white leading-[1.1] mb-6 flex flex-wrap gap-x-3 gap-y-1.5"
            style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {["Leading", "Indenting", "Agent", "&", "Marketing", "Office"].map((word, index) => {
              const isAccent = word === "Indenting" || word === "Agent";
              return (
                <span key={index} className="inline-block overflow-hidden py-1">
                  <motion.span
                    className={`inline-block ${isAccent ? 'gradient-text' : 'text-white'}`}
                    variants={{
                      hidden: { y: "110%" },
                      visible: { 
                        y: 0, 
                        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
                      }
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </motion.h1>

          {/* Subtitle with mask reveal */}
          <div className="overflow-hidden mb-10">
            <motion.p
              className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Supplying premium raw materials and machinery to the Plastics, Chemical, Rubber, and Automotive industries in Sri Lanka. Representing world-class global principals.
            </motion.p>
          </div>

          {/* CTA Buttons with mask reveal */}
          <div className="overflow-hidden mb-16 py-1">
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <Magnetic>
                <Link to="/products" className="btn-primary btn-shimmer text-base !py-3.5 !px-8" id="hero-cta-products">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link to="/contact" className="btn-secondary text-base !py-3.5 !px-8" id="hero-cta-contact">
                  Request a Quote
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          {/* Stats Row with mask reveal */}
          <div className="overflow-hidden py-1">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {stats.map((stat, i) => (
                <StatCounter key={i} stat={stat} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-accent-500" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
