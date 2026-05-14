export default function SectionTitle({ subtitle, title, description, light = false, center = true }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}>
      {subtitle && (
        <span
          className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 ${
            light ? 'text-accent-400' : 'text-accent-500'
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-neutral-900'
        }`}
        style={{ fontFamily: 'var(--font-heading)', color: light ? '#ffffff' : undefined }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? 'text-neutral-300' : 'text-neutral-500'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
