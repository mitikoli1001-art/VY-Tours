import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <motion.div 
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
        whileHover="hover"
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          {/* Mountain Silhouette */}
          <path 
            d="M20 70 L40 40 L55 55 L75 25 L90 70 Z" 
            fill="currentColor" 
            opacity="0.2"
          />
          {/* Travel Route path with animation */}
          <motion.path 
            d="M15 80 Q 40 90, 50 65 T 85 40" 
            stroke="hsl(var(--secondary))" 
            strokeWidth="3"
            strokeDasharray="4 4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          {/* Location Pin */}
          <motion.g
            variants={{
              hover: { y: -3, transition: { duration: 0.3, yoyo: Infinity } }
            }}
          >
            <path 
              d="M50 65 C50 65 35 45 35 30 C35 20 42 15 50 15 C58 15 65 20 65 30 C65 45 50 65 50 65 Z" 
              fill="currentColor"
            />
            <circle cx="50" cy="30" r="6" fill="hsl(var(--background))" />
          </motion.g>
        </svg>
      </motion.div>
      <div className="flex flex-col">
        <span className="font-serif text-xl font-bold leading-none tracking-tight text-primary">VY</span>
        <span className="text-[10px] font-bold tracking-widest text-secondary uppercase">Tours & Travels</span>
      </div>
    </div>
  );
}