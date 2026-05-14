import SectionTitle from '../common/SectionTitle'
import { whyChooseUs } from '../../data/content'

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container-wide mx-auto">
        <SectionTitle
          subtitle="Why Choose Us"
          title="Your Trusted Chemical Partner"
          description="Deep technical expertise combined with reliable supply chain capabilities."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="group relative bg-neutral-50 rounded-xl p-6 md:p-8 hover:bg-white card-hover border border-transparent hover:border-neutral-100" id={`why-card-${i}`}>
                <div className="absolute top-5 right-5 text-5xl font-bold text-neutral-100 group-hover:text-accent-500/10 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-5 group-hover:bg-accent-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
