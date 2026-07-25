import { motion } from 'framer-motion';

const FEATURES = [
  {
    title: 'Maharashtra Travel Specialists',
    desc: 'We know this state inside out. From popular spots to hidden gems.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    )
  },
  {
    title: 'Personalized Travel Plans',
    desc: 'No cookie-cutter itineraries. We design trips that fit your style and pace.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 Z"/></svg>
    )
  },
  {
    title: 'Comfortable & Hassle-Free',
    desc: 'We handle the logistics — transport, stay, and permits, so you just relax.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.4-1.7-1-2.1V11c0-1.1-.9-2-2-2h-3l-2.6-2.6a2 2 0 0 0-1.4-.6H8c-1.1 0-2 .9-2 2v2"/><path d="M2 17h2"/><path d="M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M8 17h8"/></svg>
    )
  },
  {
    title: 'Local Travel Knowledge',
    desc: 'Authentic local experiences and food recommendations you won’t find online.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
    )
  },
  {
    title: 'Family-Friendly Experiences',
    desc: 'Safe, secure, and thoughtfully paced trips perfect for all age groups.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    )
  },
  {
    title: 'Support When You Need Us',
    desc: 'We are just a call away during your entire trip to ensure everything goes smoothly.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-card">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 lg:sticky lg:top-32"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Why Travel With VY Tours & Travels?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We don't just book tickets; we craft experiences. As a family-run business, we treat your holidays with the same care and attention to detail as we would our own.
            </p>
            <div className="hidden lg:block w-24 h-1 bg-secondary rounded-full"></div>
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6 md:gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}