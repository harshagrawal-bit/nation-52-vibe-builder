import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const menuCategories = [
  {
    id: 'cocktails',
    name: 'Signature Cocktails',
    items: [
      { name: 'Nation 52 Special', description: 'Vodka, passion fruit, lime, prosecco', price: '₹550' },
      { name: 'Golden Hour', description: 'Whiskey, honey, lemon, bitters', price: '₹650' },
      { name: 'Midnight Rose', description: 'Gin, rose syrup, elderflower, sparkling water', price: '₹500' },
      { name: 'Smoky Manhattan', description: 'Bourbon, sweet vermouth, smoked with applewood', price: '₹700' },
    ],
  },
  {
    id: 'mocktails',
    name: 'Premium Mocktails',
    items: [
      { name: 'Virgin Mojito', description: 'Fresh mint, lime, soda, sugar', price: '₹300' },
      { name: 'Blue Lagoon', description: 'Blue curacao syrup, lemonade, sprite', price: '₹280' },
      { name: 'Tropical Sunset', description: 'Mango, orange, grenadine, pineapple', price: '₹320' },
      { name: 'Berry Blast', description: 'Mixed berries, lemon, sparkling water', price: '₹350' },
    ],
  },
  {
    id: 'snacks',
    name: 'Bar Snacks',
    items: [
      { name: 'Truffle Fries', description: 'Hand-cut fries with truffle oil & parmesan', price: '₹450' },
      { name: 'Loaded Nachos', description: 'Cheese, jalapeños, salsa, guacamole', price: '₹420' },
      { name: 'Chicken Wings', description: 'Choice of BBQ, buffalo, or honey sriracha', price: '₹520' },
      { name: 'Mezze Platter', description: 'Hummus, baba ganoush, pita, olives', price: '₹580' },
    ],
  },
  {
    id: 'mains',
    name: 'Main Course',
    items: [
      { name: 'Grilled Lamb Chops', description: 'Herb-crusted with mint sauce', price: '₹1200' },
      { name: 'Pan-Seared Salmon', description: 'With asparagus and lemon butter', price: '₹980' },
      { name: 'Butter Chicken', description: 'Classic creamy tomato curry', price: '₹650' },
      { name: 'Mushroom Risotto', description: 'Arborio rice, mixed mushrooms, truffle', price: '₹720' },
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
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {activeItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-primary font-semibold text-lg whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                
                {/* Decorative line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
