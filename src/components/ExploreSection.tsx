import { motion } from 'framer-motion';
import { DESTINATIONS } from '../data/constants';
import { ArrowRight, MapPin } from 'lucide-react';

export default function ExploreSection() {
  return (
    <section id="explore" className="py-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-2 text-secondary font-medium mb-3">
            <MapPin size={18} />
            <span className="uppercase tracking-wider text-sm">Destinations</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Explore the Beauty of Maharashtra
          </h2>
          <p className="text-muted-foreground text-lg">
            From misty mountains to golden beaches, ancient forts to hidden gems — discover Maharashtra your way.
          </p>
        </motion.div>

        {/* Scrollable Grid using CSS Grid + Overflow for mobile, standard grid for desktop */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible md:p-0 md:m-0 gap-6 hide-scrollbar">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex-none w-[280px] md:w-auto snap-center"
            >
              <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                {/* Image or Gradient Placeholder */}
                {dest.img ? (
                  <img 
                    src={dest.img} 
                    alt={dest.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-secondary/80 to-primary/80 transition-transform duration-700 group-hover:scale-105" />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                    {dest.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 h-0 group-hover:h-auto overflow-hidden">
                    {dest.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 delay-100">
                    <span>Explore Destination</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}