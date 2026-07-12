import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
// 🚨 Fixed: Importing brand icons from react-icons instead of lucide-react
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary/30 border-t border-brand-primary/20 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 1. Brand & Description */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold italic tracking-tighter text-brand-text">
                Solari
              </span>
            </Link>
            <p className="text-brand-text/70 text-sm leading-relaxed mt-2">
              Your ultimate destination for premium summer essentials. Stay
              stylish, hydrated, and protected under the sun.
            </p>
          </div>

          {/* 2. Contact Information */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-brand-text">Contact Us</h3>
            <ul className="flex flex-col gap-3 text-sm text-brand-text/70 mt-2">
              <li className="flex items-center gap-3 hover:text-brand-primary transition-colors">
                <MapPin size={18} className="text-brand-primary" />
                <span>123 Summer Breeze Ave, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 hover:text-brand-primary transition-colors">
                <Phone size={18} className="text-brand-primary" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 hover:text-brand-primary transition-colors">
                <Mail size={18} className="text-brand-primary" />
                <span>hello@solari.com</span>
              </li>
            </ul>
          </div>

          {/* 3. Quick Links & Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-brand-text">Information</h3>
            <ul className="flex flex-col gap-3 text-sm text-brand-text/70 mt-2">
              <li>
                <Link
                  href="/products"
                  className="hover:text-brand-primary transition-colors"
                >
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  href="/my-profile"
                  className="hover:text-brand-primary transition-colors"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-brand-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-brand-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-brand-text">
              Stay in the Loop
            </h3>
            <p className="text-sm text-brand-text/70 mt-2">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <div className="relative mt-2 flex items-center">
              <Mail className="absolute left-3 text-brand-text/40" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/50 border border-brand-primary/30 rounded-full py-2.5 pl-10 pr-12 focus:outline-none focus:border-brand-primary text-sm placeholder:text-brand-text/50"
              />
              <button className="absolute right-1.5 p-1.5 bg-brand-accent text-white rounded-full hover:bg-brand-accent/90 transition-colors cursor-pointer">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-brand-primary/10">
          <p className="text-sm text-brand-text/60 text-center md:text-left">
            &copy; {currentYear} Solari. All rights reserved.
          </p>

          {/* Social Links (Using react-icons) */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-brand-bg rounded-full text-brand-text/70 hover:text-brand-primary hover:bg-white transition-all shadow-sm"
            >
              <FiFacebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-brand-bg rounded-full text-brand-text/70 hover:text-brand-primary hover:bg-white transition-all shadow-sm"
            >
              <FiTwitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-brand-bg rounded-full text-brand-text/70 hover:text-brand-primary hover:bg-white transition-all shadow-sm"
            >
              <FiInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
