import { useState } from 'react';
import { projects, portfolioCategories, type ProjectCategory } from '@/lib/content';
import { useReveal } from '@/hooks/useReveal';
import { MapPin } from 'lucide-react';

type Filter = ProjectCategory | 'All';

export default function Portfolio() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState<Filter>('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-pad bg-navy-gradient">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl text-center`}>
          <p className="eyebrow">Portfolio</p>
          <h2 className="mt-5 heading-lg text-navy-50">Homes we are proud of.</h2>
          <div className="mt-6 mx-auto divider-gold" />
          <p className="mt-6 text-lg leading-relaxed text-navy-100/80">
            A selection of recently completed projects across Hyderabad. Filter by space to explore
            the work closest to your own.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {portfolioCategories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 ${
                  active
                    ? 'bg-gold-gradient text-navy-950 shadow-[0_4px_20px_-4px_rgba(192,143,42,0.5)]'
                    : 'border border-navy-600/40 text-navy-200 hover:border-gold-400/50 hover:text-gold-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-12 grid auto-rows-[16rem] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-navy-300">More projects in this category coming soon.</p>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const spanClass =
    project.span === 'wide'
      ? 'sm:col-span-2'
      : project.span === 'tall'
        ? 'sm:row-span-2'
        : '';

  return (
    <article
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-2xl ${spanClass}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-95 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="text-[0.65rem] uppercase tracking-widest text-gold-400">
          {project.category}
        </span>
        <h3 className="mt-1 font-display text-xl text-navy-50">{project.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-navy-200/70">
          <MapPin size={12} />
          {project.location}
        </p>
      </div>
    </article>
  );
}
