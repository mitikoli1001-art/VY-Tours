import { motion } from 'framer-motion';

const IMAGES = [
  { id: 1, src: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ttNIYNAY6iOyVItmRqchzZ_-OgB6e1dxpZJWAGifyg&s=10" alt="Maharashtra destination" />', alt: 'Maharashtrian Cuisine', size: 'small' },
  { id: 2, src: '/attached_assets/generated_images/gal_2.jpg', alt: 'Western Ghats Waterfall', size: 'large' },
  { id: 3, src: '/attached_assets/generated_images/gal_3.jpg', alt: 'Coastal Road', size: 'medium' },
  { id: 4, src: '/attached_assets/generated_images/dest_tadoba.jpg', alt: 'Wildlife Safari', size: 'small' },
  { id: 5, src: '/attached_assets/generated_images/gal_4.jpg', alt: 'Heritage Caves', size: 'large' },
  { id: 6, src: '/attached_assets/generated_images/gal_5.jpg', alt: 'Matheran Sunrise', size: 'medium' },
  { id: 7, src: '/attached_assets/generated_images/dest_alibaug.jpg', alt: 'Alibaug Beach', size: 'small' },
  { id: 8, src: '/attached_assets/generated_images/exp_fort.jpg', alt: 'Fort Heritage', size: 'large' },
  { id: 9, src: '/attached_assets/generated_images/exp_spiritual.jpg', alt: 'Spiritual Journey', size: 'medium' },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-secondary font-medium tracking-wider text-sm uppercase mb-2 block">
            Travel Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            A Glimpse of Maharashtra
          </h2>
          <p className="text-muted-foreground text-lg">
            Beautiful moments captured across our curated travel experiences.
          </p>
        </motion.div>

        {/* Masonry Layout using Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="relative overflow-hidden rounded-2xl break-inside-avoid group cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}