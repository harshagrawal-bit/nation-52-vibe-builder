import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-card" />
      
      <div className="relative container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Find Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Visit <span className="text-gradient-gold">Nation 52</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden h-[400px] border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.953285726069!2d73.80765841488946!3d18.530823987401577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3cc19e8f8b%3A0x8f8f8f8f8f8f8f8f!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Overlay button */}
              <a
                href="https://maps.app.goo.gl/b7fknAzvFXxyffTeA"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto"
              >
                <Button variant="gold" className="w-full md:w-auto">
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                </Button>
              </a>
            </div>
          </AnimatedSection>
          
          {/* Info */}
          <AnimatedSection delay={0.4} className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Nation 52, FC Road<br />
                    Shivajinagar, Pune 411004<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Opening Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Thursday: 5:00 PM - 1:00 AM</p>
                    <p>Friday - Saturday: 5:00 PM - 3:00 AM</p>
                    <p>Sunday: 4:00 PM - 12:00 AM</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Reservations</h3>
                  <p className="text-muted-foreground mb-3">
                    For table bookings and VIP reservations:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('tel:+917972202151', '_self')}
                    >
                      <Phone className="w-4 h-4" />
                      +91 79722 02151
                    </Button>
                    <Button 
                      variant="gold" 
                      size="sm"
                      onClick={() => window.open('https://wa.me/917972202151?text=Hi, I would like to book a table at Nation 52', '_blank')}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
