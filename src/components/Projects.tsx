import { useState } from 'react';
import { MapPin, Zap, Calendar, ImageOff } from 'lucide-react';
import { projects, type ProjectCategory } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const categories: ('All' | ProjectCategory)[] = ['All', 'Residential', 'Group Houses', 'Commercial'];

export default function Projects() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const { ref, visible } = useReveal();

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="section-pad bg-white">
      <div className="container-custom">
        <div ref={ref} className={`text-center mb-10 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Projects
          </p>
          <h2 className="section-title">Solar Installations We're Proud Of</h2>
          <p className="section-subtitle mx-auto">
            A selection of our residential, group housing, and commercial solar projects. Project details will be added as they become available.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                filter === cat
                  ? 'bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20'
                  : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={`${project.name}-${i}`}
              className="group rounded-2xl overflow-hidden card card-hover"
              style={{ animation: `fadeInUp 0.5s ease-out ${i * 0.05}s both` }}
            >
              <div className="relative h-56 overflow-hidden bg-navy-100">
                <img
                  src={project.image}
                  alt={`${project.type} solar project at ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                <span className="absolute top-3 right-3 px-3 py-1 bg-gold-500 text-navy-950 text-xs font-bold rounded-full">
                  {project.type}
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                </div>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm text-navy-500">
                  <MapPin className="w-4 h-4 text-gold-500" />
                  {project.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-500">
                  <Zap className="w-4 h-4 text-gold-500" />
                  {project.capacity}
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-500">
                  <Calendar className="w-4 h-4 text-gold-500" />
                  {project.date}
                </div>
                <div className="pt-2 mt-2 border-t border-navy-100 flex items-center gap-2 text-xs text-navy-400">
                  <ImageOff className="w-3.5 h-3.5" />
                  Project photographs will be added here.
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-navy-400 mt-8">
          More projects will be showcased here as they are completed.
        </p>
      </div>
    </section>
  );
}
