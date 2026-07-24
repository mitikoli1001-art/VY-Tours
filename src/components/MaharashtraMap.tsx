import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DESTINATIONS, generateWhatsAppLink } from '../data/constants';
import { MapPin, X } from 'lucide-react';

// Approximate coordinates for destinations on a stylized map (percentages)
const MARKER_POSITIONS: Record<string, { top: string, left: string }> = {
  'mumbai': { top: '50%', left: '15%' },
  'alibaug': { top: '55%', left: '16%' },
  'lonavala': { top: '52%', left: '20%' },
  'pune': { top: '56%', left: '26%' },
  'mahabaleshwar': { top: '65%', left: '25%' },
  'matheran': { top: '51%', left: '18%' },
  'nashik': { top: '35%', left: '25%' },
  'igatpuri': { top: '40%', left: '22%' },
  'sambhajinagar': { top: '38%', left: '45%' },
  'ajanta': { top: '25%', left: '48%' },
  'ratnagiri': { top: '75%', left: '22%' },
  'sindhudurg': { top: '88%', left: '24%' },
  'kolhapur': { top: '80%', left: '32%' },
  'tadoba': { top: '40%', left: '85%' },
};

export default function MaharashtraMap() {
  const [activeDestId, setActiveDestId] = useState<string | null>(null);

  const activeDest = DESTINATIONS.find(d => d.id === activeDestId);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-medium tracking-wider text-sm uppercase mb-2 block">
            Interactive Guide
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Plan Your Maharashtra Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Click on the map markers to discover what each destination has to offer.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] lg:h-[700px] bg-muted/20 rounded-3xl border border-border overflow-hidden">
          {/* Stylized Maharashtra Background */}
          <div className="absolute inset-0 p-8 flex items-center justify-center opacity-10 pointer-events-none">
            <svg viewBox="0 0 800 600" className="w-full h-full text-primary" fill="currentColor">
              {/* Very stylized simplified abstract shape of Maharashtra for aesthetic purposes */}
              <path d="M120 250 Q100 350 150 450 Q200 550 300 500 Q400 450 500 500 Q650 500 700 300 Q750 100 500 150 Q300 100 200 150 Q150 150 120 250 Z" />
            </svg>
          </div>

          {/* Map Markers */}
          {Object.entries(MARKER_POSITIONS).map(([id, pos]) => {
            const dest = DESTINATIONS.find(d => d.id === id);
            if (!dest) return null;
            
            const isActive = activeDestId === id;
            
            return (
              <motion.button
                key={id}
                className={`absolute w-8 h-8 -ml-4 -mt-8 flex items-center justify-center group focus:outline-none z-20 ${isActive ? 'z-30' : ''}`}
                style={{ top: pos.top, left: pos.left }}
                onClick={() => setActiveDestId(isActive ? null : id)}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2 }}
              >
                <div className={`relative flex items-center justify-center transition-colors ${isActive ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>
                  <MapPin size={32} weight={isActive ? 'fill' : 'regular'} className={isActive ? 'fill-primary/20' : ''} />
                  <span className={`absolute top-full mt-1 px-2 py-0.5 text-xs font-bold rounded-sm whitespace-nowrap transition-opacity ${isActive ? 'bg-primary text-white opacity-100' : 'bg-background/80 text-foreground opacity-0 group-hover:opacity-100'}`}>
                    {dest.name}
                  </span>
                </div>
              </motion.button>
            );
          })}

          {/* Popup Card */}
          <AnimatePresence>
            {activeDest && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-6 left-6 right-6 md:left-auto md:right-8 md:bottom-8 md:w-80 bg-background/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border overflow-hidden z-40"
              >
                <div className="relative h-40 bg-muted">
                  {activeDest.img ? (
                    <img src={activeDest.img} alt={activeDest.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                  )}
                  <button 
                    onClick={() => setActiveDestId(null)}
                    className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
                
                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {activeDest.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 line-clamp-2">
                    {activeDest.desc}
                  </p>
                  
                  <a
                    href={generateWhatsAppLink(`Hi! I would like to know more about tours to ${activeDest.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Ask About This Destination
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}