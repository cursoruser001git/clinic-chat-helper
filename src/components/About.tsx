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
                About MedCare Clinic
              </h2>
              <p className="text-xl text-muted-foreground">
                Providing exceptional healthcare services for over 15 years with a commitment 
                to innovation, compassion, and excellence in medical care.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Patient-Centered Care</h3>
                  <p className="text-muted-foreground">
                    We put our patients first, providing personalized treatment plans and 
                    comprehensive care tailored to individual needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Advanced Technology</h3>
                  <p className="text-muted-foreground">
                    State-of-the-art medical equipment and technology ensure accurate 
                    diagnosis and effective treatment outcomes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Experienced Team</h3>
                  <p className="text-muted-foreground">
                    Our board-certified physicians and healthcare professionals bring 
                    decades of combined experience to your care.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">25+</div>
                  <div className="text-sm text-muted-foreground">Medical Experts</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
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
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Emergency Only</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span>Emergency</span>
                    <span className="font-medium text-accent">24/7 Available</span>
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