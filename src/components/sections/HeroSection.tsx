import { Button } from '@/components/ui/button';
import VideoBackground from '@/components/VideoBackground';
import AnimatedSection from '@/components/AnimatedSection';
import { Phone, MapPin, Calendar, ChevronDown } from 'lucide-react';
import heroVideo from '@/assets/hero-lounge-video.mp4';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground 
        videoUrl={heroVideo}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimatedSection delay={0.2}>
          <span className="inline-block text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Pune's Premier
          </span>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">Nation</span>
            <span className="text-gradient-gold"> 52</span>
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.6}>
          <p className="font-display text-xl md:text-3xl text-foreground/90 italic mb-2">
            Restro Lounge & Bar
          </p>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10">
            Where nightlife meets elegance. Premium cocktails, electric ambiance, unforgettable moments.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="gold" 
              size="lg"
              onClick={() => window.open('https://wa.me/917972202151?text=Hi, I would like to book a table at Nation 52', '_blank')}
            >
              <Calendar className="w-5 h-5" />
              Book a Table
            </Button>
            
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('tel:+917972202151', '_self')}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
            
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://maps.app.goo.gl/b7fknAzvFXxyffTeA', '_blank')}
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </Button>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer animate-bounce"
        onClick={scrollToNext}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
