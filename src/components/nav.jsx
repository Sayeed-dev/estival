// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// // আইকনের জন্য lucide-react ব্যবহার করা হয়েছে (npm install lucide-react)
// import { User, Search, ShoppingBag } from "lucide-react";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // ইউজার ৫০ পিক্সেলের বেশি নিচে স্ক্রল করলে স্টেট ট্রু হবে
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // ক্লিনআপ ফাংশন (মেমরি লিক এড়াতে)
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500 ease-in-out text-brand-text
//         ${
//           isScrolled
//             ? "py-4 px-6 md:px-12 bg-brand-bg/90 backdrop-blur-md shadow-sm" // স্ক্রল করার পরের স্টাইল (প্যাডিং কম, ব্লার ব্যাকগ্রাউন্ড)
//             : "py-8 px-8 md:px-24 bg-transparent" // স্ক্রল করার আগের স্টাইল (প্যাডিং বেশি, ট্রান্সপারেন্ট)
//         }
//       `}
//     >
//       {/* ১. লোগো সেকশন */}
//       <Link href="/" className="flex items-center gap-2">
//         {/* এখানে আপনি একটি কাস্টম ফন্ট ব্যবহার করতে পারেন স্ক্রিনশটের মতো কার্সিভ লুক আনতে */}
//         <span className="text-3xl font-bold italic tracking-tighter">
//           Solari
//         </span>
//       </Link>

//       {/* ২. নেভিগেশন লিংকস (ডেস্কটপ) */}
//       <div className="hidden md:flex items-center gap-8 font-medium">
//         <Link href="/" className="hover:text-brand-primary transition-colors">
//           Home
//         </Link>
//         <Link
//           href="/products"
//           className="hover:text-brand-primary transition-colors"
//         >
//           Products
//         </Link>
//         <Link
//           href="/my-profile"
//           className="hover:text-brand-primary transition-colors"
//         >
//           My Profile
//         </Link>
//       </div>

//       {/* ৩. আইকনস */}
//       <div className="flex items-center gap-5">
//         <button className="hover:text-brand-primary transition-colors cursor-pointer">
//           <User size={22} strokeWidth={1.5} />
//         </button>
//         <button className="hover:text-brand-primary transition-colors cursor-pointer">
//           <Search size={22} strokeWidth={1.5} />
//         </button>
//         <button className="hover:text-brand-primary transition-colors cursor-pointer relative">
//           <ShoppingBag size={22} strokeWidth={1.5} />
//           {/* কার্ট ব্যাজ (অপশনাল) */}
//           <span className="absolute -top-1 -right-2 bg-brand-accent text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
//             2
//           </span>
//         </button>
//       </div>
//     </nav>
//   );
// }
