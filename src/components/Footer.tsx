import Logo from './Logo';
import { CONTACT_INFO, generateWhatsAppLink } from '../data/constants';
import { Instagram, Facebook, Youtube, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6 inline-block">
              <Logo />
            </div>
            <p className="text-muted-foreground mb-6">
              Making Maharashtra travel memories, one journey at a time. Your trusted family-run travel partner.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#explore" className="hover:text-primary transition-colors">Explore Maharashtra</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors">Tour Packages</a></li>
              <li><a href="#experiences" className="hover:text-primary transition-colors">Experiences</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-6">Popular Tours</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#packages" className="hover:text-primary transition-colors">Lonavala Escapes</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors">Mahabaleshwar Retreats</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors">Konkan Coastal</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors">Heritage Trails</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors">Nashik Vineyard Tour</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <span className="block text-sm font-bold text-foreground mb-1">Official WhatsApp (Yogesh)</span>
                <a href={generateWhatsAppLink()} target="_blank" rel="noreferrer" className="text-primary font-medium hover:underline">
                  +91 {CONTACT_INFO.yogesh}
                </a>
              </li>
              <li>
                <span className="block text-sm font-bold text-foreground mb-1">Direct Calling (Vrushali)</span>
                <span>+91 {CONTACT_INFO.vrushali}</span>
              </li>
              <li className="flex gap-3 pt-2">
                <Mail size={20} className="text-secondary shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={20} className="text-secondary shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VY Tours & Travels. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}