import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import doctorPortrait from '@/assets/doctor-portrait.jpg';

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                About Dr. Sharma's Psychiatric Clinic
              </h2>
              <p className="text-xl text-muted-foreground">
                Providing exceptional mental health services for over 15 years with a commitment 
                to empathy, understanding, and excellence in psychiatric care.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Patient-Centered Mental Health</h3>
                  <p className="text-muted-foreground">
                    We put our patients' mental well-being first, providing personalized therapy plans and 
                    comprehensive psychiatric care tailored to individual mental health needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Evidence-Based Treatment</h3>
                  <p className="text-muted-foreground">
                    Modern therapeutic approaches and evidence-based treatments ensure accurate 
                    assessment and effective mental health outcomes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Experienced Psychiatrist</h3>
                  <p className="text-muted-foreground">
                    Dr. Sharma is a board-certified psychiatrist with over 15 years of experience 
                    in treating various mental health conditions with compassion and expertise.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Patients Helped</div>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="px-8">
              Meet Our Team
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={doctorPortrait}
                  alt="Professional medical doctor"
                  className="w-full h-80 object-cover"
                />
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Operating Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="font-medium">10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span>Crisis Support</span>
                    <span className="font-medium text-accent">Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};