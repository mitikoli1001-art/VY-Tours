import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { generateWhatsAppLink } from '../data/constants';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Explore Maharashtra', href: '#explore' },
  { label: 'Tour Packages', href: '#packages' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-3 frosted-glass border-b border-border/50 shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="relative z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
        >
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 py-0.5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Connect With Us
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="relative z-50 lg:hidden p-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg lg:hidden"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-lg font-medium text-foreground/90 hover:text-primary py-2 border-b border-border/50"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 text-center"
                >
                  Connect With Us on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}