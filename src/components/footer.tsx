
import { Leaf, Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mosqui-900 text-white pt-16 pb-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-mosqui-300" />
              <span className="text-xl font-semibold">MoskiFree</span>
            </div>
            <p className="text-mosqui-300 text-sm max-w-xs">
              Natural mosquito protection that's safe for your family, pets, and the planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-mosqui-300 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-mosqui-300 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-mosqui-300 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-mosqui-300 hover:text-white transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-mosqui-300 hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#benefits" className="text-mosqui-300 hover:text-white transition-colors duration-300">Benefits</a></li>
              <li><a href="#testimonials" className="text-mosqui-300 hover:text-white transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-mosqui-300 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-mosqui-300 hover:text-white transition-colors duration-300">FAQs</a></li>
              <li><a href="#" className="text-mosqui-300 hover:text-white transition-colors duration-300">Product Usage</a></li>
              <li><a href="#" className="text-mosqui-300 hover:text-white transition-colors duration-300">Safety Information</a></li>
              <li><a href="#" className="text-mosqui-300 hover:text-white transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-mosqui-300 text-sm mb-4">
              Join our newsletter for exclusive information and mosquito prevention tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-mosqui-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-mosqui-500 w-full"
              />
              <button className="bg-mosqui-500 hover:bg-mosqui-600 text-white px-4 py-2 rounded-r-lg transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-mosqui-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-mosqui-400 text-sm">
            &copy; {new Date().getFullYear()} MoskiFree. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-mosqui-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-mosqui-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-mosqui-400 hover:text-white text-sm transition-colors duration-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
