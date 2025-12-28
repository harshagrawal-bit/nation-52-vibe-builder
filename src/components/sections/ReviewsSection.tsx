import AnimatedSection from '@/components/AnimatedSection';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Rahul Sharma',
    rating: 5,
    text: 'Best nightlife experience in Pune! The DJ was amazing and cocktails were top-notch. Will definitely come back!',
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  },
  {
    name: 'Priya Patel',
    rating: 5,
    text: 'The ambiance is absolutely stunning. Perfect place for a night out with friends. Loved the VIP section!',
    date: '1 month ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
  {
    name: 'Vikram Joshi',
    rating: 4,
    text: 'Great food, excellent service, and the music selection is always on point. The signature cocktails are a must-try!',
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  },
  {
    name: 'Ananya Desai',
    rating: 5,
    text: 'Celebrated my birthday here and it was unforgettable! The staff made us feel so special. Highly recommend!',
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
  {
    name: 'Karan Mehta',
    rating: 5,
    text: 'Nation 52 sets the bar high for nightlife in Pune. The energy, the crowd, everything is perfect!',
    date: '2 months ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Our <span className="text-gradient-gold">Guests</span> Say
          </h2>
          
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.8</span>
            <span className="text-muted-foreground">based on 500+ reviews</span>
          </div>
          
          <a 
            href="https://www.google.com/maps/place/Nation+52"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            View all Google Reviews →
          </a>
        </AnimatedSection>
        
        {/* Reviews carousel */}
        <div className="relative">
          <motion.div 
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 0.1}
                className="flex-shrink-0 w-[350px] snap-center"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-card border border-border/50 h-full">
                  <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    "{review.text}"
                  </p>
                  
                  <span className="text-xs text-muted-foreground/60">{review.date}</span>
                </div>
              </AnimatedSection>
            ))}
          </motion.div>
          
          {/* Fade edges */}
          <div className="absolute top-0 left-0 bottom-6 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-6 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
