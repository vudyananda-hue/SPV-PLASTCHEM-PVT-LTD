import { Star } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import { testimonials } from '../../data/content'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export default function TestimonialsSection() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="testimonials" className="section-padding bg-neutral-50" ref={ref}>
      <div className="container-wide mx-auto">
        <div className={`scroll-animate scroll-cinematic-up ${isVisible ? 'is-visible' : ''}`}>
          <SectionTitle
            subtitle="Client Feedback"
            title="What Our Partners Say"
            description="We take pride in building long-lasting relationships and delivering exceptional value to the manufacturing sector."
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div 
              key={testimonial.id} 
              className={`bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 card-pro-hover scroll-animate scroll-cinematic-up ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <p className="text-neutral-600 leading-relaxed italic mb-6">
                "{testimonial.content}"
              </p>
              {testimonial.name && (
                <div>
                  <h4 className="font-bold text-neutral-900" style={{ fontFamily: 'var(--font-heading)' }}>
                    {testimonial.name}
                  </h4>
                  {(testimonial.role || testimonial.company) && (
                    <p className="text-sm text-neutral-500">
                      {testimonial.role}
                      {testimonial.role && testimonial.company && ', '}
                      {testimonial.company && (
                        <span className="font-medium text-accent-600">{testimonial.company}</span>
                      )}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
