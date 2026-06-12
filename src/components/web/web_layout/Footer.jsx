// components/Footer.jsx
import React from 'react';
import { 
  Phone, Mail, MapPin, ChevronRight,
  Globe, Camera, MessageCircle, Video,
  CreditCard, Shield, Truck, RotateCcw,
  Send, Crown
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary">
      
      {/* Top Features Bar - Slightly lighter green */}
      <div className="bg-primary-light/30 relative">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-white/10 group-hover:bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                <Truck size={22} className="text-white group-hover:text-gold-light transition-colors" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Free Shipping</p>
                <p className="text-xs text-white/60">Orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-white/10 group-hover:bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                <RotateCcw size={22} className="text-white group-hover:text-gold-light transition-colors" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Easy Returns</p>
                <p className="text-xs text-white/60">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-white/10 group-hover:bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                <Shield size={22} className="text-white group-hover:text-gold-light transition-colors" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Secure Payment</p>
                <p className="text-xs text-white/60">100% protected</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-white/10 group-hover:bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                <CreditCard size={22} className="text-white group-hover:text-gold-light transition-colors" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Easy Payment</p>
                <p className="text-xs text-white/60">Multiple options</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Separator Line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 py-14 md:py-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          
          {/* Column 1 - About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-11 h-11 bg-gold rounded-xl flex items-center justify-center">
                  <Crown size={22} className="text-primary-dark" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">BIGEEST</h3>
                <p className="text-[10px] text-gold-light font-semibold uppercase tracking-[3px]">Premium Store</p>
              </div>
            </div>
            
            <p className="text-primary-100/70 text-sm mb-5 leading-relaxed max-w-sm">
              Pakistan's largest ecommerce store offering premium clothing, jewelry, perfumes, shoes, watches, bags, and electronics from top brands worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+923001234567" className="flex items-center gap-3 text-primary-100/70 hover:text-white transition-colors text-sm group">
                <div className="w-8 h-8 bg-white/10 group-hover:bg-gold/20 rounded-lg flex items-center justify-center transition-all">
                  <Phone size={15} className="text-gold-light group-hover:text-gold transition-colors" />
                </div>
                +92 300 1234567
              </a>
              <a href="mailto:support@bigeest.com" className="flex items-center gap-3 text-primary-100/70 hover:text-white transition-colors text-sm group">
                <div className="w-8 h-8 bg-white/10 group-hover:bg-gold/20 rounded-lg flex items-center justify-center transition-all">
                  <Mail size={15} className="text-gold-light group-hover:text-gold transition-colors" />
                </div>
                support@bigeest.com
              </a>
              <div className="flex items-center gap-3 text-primary-100/70 text-sm">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin size={15} className="text-gold-light" />
                </div>
                Lahore, Pakistan
              </div>
            </div>

            {/* Social Links */}
            {/* <div className="flex items-center gap-2.5 mt-6">
              {[
                { icon: <Globe size={16} />, label: 'Facebook' },
                { icon: <Camera size={16} />, label: 'Instagram' },
                { icon: <MessageCircle size={16} />, label: 'Twitter' },
                { icon: <Video size={16} />, label: 'YouTube' },
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-9 h-9 bg-white/10 hover:bg-gold rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 text-white hover:text-primary-dark shadow-sm hover:shadow-md"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Contact Us', 'Track Order', 'FAQs', 'Shipping Policy', 'Returns & Exchange'].map((link) => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-primary-100/70 hover:text-white transition-colors text-sm group">
                    <ChevronRight size={13} className="text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Categories */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold rounded-full"></span>
              Categories
            </h4>
            <ul className="space-y-3">
              {['Clothing', 'Jewelry', 'Perfumes', 'Shoes', 'Watches', 'Bags', 'Electronics'].map((link) => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-primary-100/70 hover:text-white transition-colors text-sm group">
                    <ChevronRight size={13} className="text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold rounded-full"></span>
              Newsletter
            </h4>
            <p className="text-primary-100/70 text-sm mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-gold focus:bg-white/20 transition-all duration-300"
                />
                <button 
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-gold hover:bg-gold-light text-primary-dark p-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-xs md:text-sm">
              &copy; {currentYear} <span className="text-white font-semibold">BIGEEST</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-white/50">
              <a href="#" className="hover:text-gold-light transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-light transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold-light transition-colors">Cookie Policy</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/40">We Accept:</span>
              <div className="flex gap-1.5">
                {['Visa', 'Mastercard', 'PayPal', 'COD'].map((method) => (
                  <span key={method} className="bg-white/10 text-xs text-white/70 px-2.5 py-0.5 rounded-md border border-white/10">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;