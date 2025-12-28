import VideoBackground from '@/components/VideoBackground';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Calendar, Music } from 'lucide-react';

const NightlifeSection = () => {
  return (
    <section id="nightlife" className="relative min-h-screen flex items-center py-24 overflow-hidden">
      <VideoBackground 
        videoUrl="https://videos.pexels.com/video-files/3116302/3116302-uhd_2560_1440_25fps.mp4"
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <AnimatedSection>
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              Nightlife Experience
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Where the <span className="text-gradient-gold">Night</span> Comes Alive
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <p className="text-foreground/90 text-lg leading-relaxed mb-8">
              Every weekend transforms Nation 52 into Pune's hottest nightlife destination. 
              World-class DJs, immersive light shows, and an electric crowd create an 
              atmosphere you won't find anywhere else. From house beats to Bollywood hits, 
              our sound system delivers an unmatched audio experience.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="gold" 
                size="lg"
                onClick={() => window.open('https://wa.me/917972202151?text=Hi, I would like to reserve for DJ night', '_blank')}
              >
                <Calendar className="w-5 h-5" />
                Reserve Your Spot
              </Button>
              
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Music className="w-5 h-5" />
                View Events
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Stats */}
      <div className="absolute bottom-12 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.8}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '100+', label: 'DJ Nights' },
                { value: '50K+', label: 'Happy Guests' },
                { value: '4.8', label: 'Rating' },
                { value: '3AM', label: 'Party Till' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default NightlifeSection;
