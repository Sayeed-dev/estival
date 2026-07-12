"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, Search, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. Handle Scroll for Sticky Navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500 ease-in-out text-brand-text
          ${
            isScrolled
              ? "py-4 px-6 md:px-12 bg-brand-bg/90 backdrop-blur-md shadow-sm"
              : "py-6 px-6 md:px-24 bg-transparent"
          }
        `}
      >
        {/* Logo (Added z-50 so it stays above the mobile overlay) */}
        <Link href="/" className="flex items-center gap-2 z-50 relative">
          <span className="text-3xl font-bold italic tracking-tighter">
            Solari
          </span>
        </Link>

        {/* Desktop Links (Hidden on small screens) */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-brand-primary transition-colors">
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
          {/* Hide Search and User on mobile to keep the header clean, keep Cart and Hamburger */}
          <button className="hidden sm:block hover:text-brand-primary transition-colors cursor-pointer">
            <User size={22} strokeWidth={1.5} />
          </button>
          <button className="hidden sm:block hover:text-brand-primary transition-colors cursor-pointer">
            <Search size={22} strokeWidth={1.5} />
          </button>

          <button className="hover:text-brand-primary transition-colors cursor-pointer relative">
            <ShoppingBag size={22} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-2 bg-brand-accent text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* Hamburger Menu Button (Visible only on mobile) */}
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

          {/* Mobile specific icons for Search/User */}
          <div className="flex gap-8 mt-8 border-t border-brand-primary/20 pt-8">
            <button className="flex flex-col items-center gap-2 text-sm text-brand-text/70 hover:text-brand-primary">
              <Search size={24} strokeWidth={1.5} />
              Search
            </button>
            <button className="flex flex-col items-center gap-2 text-sm text-brand-text/70 hover:text-brand-primary">
              <User size={24} strokeWidth={1.5} />
              Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
