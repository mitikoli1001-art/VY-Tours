import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/constants';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false
  });
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-secondary font-medium tracking-wider text-sm uppercase mb-2 block">
            Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Happy Travelers, Happy Memories
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 py-4">
              {TESTIMONIALS.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
                >
                  <div className="bg-card h-full p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow relative">
                    <Quote className="absolute top-6 right-6 text-primary/10" size={48} />
                    
                    <div className="flex gap-1 mb-6 text-secondary">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    
                    <p className="text-foreground/80 leading-relaxed mb-8 relative z-10 italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-serif text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.hometown}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:bg-muted hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:bg-muted hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}