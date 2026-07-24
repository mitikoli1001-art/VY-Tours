import { motion } from 'framer-motion';
import { generateWhatsAppLink } from '../data/constants';

export default function Hero() {
  const scrollToExplore = () => {
    const el = document.getElementById('explore');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
        <img 
          src="/attached_assets/generated_images/hero.jpg" 
          alt="Beautiful Maharashtra Landscape" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Floating Animated Elements (Subtle) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-secondary blur-[80px]"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-primary blur-[100px]"
        />
      </div>

      <div className="container relative z-20 px-4 md:px-6 pt-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-white border border-white/30">
            Welcome to VY Tours & Travels
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight tracking-tight">
            Discover Maharashtra, <br className="hidden md:block" />
            <span className="italic font-normal text-white/90">One Journey at a Time.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
            Explore breathtaking destinations, hidden gems, unforgettable experiences, and thoughtfully planned journeys across Maharashtra.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button 
              onClick={scrollToExplore}
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-primary shadow-lg transition-all hover:scale-105 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore Maharashtra
            </button>
            <a 
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm px-8 text-base font-medium text-white border border-white/20 shadow-lg transition-all hover:scale-105 hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Connect With Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToExplore}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.button>
    </section>
  );
}