import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">+</span>
              </div>
              <span className="text-xl font-bold">MedCare Clinic</span>
            </div>
            <p className="text-background/80">
              Providing exceptional healthcare services with compassion, innovation, and excellence for over 15 years.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
              <Linkedin className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-background/80">
              <li className="hover:text-background cursor-pointer">General Medicine</li>
              <li className="hover:text-background cursor-pointer">Cardiology</li>
              <li className="hover:text-background cursor-pointer">Ophthalmology</li>
              <li className="hover:text-background cursor-pointer">Neurology</li>
              <li className="hover:text-background cursor-pointer">Pediatrics</li>
              <li className="hover:text-background cursor-pointer">Emergency Care</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/80">
              <li className="hover:text-background cursor-pointer">About Us</li>
              <li className="hover:text-background cursor-pointer">Our Doctors</li>
              <li className="hover:text-background cursor-pointer">Patient Portal</li>
              <li className="hover:text-background cursor-pointer">Insurance</li>
              <li className="hover:text-background cursor-pointer">Careers</li>
              <li className="hover:text-background cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Medical Center Drive, Health City, HC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@medcareclinic.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 MedCare Clinic. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};