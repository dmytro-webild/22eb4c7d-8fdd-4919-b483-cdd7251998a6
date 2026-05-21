"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Raj Utsava"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Raj Utsava"
      description="Delicious Food & Memorable Celebrations"
      buttons={[
        {
          text: "Book Now",
          href: "#contact",
        },
        {
          text: "WhatsApp Us",
          href: "https://wa.me/919999999999",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-interior-with-blank-picture-hanging-damask-wall_1048-12656.jpg?_wi=1",
          imageAlt: "Luxury indian restaurant dining hall",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-meeting-dining-room-table-multiple-chairs_114579-2067.jpg",
          imageAlt: "Luxury meeting and dining room table and multiple chairs",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/baroque-style-with-fast-food-flowers_23-2149629985.jpg",
          imageAlt: "Baroque style with fast food and flowers",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/floral-seamless-pattern-design_23-2151021446.jpg",
          imageAlt: "Floral seamless pattern design",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/antique-chandelier-illuminates-elegant-rustic-living-room-generated-by-ai_188544-39081.jpg",
          imageAlt: "Antique chandelier illuminates elegant rustic living room",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Experience Excellence at Raj Utsava"
      description="Welcome to Raj Utsava Place And Restaurant. We specialize in crafting unforgettable dining experiences for families, birthdays, and special occasions."
      subdescription="Whether it's an intimate family dinner, a grand wedding celebration, or professional catering services, we bring passion to every plate and event."
      imageSrc="http://img.b2bpic.net/free-photo/beauty-details-this-lovely-table_8353-9904.jpg?_wi=1"
      mediaAnimation="slide-up"
      icon={Utensils}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Restaurant Dining",
          description: "Authentic flavors in a luxurious, modern setting.",
          imageSrc: "http://img.b2bpic.net/free-photo/wide-view-dining-hall-classic-design_114579-2224.jpg",
          imageAlt: "Wide view dining hall in classic design",
        },
        {
          title: "Birthday Party",
          description: "Host your special milestones in style.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-interior-with-blank-picture-hanging-damask-wall_1048-12656.jpg?_wi=2",
          imageAlt: "Wide view dining hall in classic design",
        },
        {
          title: "Wedding Hall",
          description: "Grand, beautifully decorated halls for big days.",
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-details-this-lovely-table_8353-9904.jpg?_wi=2",
          imageAlt: "Wide view dining hall in classic design",
        },
        {
          title: "Catering Service",
          description: "Bring our gourmet kitchen to your venue.",
          imageSrc: "http://img.b2bpic.net/free-photo/gyoza-black-cup-with-sushi_1150-22648.jpg?_wi=1",
          imageAlt: "Wide view dining hall in classic design",
        },
        {
          title: "Family Events",
          description: "Dedicated spaces for perfect family gatherings.",
          imageSrc: "http://img.b2bpic.net/free-photo/azerbaijani-dushbere-gurze-khingal-with-yogurt-tomato-sauce_114579-2901.jpg?_wi=1",
          imageAlt: "Wide view dining hall in classic design",
        },
      ]}
      title="Our Signature Services"
      description="Comprehensive hospitality solutions for all your event and dining needs."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Veg Momos",
          price: "$12",
          imageSrc: "http://img.b2bpic.net/free-photo/gyoza-black-cup-with-sushi_1150-22648.jpg?_wi=2",
        },
        {
          id: "2",
          name: "Fried Momos",
          price: "$14",
          imageSrc: "http://img.b2bpic.net/free-photo/azerbaijani-dushbere-gurze-khingal-with-yogurt-tomato-sauce_114579-2901.jpg?_wi=2",
        },
        {
          id: "3",
          name: "Paneer Chilli",
          price: "$18",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-fried-eggplants-potatoes-with-chili-sauce-plate_141793-2640.jpg",
        },
        {
          id: "4",
          name: "Noodles",
          price: "$15",
          imageSrc: "http://img.b2bpic.net/free-photo/spaghetti-bolognese-parmesan-top-side-view_140725-11344.jpg",
        },
        {
          id: "5",
          name: "Biryani",
          price: "$22",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-chicken-biryani-traditional-bowl_84443-65252.jpg",
        },
        {
          id: "6",
          name: "Refreshing Drinks",
          price: "$5",
          imageSrc: "http://img.b2bpic.net/free-photo/glass-bottles-with-colored-caps-full-sliced-citrus_23-2148149582.jpg",
        },
      ]}
      title="Our Delicacies"
      description="Savor the finest Indian and fusion cuisine crafted by our expert chefs."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardSix
      textboxLayout="inline-image"
      useInvertedBackground={false}
      features={[
        {
          title: "Interior View",
          description: "Sophisticated dining area.",
          imageSrc: "http://img.b2bpic.net/free-photo/event-hall-wooden-table-with-rustic-chairs_114579-2233.jpg",
        },
        {
          title: "Banquet Hall",
          description: "Spacious venue for events.",
          imageSrc: "http://img.b2bpic.net/free-photo/decorative-wooden-jacht-stands-before-picture-sea-port-wall_1304-3691.jpg",
        },
        {
          title: "Gourmet Cuisine",
          description: "Expertly prepared dishes.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-food-concept_23-2148510914.jpg",
        },
        {
          title: "Terrace View",
          description: "Relaxing outdoor atmosphere.",
          imageSrc: "http://img.b2bpic.net/free-photo/terrace-hotel-stuffed-with-soft-furnitures-green-space_114579-2724.jpg",
        },
        {
          title: "Celebrations",
          description: "Happy gathering spaces.",
          imageSrc: "http://img.b2bpic.net/free-photo/group-young-happy-people-communicating-while-having-lunch-together-dining-room_637285-3564.jpg",
        },
        {
          title: "Exquisite Desserts",
          description: "Sweet endings.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-yummy-cake-dessert-with-lemon-slices-coconut-candies-dark-background-pie-dessert-sweet-cake-candy-tea_140725-110308.jpg",
        },
      ]}
      title="Restaurant Gallery"
      description="A glimpse of our ambiance and gourmet presentations."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Rahul Sharma",
          handle: "@rahul",
          testimonial: "Excellent service and delicious food. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/horizontal-portrait-beautiful-positive-young-european-female-blue-shirt-dress-relaxing-home-looking-front-with-easy-carefree-smile_343059-3894.jpg",
        },
        {
          id: "2",
          name: "Ananya Gupta",
          handle: "@ananya",
          testimonial: "The best place for birthday parties. Beautiful decor.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/green-eyed-woman-with-stylish-bun-smiles_197531-17034.jpg",
        },
        {
          id: "3",
          name: "Vikram Singh",
          handle: "@vikram",
          testimonial: "We held our wedding reception here. Flawless execution.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-proposing-his-lover_23-2148060599.jpg",
        },
        {
          id: "4",
          name: "Neha Patel",
          handle: "@neha",
          testimonial: "Paneer Chilli is must try! Love the atmosphere.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport-terminal_107420-85070.jpg",
        },
        {
          id: "5",
          name: "Amit Kumar",
          handle: "@amit",
          testimonial: "Great family place with ample seating.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-woman-work_23-2149304146.jpg",
        },
      ]}
      showRating={true}
      title="Guest Testimonials"
      description="What our patrons say about their experience at Raj Utsava."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Visit us at Raj Utsava or reach out today for reservations and booking enquiries via phone or WhatsApp."
      buttons={[
        {
          text: "Call: +91 99999 99999",
          href: "tel:+919999999999",
        },
        {
          text: "WhatsApp",
          href: "https://wa.me/919999999999",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Raj Utsava"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Follow us on Instagram",
        href: "https://instagram.com",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
