import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Heart, Users, Award } from 'lucide-react';
import clinicHero from '@/assets/clinic-hero.jpg';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={clinicHero}
          alt="Modern medical clinic interior"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      </div>
      
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Your Mind,{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Care
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Professional psychiatric care with empathy and understanding. 
                Dr. Sharma's clinic provides comprehensive mental health services in Undri, Pune.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Emergency Care
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">1</div>
                <div className="text-sm text-muted-foreground">Expert Psychiatrist</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">5★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">Mental Health Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-medical-blue-light rounded-lg">
                    <span className="font-medium">Crisis Support</span>
                    <span className="text-sm text-primary">Available</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-medical-green-light rounded-lg">
                    <span className="font-medium">Online Consultation</span>
                    <span className="text-sm text-accent">Book Now</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-medical-blue-light rounded-lg">
                    <span className="font-medium">Therapy Sessions</span>
                    <span className="text-sm text-primary">Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-border/50">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-2">Insurance Accepted</h3>
                <p className="text-muted-foreground mb-4">
                  We accept most major insurance plans. Contact us to verify your coverage.
                </p>
                <Button variant="outline" className="w-full">
                  Check Insurance
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};