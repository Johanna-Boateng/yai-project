
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const benefits = [
  "No more itchy mosquito bites",
  "Enjoy outdoor spaces without worry",
  "Sleep soundly all night long",
  "Effective against multiple mosquito species",
  "Safe alternative to chemical repellents",
  "Pleasant herbal aroma that humans enjoy",
  "Cleaner indoor air quality",
  "Complementary to other protective measures"
];

const Benefits = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="benefits" className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={textRef} 
            className={cn(
              "transition-all duration-700 ease-out",
              textInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-mosqui-100 text-mosqui-800 text-xs font-medium tracking-wide mb-4">
              Enhanced Living
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enjoy Life Without <span className="text-mosqui-700">Mosquito Worries</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              MosquiFree coils don't just repel mosquitoes - they enhance your quality of life in multiple ways, letting you fully enjoy indoor and outdoor spaces.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-mosqui-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-mosqui-700" />
                  </div>
                  <span className="text-mosqui-800">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="btn-primary">
                Experience the Benefits
              </a>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className={cn(
              "relative transition-all duration-700 ease-out",
              imageInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                alt="Peaceful outdoor setting protected by MosquiFree" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mosqui-900/30 to-transparent"></div>
              
              {/* Floating stats card */}
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 backdrop-blur-lg bg-white/70">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-mosqui-700">8+ hrs</p>
                    <p className="text-sm text-mosqui-800">Protection</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-mosqui-700">100%</p>
                    <p className="text-sm text-mosqui-800">Natural</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-mosqui-100 rounded-full blur-xl opacity-70"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-mosqui-50 rounded-full blur-xl opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
