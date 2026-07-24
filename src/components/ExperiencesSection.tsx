import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/constants';

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="py-24 bg-card">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-secondary font-medium tracking-wider text-sm uppercase mb-2 block">
            Curated For You
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Find Your Perfect Escape
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {exp.img ? (
                <img 
                  src={exp.img} 
                  alt={exp.label} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="absolute inset-0 bg-secondary" />
              )}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                <span className="text-4xl mb-3 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  {exp.icon}
                </span>
                <h3 className="font-serif text-xl font-bold tracking-wide">
                  {exp.label}
                </h3>
                <span className="mt-4 px-4 py-1.5 rounded-full border border-white/30 text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}