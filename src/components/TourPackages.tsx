import { motion } from 'framer-motion';
import { TOUR_PACKAGES, generateWhatsAppLink } from '../data/constants';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function TourPackages() {
  return (
    <section id="packages" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-secondary font-medium tracking-wider text-sm uppercase mb-2 block">
            Featured Itineraries
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Trips Made for Memories
          </h2>
          <p className="text-muted-foreground text-lg">
            Carefully crafted tour packages that bring you the best of Maharashtra with zero hassle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg, index) => {
            const waMsg = `Hi! I am interested in the ${pkg.title} tour. Can I get more details?`;
            
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-card-border flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={pkg.img} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                    {pkg.price}
                    <span className="text-xs font-normal text-muted-foreground">/person</span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-medium text-secondary mb-3">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4 line-clamp-2">
                    {pkg.title}
                  </h3>
                  
                  <div className="mb-6 flex-grow">
                    <ul className="space-y-2">
                      {pkg.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={generateWhatsAppLink(waMsg)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full mt-auto inline-flex h-11 items-center justify-center rounded-md bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    Get Details on WhatsApp
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}