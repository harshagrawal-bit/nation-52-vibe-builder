import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import MenuSection from '@/components/sections/MenuSection';
import NightlifeSection from '@/components/sections/NightlifeSection';
import EventsSection from '@/components/sections/EventsSection';
import GallerySection from '@/components/sections/GallerySection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import LocationSection from '@/components/sections/LocationSection';
import Footer from '@/components/sections/Footer';
import Chatbot from '@/components/Chatbot';
import StickyButtons from '@/components/StickyButtons';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nation 52 – Premium Restro Lounge & Bar in Pune | Nightlife, Cocktails & Events</title>
        <meta name="description" content="Experience Pune's finest nightlife at Nation 52. Premium cocktails, world-class DJs, VIP experiences, and unforgettable nights. Book your table now!" />
        <meta name="keywords" content="Nation 52, Pune bar, nightlife Pune, lounge bar, cocktails, DJ night, FC Road, premium bar, VIP lounge" />
        <meta property="og:title" content="Nation 52 – Premium Restro Lounge & Bar in Pune" />
        <meta property="og:description" content="Pune's premier destination for nightlife, cocktails, and unforgettable experiences." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://nation52.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <NightlifeSection />
          <EventsSection />
          <GallerySection />
          <ReviewsSection />
          <LocationSection />
        </main>
        <Footer />
        <Chatbot />
        <StickyButtons />
      </div>
    </>
  );
};

export default Index;
