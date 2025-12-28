import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

// Import menu images
import cocktail1 from '@/assets/menu/cocktail-1.jpg';
import cocktail2 from '@/assets/menu/cocktail-2.jpg';
import cocktail3 from '@/assets/menu/cocktail-3.jpg';
import cocktail4 from '@/assets/menu/cocktail-4.jpg';
import mocktail1 from '@/assets/menu/mocktail-1.jpg';
import mocktail2 from '@/assets/menu/mocktail-2.jpg';
import mocktail3 from '@/assets/menu/mocktail-3.jpg';
import mocktail4 from '@/assets/menu/mocktail-4.jpg';
import snack1 from '@/assets/menu/snack-1.jpg';
import snack2 from '@/assets/menu/snack-2.jpg';
import snack3 from '@/assets/menu/snack-3.jpg';
import snack4 from '@/assets/menu/snack-4.jpg';
import main1 from '@/assets/menu/main-1.jpg';
import main2 from '@/assets/menu/main-2.jpg';
import main3 from '@/assets/menu/main-3.jpg';
import main4 from '@/assets/menu/main-4.jpg';

const menuCategories = [
  {
    id: 'cocktails',
    name: 'Signature Cocktails',
    items: [
      { name: 'Nation 52 Special', description: 'Vodka, passion fruit, lime, prosecco', price: '₹550', image: cocktail1 },
      { name: 'Golden Hour', description: 'Whiskey, honey, lemon, bitters', price: '₹650', image: cocktail2 },
      { name: 'Midnight Rose', description: 'Gin, rose syrup, elderflower, sparkling water', price: '₹500', image: cocktail3 },
      { name: 'Smoky Manhattan', description: 'Bourbon, sweet vermouth, smoked with applewood', price: '₹700', image: cocktail4 },
    ],
  },
  {
    id: 'mocktails',
    name: 'Premium Mocktails',
    items: [
      { name: 'Virgin Mojito', description: 'Fresh mint, lime, soda, sugar', price: '₹300', image: mocktail1 },
      { name: 'Blue Lagoon', description: 'Blue curacao syrup, lemonade, sprite', price: '₹280', image: mocktail2 },
      { name: 'Tropical Sunset', description: 'Mango, orange, grenadine, pineapple', price: '₹320', image: mocktail3 },
      { name: 'Berry Blast', description: 'Mixed berries, lemon, sparkling water', price: '₹350', image: mocktail4 },
    ],
  },
  {
    id: 'snacks',
    name: 'Bar Snacks',
    items: [
      { name: 'Truffle Fries', description: 'Hand-cut fries with truffle oil & parmesan', price: '₹450', image: snack1 },
      { name: 'Loaded Nachos', description: 'Cheese, jalapeños, salsa, guacamole', price: '₹420', image: snack2 },
      { name: 'Chicken Wings', description: 'Choice of BBQ, buffalo, or honey sriracha', price: '₹520', image: snack3 },
      { name: 'Mezze Platter', description: 'Hummus, baba ganoush, pita, olives', price: '₹580', image: snack4 },
    ],
  },
  {
    id: 'mains',
    name: 'Main Course',
    items: [
      { name: 'Grilled Lamb Chops', description: 'Herb-crusted with mint sauce', price: '₹1200', image: main1 },
      { name: 'Pan-Seared Salmon', description: 'With asparagus and lemon butter', price: '₹980', image: main2 },
      { name: 'Butter Chicken', description: 'Classic creamy tomato curry', price: '₹650', image: main3 },
      { name: 'Mushroom Risotto', description: 'Arborio rice, mixed mushrooms, truffle', price: '₹720', image: main4 },
    ],
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('cocktails');

  const activeItems = menuCategories.find(cat => cat.id === activeCategory)?.items || [];

  return (
    <section id="menu" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Taste the <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From crafted cocktails to gourmet delights, every item is prepared with passion and precision.
          </p>
        </AnimatedSection>
        
        {/* Category Tabs */}
        <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground glow-gold'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </AnimatedSection>
        
        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {activeItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 py-4 pr-4 flex flex-col justify-center">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="text-primary font-semibold text-lg whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
