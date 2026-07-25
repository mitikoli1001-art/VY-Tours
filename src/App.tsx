import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExploreSection from './components/ExploreSection';
import ExperiencesSection from './components/ExperiencesSection';
// import TourPackages from './components/TourPackages';
import MaharashtraMap from './components/MaharashtraMap';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-[100dvh] w-full flex flex-col font-sans bg-background text-foreground">
          <Navbar />
          
          <main className="flex-1 w-full flex flex-col">
            <Hero />
            <ExploreSection />
            <ExperiencesSection />src/pages
            {/* <TourPackages /> */}
            <MaharashtraMap />
            <WhyChooseUs />
            <AboutUs />
            <Gallery />
            <Testimonials />
            <ContactSection />
          </main>
          
          <Footer />
          <FloatingWhatsApp />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;