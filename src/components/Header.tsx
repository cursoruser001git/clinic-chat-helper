import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock } from 'lucide-react';

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">+</span>
          </div>
          <span className="text-xl font-bold text-foreground">MedCare Clinic</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri 8AM-6PM</span>
            </div>
          </div>
          <Button onClick={() => scrollToSection('contact')}>
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};