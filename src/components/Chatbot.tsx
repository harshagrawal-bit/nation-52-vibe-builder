import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: number;
  type: 'bot' | 'user';
  text: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    type: 'bot',
    text: "Welcome to Nation 52! 🍸 I'm here to help you with reservations, menu info, or any questions. How can I assist you tonight?",
  },
];

const quickQuestions = [
  'What are your opening hours?',
  'Do you have VIP sections?',
  'How can I book a table?',
  'What events do you have?',
];

const getResponse = (question: string): string => {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes('hour') || lowerQuestion.includes('open') || lowerQuestion.includes('time')) {
    return "We're open Monday-Thursday 5PM-1AM, Friday-Saturday 5PM-3AM, and Sunday 4PM-12AM. Weekend nights are the best for the full nightlife experience! 🎉";
  }
  
  if (lowerQuestion.includes('vip') || lowerQuestion.includes('section') || lowerQuestion.includes('private')) {
    return "Yes! We have exclusive VIP sections with premium bottle service, dedicated servers, and the best views of the DJ booth. Contact us on WhatsApp at +91 79722 02151 to reserve! 🥂";
  }
  
  if (lowerQuestion.includes('book') || lowerQuestion.includes('reserv') || lowerQuestion.includes('table')) {
    return "Booking is easy! You can WhatsApp us at +91 79722 02151 or call directly. For weekends, we recommend booking at least 2-3 days in advance. 📅";
  }
  
  if (lowerQuestion.includes('event') || lowerQuestion.includes('dj') || lowerQuestion.includes('party')) {
    return "We have Bollywood Nights every Friday, EDM Saturday, and Retro Sunday! Plus special events for New Year, festivals, and more. Check our Events section for the full lineup! 🎧";
  }
  
  if (lowerQuestion.includes('menu') || lowerQuestion.includes('food') || lowerQuestion.includes('drink') || lowerQuestion.includes('cocktail')) {
    return "Our menu features signature cocktails, premium mocktails, bar snacks, and a full main course. Try our Nation 52 Special cocktail - it's a crowd favorite! Check the Menu section for details. 🍹";
  }
  
  if (lowerQuestion.includes('location') || lowerQuestion.includes('where') || lowerQuestion.includes('address') || lowerQuestion.includes('direction')) {
    return "We're located on FC Road, Shivajinagar, Pune 411004. Easy to find and there's parking nearby! Click the 'Get Directions' button in the hero section for Google Maps. 📍";
  }
  
  if (lowerQuestion.includes('price') || lowerQuestion.includes('cost') || lowerQuestion.includes('expensive')) {
    return "Our cocktails range from ₹450-₹700, mocktails ₹280-₹350, and food items from ₹420-₹1200. We offer excellent value for a premium experience! 💰";
  }
  
  if (lowerQuestion.includes('dress') || lowerQuestion.includes('code') || lowerQuestion.includes('wear')) {
    return "Smart casual is the vibe! We recommend stylish attire - no shorts, slippers, or sportswear. Looking good is part of the Nation 52 experience! 👔";
  }
  
  return "Great question! For detailed information, please WhatsApp us at +91 79722 02151 or call us directly. Our team will be happy to assist you! 📱";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;
    
    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      text: text.trim(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        type: 'bot',
        text: getResponse(text),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[calc(100%-2rem)] md:w-[380px] h-[500px] max-h-[80vh] rounded-2xl bg-card border border-border shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary/20 to-primary/10 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Nation 52 Assistant</h4>
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-background/50 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    message.type === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-br-md' 
                      : 'bg-secondary text-secondary-foreground rounded-bl-md'
                  }`}>
                    {message.text}
                  </div>
                  {message.type === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-secondary p-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Quick questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Input */}
            <div className="p-4 border-t border-border">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full bg-secondary text-secondary-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" size="icon" variant="gold" className="rounded-full">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
