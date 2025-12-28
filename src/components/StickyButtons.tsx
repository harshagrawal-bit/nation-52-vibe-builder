import { Phone, MessageCircle } from 'lucide-react';

const StickyButtons = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:hidden z-40 flex gap-2">
      <a
        href="tel:+917972202151"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-secondary text-secondary-foreground font-medium shadow-lg"
      >
        <Phone className="w-5 h-5" />
        Call
      </a>
      <a
        href="https://wa.me/917972202151?text=Hi, I would like to book a table at Nation 52"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  );
};

export default StickyButtons;
