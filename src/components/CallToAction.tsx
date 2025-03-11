
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="contact" 
      ref={ref}
      className={cn(
        "py-24 bg-white transition-all duration-1000",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="section-container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-mosqui-700 via-mosqui-600 to-orange-600"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-white/30"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-4 border-white/20"></div>
            <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-orange-500/50"></div>
          </div>
          
          <div className="relative py-16 px-8 md:py-24 md:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Enjoy Mosquito-Free Living?
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have made MoskiFree 
                an essential part of their home and outdoor protection routine.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="#features" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg 
                           transition-all duration-300 ease-in-out transform hover:scale-[1.02] 
                           focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 
                           shadow-lg flex items-center"
                >
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="#benefits" 
                  className="text-white hover:text-white/90 underline underline-offset-4 px-8 py-4
                          transition-colors duration-300"
                >
                  View Benefits
                </a>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-white/60 text-sm">
                  Natural protection • 100% herbal ingredients • Made with ♥ in nature
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
