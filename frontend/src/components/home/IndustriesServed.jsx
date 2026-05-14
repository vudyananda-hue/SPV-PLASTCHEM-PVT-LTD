import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import { industries } from '../../data/content'

export default function IndustriesServed() {
  return (
    <section
      id="industries-served"
      className="section-padding relative"
      style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #111D38 50%, #0D162E 100%)',
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-wide mx-auto relative z-10">
        <SectionTitle
          subtitle="Industries We Serve"
          title="Solutions Across Sectors"
          description="Our chemical products and technical expertise support diverse industrial sectors with tailored formulations and reliable supply."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.id}
                className="group glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                id={`industry-card-${industry.id}`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mb-5 group-hover:bg-accent-500/30 transition-colors">
                  <Icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
                >
                  {industry.name}
                </h3>
                <ul className="space-y-2 mb-5">
                  {industry.solutions.map((sol, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                      <span className="text-sm text-neutral-300">{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/industries" className="btn-secondary" id="view-all-industries">
            Explore All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
