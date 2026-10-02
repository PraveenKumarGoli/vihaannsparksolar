import { CheckCircle2 } from 'lucide-react';
import { services } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-custom">
        <div ref={ref} className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Services
          </p>
          <h2 className="section-title">Complete Solar Services, Start to Finish</h2>
          <p className="section-subtitle mx-auto">
            From consultation and design to installation and maintenance, we handle every step of your solar project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group p-7 card card-hover reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-navy-50 group-hover:bg-gold-500 flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon className="w-7 h-7 text-navy-700 group-hover:text-navy-950 transition-colors duration-300" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{service.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{service.description}</p>
                <div className="mt-5 flex items-center gap-2 text-gold-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle2 className="w-4 h-4" />
                  Engineering-driven approach
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
