import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import loungeInterior from '@/assets/lounge-interior.jpg';
import signatureCocktail from '@/assets/signature-cocktail.jpg';
import djNight from '@/assets/dj-night.jpg';

const galleryImages = [
  {
    src: loungeInterior,
    alt: 'Bar Interior',
    span: 'col-span-2 row-span-2',
  },
  {
    src: signatureCocktail,
    alt: 'Signature Cocktail',
    span: 'col-span-1 row-span-1',
  },
  {
    src: djNight,
    alt: 'DJ Performance',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=400',
    alt: 'VIP Lounge',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=400',
    alt: 'Cocktails',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=600',
    alt: 'Night Crowd',
    span: 'col-span-2 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400',
    alt: 'Restaurant View',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    alt: 'Food Plating',
    span: 'col-span-1 row-span-1',
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      
      <div className="relative container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Capture the <span className="text-gradient-gold">Vibe</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into the unforgettable experiences at Nation 52.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[180px]">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className={`group relative rounded-xl overflow-hidden cursor-pointer ${image.span}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-foreground font-medium text-sm bg-background/80 px-4 py-2 rounded-full backdrop-blur-sm">
                    View
                  </span>
                </div>
                
                {/* Border glow */}
                <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/50 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
