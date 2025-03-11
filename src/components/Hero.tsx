
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-mosqui-50 to-white opacity-70"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-mosqui-100 mix-blend-multiply blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-orange-50 mix-blend-multiply blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-medium tracking-wide">
              100% Natural Protection
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Breathe Easy. <br />
              <span className="text-mosqui-700">Live Mosquito Free.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Effective, natural protection using premium herbal ingredients. 
              Our mosquito coils provide up to 8 hours of protection without harsh chemicals.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#features" className="btn-primary flex items-center justify-center space-x-2">
                <span>Discover MoskiFree</span>
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center space-x-2">
                <span>Learn More</span>
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Product image with simulated 3D effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-5/6 h-5/6">
                  <img 
                    src="hero-image.png" 
                    alt="MoskiFree Herbal Coil" 
                    className="absolute inset-0 w-full h-full object-cover "
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <a 
            href="#features" 
            className="flex flex-col items-center text-orange-600 hover:text-orange-700 transition-colors duration-300 animate-bounce"
          >
            <span className="text-sm font-medium mb-2">Discover More</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
