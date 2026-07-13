"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const heroData = [
  {
    id: 1,
    heading: "Explore Our Summer Collection",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    heading: "Elevate Your Skin & Confidence",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    heading: "Refine Your Daily Sunshine",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div className="flex flex-col items-start z-10">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-brand-primary/10 mb-6">
              <span className="text-xl">🌴</span>
              <span className="text-sm font-semibold text-brand-text">
                The Best Summer Store
              </span>
            </div>

            {/* Dynamic Heading Wrapper (Fixed height to prevent layout shift) */}
            <div className="relative h-[120px] md:h-[150px] w-full">
              {heroData.map((item, index) => (
                <h1
                  key={item.id}
                  className={`absolute top-0 left-0 text-5xl md:text-6xl font-bold text-brand-text leading-[1.1] tracking-tight transition-all duration-700 ease-in-out w-full
                    ${index === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
                  `}
                >
                  {item.heading}
                </h1>
              ))}
            </div>

            {/* Static Subheading */}
            <p className="mt-4 text-lg text-brand-text/70 max-w-md leading-relaxed">
              Transform your daily routine into a luxury experience. Premium
              summer essentials designed for ultimate comfort and elegance.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button className="flex items-center gap-2 bg-brand-text text-brand-bg px-8 py-4 rounded-full font-medium hover:bg-brand-primary transition-colors shadow-lg">
                Shop Now <ArrowRight size={18} />
              </button>
              <Link
                href="/products"
                className="font-semibold text-brand-text hover:text-brand-primary underline underline-offset-4 decoration-brand-primary/50 transition-all"
              >
                View All Products
              </Link>
            </div>

            {/* Trust Badge (Avatars + Rating) */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  className="w-10 h-10 rounded-full border-2 border-brand-bg object-cover"
                  src="https://i.pravatar.cc/100?img=1"
                  alt="User"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-brand-bg object-cover"
                  src="https://i.pravatar.cc/100?img=2"
                  alt="User"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-brand-bg object-cover"
                  src="https://i.pravatar.cc/100?img=3"
                  alt="User"
                />
                <div className="w-10 h-10 rounded-full border-2 border-brand-bg bg-brand-accent flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  +
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 font-bold text-brand-text">
                  4.9 Ratings+
                </div>
                <span className="text-xs text-brand-text/60">
                  Trusted By 50k+ Customer
                </span>
              </div>
            </div>
          </div>

          {/* ➡️ Right Side: Modern Synchronized Slider */}
          <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
            {heroData.map((item, index) => {
              // পজিশন ক্যালকুলেট করার লজিক
              const isCurrent = index === activeIndex;
              const isNext = index === (activeIndex + 1) % heroData.length;
              const isPrev =
                index === (activeIndex - 1 + heroData.length) % heroData.length;

              // ক্লাসের মাধ্যমে স্টাইল নির্ধারণ
              let positionClasses = "";
              if (isCurrent) {
                // মাঝে থাকবে, একদম ক্লিয়ার
                positionClasses =
                  "translate-x-0 scale-100 opacity-100 z-30 shadow-2xl";
              } else if (isNext) {
                // ডানদিকে থাকবে, অর্ধেক স্ক্রিনের বাইরে (translate-x-[60%]), ফেইড করা
                positionClasses =
                  "translate-x-[60%] scale-90 opacity-50 z-20 shadow-lg";
              } else if (isPrev) {
                // বাঁদিকে চলে যাবে এবং ফেইড হয়ে গায়েব হয়ে যাবে
                positionClasses = "-translate-x-[60%] scale-90 opacity-0 z-10";
              } else {
                // বাকিগুলো হাইড করা থাকবে (যদিও আমাদের মাত্র ৩টা আইটেম)
                positionClasses = "opacity-0 hidden";
              }

              return (
                <div
                  key={item.id}
                  className={`absolute w-3/4 h-[90%] md:h-full transition-all duration-700 ease-in-out rounded-3xl overflow-hidden ${positionClasses}`}
                >
                  {/* Image Background */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  {/* Subtle overlay to make it look premium */}
                  <div className="absolute inset-0 bg-brand-text/5 mix-blend-overlay"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
