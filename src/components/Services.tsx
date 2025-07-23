import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Eye, 
  Stethoscope, 
  Brain, 
  Baby, 
  Shield,
  Activity,
  Pill,
  UserCheck
} from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Comprehensive heart care with advanced diagnostic tools and treatment options.',
    features: ['ECG & Echo', 'Heart Surgery', 'Preventive Care']
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Complete eye care services from routine exams to advanced surgical procedures.',
    features: ['Eye Exams', 'LASIK Surgery', 'Retinal Care']
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description: 'Primary healthcare services for patients of all ages with preventive focus.',
    features: ['Health Checkups', 'Vaccinations', 'Chronic Care']
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Specialized care for neurological conditions with latest treatment methods.',
    features: ['Brain Imaging', 'Stroke Care', 'Epilepsy Treatment']
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Dedicated healthcare services for infants, children, and adolescents.',
    features: ['Well-Child Visits', 'Immunizations', 'Growth Monitoring']
  },
  {
    icon: Shield,
    title: 'Emergency Care',
    description: '24/7 emergency medical services with rapid response capabilities.',
    features: ['Trauma Care', 'Critical Care', 'Ambulance Service']
  },
  {
    icon: Activity,
    title: 'Diagnostics',
    description: 'Advanced diagnostic imaging and laboratory services for accurate diagnosis.',
    features: ['MRI & CT Scans', 'Lab Tests', 'X-Ray Services']
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    description: 'On-site pharmacy with wide range of medications and prescription services.',
    features: ['Prescription Filling', 'Medication Counseling', 'Home Delivery']
  },
  {
    icon: UserCheck,
    title: 'Wellness Programs',
    description: 'Preventive health programs designed to maintain and improve your well-being.',
    features: ['Health Screenings', 'Nutrition Counseling', 'Fitness Programs']
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive healthcare services with cutting-edge technology 
            and compassionate care from our experienced medical professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};