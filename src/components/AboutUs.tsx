import { motion } from 'framer-motion';
import { generateWhatsAppLink, CONTACT_INFO } from '../data/constants';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-secondary font-medium tracking-wider text-sm uppercase mb-2 block">
            About VY Tours & Travels
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Meet Your Travel Hosts
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At VY Tours and Travels, we believe that every journey should be more than just a trip. We help you discover the beauty, culture, heritage, nature, and hidden gems of Maharashtra while creating travel experiences filled with comfort, connection, and unforgettable memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Yogesh Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-8 border border-border shadow-sm text-center flex flex-col items-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
            
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-background shadow-md">
              <img 
                src="/attached_assets/generated_images/avatar_yogesh.jpg" 
                alt="Yogesh Vaity" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-foreground mb-1">Yogesh Vaity</h3>
            <p className="text-secondary text-sm font-medium uppercase tracking-wider mb-6">Co-Founder & Travel Expert</p>
            
            <p className="text-muted-foreground mb-8 line-clamp-3">
              Passionate about Maharashtra's landscapes and logistics, ensuring your trip is perfectly planned and smoothly executed.
            </p>
            
            <a 
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              <span>{CONTACT_INFO.yogesh}</span>
            </a>
          </motion.div>

          {/* Vrushali Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 border border-border shadow-sm text-center flex flex-col items-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
            
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-background shadow-md">
              <img 
                src="/attached_assets/generated_images/avatar_vrushali.jpg" 
                alt="Vrushali Vaity" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-foreground mb-1">Vrushali Vaity</h3>
            <p className="text-secondary text-sm font-medium uppercase tracking-wider mb-6">Co-Founder & Client Experience</p>
            
            <p className="text-muted-foreground mb-8 line-clamp-3">
              Dedicated to ensuring every family and traveler feels at home, comfortable, and cared for throughout their journey.
            </p>
            
            <div className="mt-auto inline-flex items-center gap-2 text-foreground font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>{CONTACT_INFO.vrushali}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}