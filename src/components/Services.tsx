import { services } from '@/lib/content';
import { useReveal } from '@/hooks/useReveal';

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="section-pad bg-navy-950">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl text-center`}>
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-5 heading-lg text-navy-50">Interiors, end to end.</h2>
          <div className="mt-6 mx-auto divider-gold" />
          <p className="mt-6 text-lg leading-relaxed text-navy-100/80">
            From a single statement room to your entire home — each service is delivered with the
            same obsessive attention to material, joinery, and finish.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className={`reveal-scale ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-2xl bg-navy-900`}
      style={{ transitionDelay: `${(index % 3) * 120}ms` }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-gold-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute bottom-0 p-7">
        <p className="text-xs uppercase tracking-widest text-gold-400">{service.tagline}</p>
        <h3 className="mt-2 font-display text-2xl font-medium text-navy-50">{service.title}</h3>
        <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-navy-100/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
          {service.description}
        </p>
      </div>
    </article>
  );
}
