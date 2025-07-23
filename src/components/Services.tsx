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
    icon: Brain,
    title: 'Individual Therapy',
    description: 'One-on-one counseling sessions for depression, anxiety, and other mental health concerns.',
    features: ['Depression Treatment', 'Anxiety Management', 'Trauma Therapy']
  },
  {
    icon: Heart,
    title: "Couple's Therapy",
    description: 'Relationship counseling to improve communication and resolve conflicts.',
    features: ['Relationship Issues', 'Communication Skills', 'Conflict Resolution']
  },
  {
    icon: Eye,
    title: 'Psychological Assessment',
    description: 'Comprehensive psychological evaluations and diagnostic assessments.',
    features: ['Mental Health Evaluation', 'Cognitive Testing', 'Personality Assessment']
  },
  {
    icon: Pill,
    title: 'Medication Management',
    description: 'Expert psychiatric medication consultation and monitoring.',
    features: ['Prescription Management', 'Side Effect Monitoring', 'Dosage Adjustment']
  },
  {
    icon: Baby,
    title: 'Child & Adolescent Psychiatry',
    description: 'Specialized mental health care for children and teenagers.',
    features: ['Behavioral Issues', 'ADHD Treatment', 'Developmental Concerns']
  },
  {
    icon: Shield,
    title: 'Crisis Intervention',
    description: 'Immediate support and intervention for mental health emergencies.',
    features: ['Emergency Support', 'Crisis Counseling', 'Safety Planning']
  },
  {
    icon: Activity,
    title: 'Group Therapy',
    description: 'Therapeutic group sessions for shared experiences and peer support.',
    features: ['Support Groups', 'Skill Building', 'Peer Learning']
  },
  {
    icon: UserCheck,
    title: 'Wellness Counseling',
    description: 'Preventive mental health programs to maintain psychological well-being.',
    features: ['Stress Management', 'Mindfulness Training', 'Life Coaching']
  },
  {
    icon: Stethoscope,
    title: 'Psychiatric Consultation',
    description: 'Professional consultation for complex mental health conditions.',
    features: ['Diagnostic Clarification', 'Treatment Planning', 'Second Opinions']
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Psychiatric Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive mental health services with evidence-based treatments 
            and compassionate care from our experienced psychiatric professional.
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