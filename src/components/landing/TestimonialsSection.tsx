import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star} from 'lucide-react';

interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  username: string;
  level: number;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

// Sample testimonials data - DEFINED OUTSIDE COMPONENT to prevent re-creation
const testimonialsData: Testimonial[] = [
  {
    id: '1',
    rating: 5,
    quote: "StarkMole combines the nostalgic fun of Whack-a-Mole with cutting edge blockchain technology. I love earning rewards while having fun!",
    username: "CryptoGamer",
    level: 17,
    avatar: "👨‍💻"
  },
  {
    id: '2',
    rating: 5,
    quote: "The daily challenges keep me coming back every day. It's addictive knowing that my scores are permanently recorded on the blockchain!",
    username: "BlockchainBabe",
    level: 15,
    avatar: "👩‍🦰"
  },
  {
    id: '3',
    rating: 5,
    quote: "I've been playing games for years, but StarkMole is the first one where I actually own my achievements and rewards. The StarkNet integration is seamless!",
    username: "TokenKing",
    level: 20,
    avatar: "👑"
  },
  {
    id: '4',
    rating: 5,
    quote: "Amazing gameplay combined with real rewards. The community is fantastic and the leaderboard competition keeps things exciting!",
    username: "MoleHunter",
    level: 12,
    avatar: "🎯"
  },
  {
    id: '5',
    rating: 5,
    quote: "Finally, a game that respects my time and skills. Every session feels rewarding, and the NFT achievements are so cool!",
    username: "DigitalNinja",
    level: 25,
    avatar: "🥷"
  }
];

// TestimonialCard component - Clean scale hover on entire card
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  // Safety check
  if (!testimonial) {
    return null;
  }

  const { rating, quote, username, level, avatar } = testimonial;

  return (
    <motion.div
      className="relative transform transition-transform duration-300 hover:scale-105"
      layoutId={`testimonial-${testimonial.id}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main card container */}
      <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 h-full flex flex-col">
        
        {/* Star rating at the top */}
        <motion.div 
          className="flex space-x-1 mb-3 md:mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: 0.1 + (index * 0.05),
                type: "spring",
                stiffness: 200
              }}
            >
              <Star
                className={`w-4 h-4 md:w-5 md:h-5 ${
                  index < rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-600'
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote text - main content */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-200 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 flex-grow italic"
        >
          `{quote}`
        </motion.blockquote>

        {/* User info section at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center space-x-3"
        >
          {/* Avatar */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-lg md:text-xl text-white font-semibold">
            {avatar}
          </div>

          {/* User details */}
          <div className="flex-1">
            <h4 className="font-semibold text-white text-xs md:text-sm">
              {username}
            </h4>
            <p className="text-gray-400 text-xs">
              Level {level} Player
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => 
          prev + cardsPerView >= testimonialsData.length ? 0 : prev + 1
        );
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, cardsPerView]);

  const maxIndex = Math.max(0, testimonialsData.length - cardsPerView);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      goToPrevious();
    } else if (info.offset.x < -threshold) {
      goToNext();
    }
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);


  const visibleTestimonials = [];
  for (let i = 0; i < cardsPerView; i++) {
    const index = (currentIndex + i) % testimonialsData.length;
    visibleTestimonials.push(testimonialsData[index]);
  }

  return (
    <section className="py-8 md:py-16 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center">
      <div className="max-w-7xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What Players Say
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hear from our community of players about their StarkMole experience.
          </motion.p>
        </motion.div>


        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
       
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="absolute -left-2   xl:-left-0 2xl:-left-16 2xl:top-1/2 top-1/1 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="absolute -right-2 xl:-right-0 2xl:-right-16 2xl:top-1/2 top-1/1 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </motion.button>

          {/* Testimonials Grid */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className="cursor-grab active:cursor-grabbing"
          >
            <motion.div
              className={`grid gap-4 md:gap-6 ${
                cardsPerView === 1 
                  ? 'grid-cols-1' 
                  : cardsPerView === 2 
                  ? 'grid-cols-1 md:grid-cols-2' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}
              layout
            >
              <AnimatePresence mode="popLayout">
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${currentIndex}-${index}`}
                    initial={{ 
                      opacity: 0, 
                      scale: 0.8, 
                      y: 50,
                      rotateY: -90 
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 0,
                      rotateY: 0 
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.8, 
                      y: -50,
                      rotateY: 90 
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0 
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Pagination Dots */}
          <motion.div 
            className="flex justify-center mt-6 md:mt-8 space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  currentIndex === index
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;