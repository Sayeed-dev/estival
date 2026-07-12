"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, Search, ShoppingBag, Menu, X } from "lucide-react";

// Array of search placeholders to cycle through
const searchPlaceholders = [
  "Search for 'UV Sunglasses'...",
  "Search for 'Summer Outfits'...",
  "Search for 'Sunscreen'...",
  "Search for 'Beach Accessories'...",
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // New States for Search Feature
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // 1. Handle Scroll for Sticky Navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  // 3. Handle Animated Placeholder Rotation
  useEffect(() => {
    let interval; // Removed TypeScript specific type declaration
    if (isSearchOpen) {
      interval = setInterval(() => {
        setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isSearchOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out text-brand-text
          ${
            isScrolled || isSearchOpen
              ? "bg-brand-bg/95 backdrop-blur-md shadow-sm"
              : "bg-transparent"
          }
        `}
      >
        {/* Main Navbar Container */}
        <div
          className={`flex items-center justify-between transition-all duration-500 mx-auto w-full
          ${isScrolled || isSearchOpen ? "py-4 px-6 md:px-12" : "py-6 px-6 md:px-24"}
        `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50 relative">
            <span className="text-3xl font-bold italic tracking-tighter">
              Solari
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link
              href="/"
              className="hover:text-brand-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-brand-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/my-profile"
              className="hover:text-brand-primary transition-colors"
            >
              My Profile
            </Link>
          </div>

          {/* Icons & Hamburger Menu */}
          <div className="flex items-center gap-4 md:gap-5 z-50 relative">
            <button className="hidden sm:block hover:text-brand-primary transition-colors cursor-pointer">
              <User size={22} strokeWidth={1.5} />
            </button>

            {/* Search Icon Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-brand-primary transition-colors cursor-pointer"
            >
              {isSearchOpen ? (
                <X size={22} strokeWidth={1.5} />
              ) : (
                <Search size={22} strokeWidth={1.5} />
              )}
            </button>

            <button className="hover:text-brand-primary transition-colors cursor-pointer relative">
              <ShoppingBag size={22} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-2 bg-brand-accent text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Hamburger Button */}
            <button
              className="md:hidden ml-2 hover:text-brand-primary transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={28} strokeWidth={1.5} />
              ) : (
                <Menu size={28} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* 🌟 Elegant Slide-Down Search Drawer */}
        <div
          className={`w-full overflow-hidden transition-all duration-500 ease-in-out border-b border-brand-primary/10 bg-brand-bg/95 backdrop-blur-md
            ${isSearchOpen ? "max-h-32 py-4 opacity-100" : "max-h-0 py-0 opacity-0 border-transparent"}
          `}
        >
          <div className="max-w-3xl mx-auto px-6 relative flex items-center">
            <Search className="absolute left-10 text-brand-text/50" size={20} />
            <input
              type="text"
              key={placeholderIndex}
              placeholder={searchPlaceholders[placeholderIndex]}
              className="w-full bg-brand-secondary/30 border border-brand-primary/30 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/50 text-brand-text placeholder:text-brand-text/50 placeholder:transition-all placeholder:duration-500"
              autoFocus={isSearchOpen}
            />
          </div>
        </div>
      </nav>

      {/* Elegant Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden
          ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
        `}
      >
        <div className="flex flex-col items-center gap-8 text-2xl font-medium text-brand-text">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-brand-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-brand-primary transition-colors"
          >
            Products
          </Link>
          <Link
            href="/my-profile"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-brand-primary transition-colors"
          >
            My Profile
          </Link>
        </div>
      </div>
    </>
  );
}
