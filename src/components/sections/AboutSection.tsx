import AnimatedSection from '@/components/AnimatedSection';
import { Wine, Music, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Wine,
    title: 'Signature Cocktails',
    description: 'Crafted by master mixologists using premium spirits and fresh ingredients.',
  },
  {
    icon: Music,
    title: 'Live DJ Nights',
    description: 'Experience the best beats from renowned DJs every weekend.',
  },
  {
    icon: Users,
    title: 'VIP Experience',
    description: 'Exclusive seating, bottle service, and personalized attention.',
  },
  {
    icon: Sparkles,
    title: 'Electric Ambiance',
    description: 'State-of-the-art lighting and sound for an immersive experience.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            More Than Just a <span className="text-gradient-gold">Bar</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nation 52 isn't just a destination—it's an experience. Nestled in the heart of Pune, 
            we've curated a space where sophistication meets nightlife energy. From our handcrafted 
            cocktails to our world-class DJ performances, every detail is designed to create 
            unforgettable memories.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <div className="group relative p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-500 h-full">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
