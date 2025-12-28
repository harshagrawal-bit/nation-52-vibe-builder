import AnimatedSection from '@/components/AnimatedSection';
import { Calendar, Clock, Music } from 'lucide-react';

const events = [
  {
    title: 'Bollywood Nights',
    date: 'Every Friday',
    time: '9 PM onwards',
    dj: 'DJ Priya',
    image: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400',
    featured: true,
  },
  {
    title: 'EDM Saturday',
    date: 'Every Saturday',
    time: '10 PM onwards',
    dj: 'DJ Karan',
    image: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?w=400',
    featured: false,
  },
  {
    title: 'Retro Sunday',
    date: 'Every Sunday',
    time: '8 PM onwards',
    dj: 'DJ Rahul',
    image: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400',
    featured: false,
  },
  {
    title: 'New Year Bash 2025',
    date: 'Dec 31, 2024',
    time: '8 PM - 4 AM',
    dj: 'International DJ Lineup',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400',
    featured: true,
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Upcoming Events
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What's <span className="text-gradient-gold">Happening</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't miss out on our legendary nights. Book your spot before they're gone.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <AnimatedSection key={event.title} delay={index * 0.1}>
              <div className={`group relative rounded-2xl overflow-hidden ${
                event.featured ? 'md:col-span-1' : ''
              }`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="relative p-8 min-h-[280px] flex flex-col justify-end">
                  {event.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                  
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-primary" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Music className="w-4 h-4 text-primary" />
                      {event.dj}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => window.open('https://wa.me/917972202151?text=Hi, I want to book for ' + event.title, '_blank')}
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Reserve Now →
                  </button>
                </div>
                
                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/50 transition-colors duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
