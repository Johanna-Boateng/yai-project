
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    content: "We've tried countless mosquito repellents, but MosquiFree is the only one that actually works without making us feel like we're breathing in chemicals. It's been a game changer for our evening patio dinners.",
    author: "Sarah Johnson",
    role: "Mother of three",
    rating: 5
  },
  {
    content: "Living near a lake meant constant mosquito problems until I discovered MosquiFree. The herbal scent is pleasant, and I can finally enjoy my garden in the evenings without being eaten alive.",
    author: "Michael Chen",
    role: "Gardening enthusiast",
    rating: 5
  },
  {
    content: "I was skeptical about natural mosquito repellents, but after using MosquiFree during our family camping trip, I'm converted. It worked better than the chemical sprays we used to rely on.",
    author: "Emma Rodriguez",
    role: "Outdoor adventurer",
    rating: 4
  },
  {
    content: "As someone sensitive to strong scents and chemicals, finding MosquiFree was a relief. It's effective without triggering my allergies, and I love that it's safe to use around my pets.",
    author: "David Miller",
    role: "Health-conscious consumer",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="glass-card p-8 h-full flex flex-col">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              "h-5 w-5",
              index < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            )}
          />
        ))}
      </div>
      <p className="text-mosqui-800 mb-6 flex-grow">{testimonial.content}</p>
      <div>
        <p className="font-semibold">{testimonial.author}</p>
        <p className="text-sm text-mosqui-600">{testimonial.role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const maxVisibleCards = 3;
  const maxIndex = testimonials.length - maxVisibleCards;
  
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + maxVisibleCards
  );

  const next = useCallback(() => {
    if (currentIndex < maxIndex && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [currentIndex, maxIndex, isAnimating]);

  const prev = useCallback(() => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [currentIndex, isAnimating]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        if (currentIndex < maxIndex) {
          next();
        } else {
          setCurrentIndex(0);
        }
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, currentIndex, maxIndex, next]);

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-mosqui-50"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="section-container">
        <div 
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-mosqui-100 text-mosqui-800 text-xs font-medium tracking-wide mb-4">
            Trusted By Many
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            Discover how MosquiFree has transformed the way people enjoy their indoor and outdoor spaces, free from mosquito worries.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "transition-all duration-500",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className={cn(
                "h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300",
                currentIndex === 0 
                  ? "bg-mosqui-100 text-mosqui-400 cursor-not-allowed" 
                  : "bg-mosqui-100 text-mosqui-700 hover:bg-mosqui-200"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className={cn(
                "h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300",
                currentIndex >= maxIndex 
                  ? "bg-mosqui-100 text-mosqui-400 cursor-not-allowed" 
                  : "bg-mosqui-100 text-mosqui-700 hover:bg-mosqui-200"
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
