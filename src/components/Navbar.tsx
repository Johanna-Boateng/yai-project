
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when mobile menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-4',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex items-center space-x-2 text-mosqui-700 transition-transform duration-300 hover:scale-105"
            >
              <Leaf className="h-8 w-8 text-mosqui-600" />
              <span className="text-xl font-semibold">MoskiFree</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-mosqui-800 hover:text-mosqui-600 transition-colors duration-300">
              Features
            </a>
            <a href="#benefits" className="text-sm font-medium text-mosqui-800 hover:text-mosqui-600 transition-colors duration-300">
              Benefits
            </a>
            <a href="#testimonials" className="text-sm font-medium text-mosqui-800 hover:text-mosqui-600 transition-colors duration-300">
              Testimonials
            </a>
            <a href="#contact" className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
              <span>Learn More</span>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-mosqui-800 hover:text-mosqui-600 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out pt-20',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="px-4 py-6 space-y-6 flex flex-col h-full">
            <a
              href="#features"
              onClick={closeMenu}
              className="text-lg font-medium py-3 px-4 rounded-lg text-mosqui-800 hover:bg-mosqui-50 transition-colors duration-300 flex items-center"
            >
              <span className="w-2 h-2 bg-mosqui-600 rounded-full mr-3"></span>
              Features
            </a>
            <a
              href="#benefits"
              onClick={closeMenu}
              className="text-lg font-medium py-3 px-4 rounded-lg text-mosqui-800 hover:bg-mosqui-50 transition-colors duration-300 flex items-center"
            >
              <span className="w-2 h-2 bg-mosqui-600 rounded-full mr-3"></span>
              Benefits
            </a>
            <a
              href="#testimonials"
              onClick={closeMenu}
              className="text-lg font-medium py-3 px-4 rounded-lg text-mosqui-800 hover:bg-mosqui-50 transition-colors duration-300 flex items-center"
            >
              <span className="w-2 h-2 bg-mosqui-600 rounded-full mr-3"></span>
              Testimonials
            </a>
            
            <div className="mt-auto px-4 pt-6 border-t border-gray-100">
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center justify-center space-x-2 w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-300 shadow-md"
              >
                <span className="font-medium">Learn More</span>
              </a>
              
              <p className="text-center text-sm text-gray-500 mt-6">
                &copy; 2023 MoskiFree. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
