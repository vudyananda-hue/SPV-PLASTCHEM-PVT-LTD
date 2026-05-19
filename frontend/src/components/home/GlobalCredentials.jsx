import { Award, ShieldCheck, Leaf, Globe } from 'lucide-react'

const credentials = [
  {
    title: 'ISO 9001:2015 Certified',
    subtitle: 'Quality Management Standards',
    description: 'Adhering to rigorous international quality protocols across our advanced manufacturing processes, assuring product consistency and precision.',
    Icon: Award,
    badge: 'ISO Certified'
  },
  {
    title: 'REACH Compliant (EU)',
    subtitle: 'European Union Regulations',
    description: 'Fully compliant with EU REACH standards, guaranteeing our chemical formulations are safe, registered, and ready for immediate European import.',
    Icon: ShieldCheck,
    badge: 'EU Standard'
  },
  {
    title: 'Green Chemistry Initiative',
    subtitle: 'Eco-Safe Formulations',
    description: 'Committed to low-emission, sustainable engineering by utilizing biodegradable materials and reducing hazardous byproducts during synthesis.',
    Icon: Leaf,
    badge: 'Eco-Friendly'
  },
  {
    title: 'Global Export Ready',
    subtitle: 'World-Class B2B Logistics',
    description: 'Equipped with heavy-duty sea and air cargo logistical networks, delivering raw materials securely to international ports and supply hubs.',
    Icon: Globe,
    badge: 'Worldwide Shipping'
  }
]

export default function GlobalCredentials() {
  return (
    <section id="global-credentials" className="section-padding bg-neutral-50 industrial-texture border-y border-neutral-100">
      <div className="container-wide mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-600 text-xs font-bold uppercase tracking-wider mb-4">
            International Trade
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Global Standards & Compliance
          </h2>
          <p className="text-neutral-500 text-base leading-relaxed">
            As a leading supplier of industrial and specialty chemicals, our credentials guarantee full compliance with global safety, environment, and quality management protocols.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((item, i) => {
            const Icon = item.Icon
            return (
              <div 
                key={i} 
                className="group relative bg-white rounded-2xl p-6 md:p-8 card-hover border border-neutral-200/60 shadow-sm overflow-hidden flex flex-col justify-between"
                id={`credential-card-${i}`}
              >
                {/* Visual Accent Glow Top-Right */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent-500/5 rounded-full blur-xl group-hover:bg-accent-500/15 transition-all duration-300" />
                
                <div>
                  {/* Badge */}
                  <span className="inline-block text-[0.65rem] font-bold tracking-wider uppercase text-neutral-400 group-hover:text-accent-500 transition-colors mb-5">
                    {item.badge}
                  </span>

                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-primary-900 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium tracking-wide uppercase mb-4">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Border Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-100 group-hover:bg-accent-500 transition-colors duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
