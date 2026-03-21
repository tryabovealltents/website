"use client";

import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const darkHeroPages = ["/", "/about", "/gallery", "/tent-rentals", "/wedding-tents", "/party-tents", "/festival-tents"];

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isTransparent = !scrolled && darkHeroPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4" : "bg-white/0 py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img 
              src="/logo1.png" 
              alt="Above All Tent and Party Rentals" 
              className={`transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}
              style={{ filter: isTransparent ? "brightness(0) invert(1)" : "none" }}
            />
          </Link>
          
          {/* Desktop Nav - Home page white, others dark */}
          <nav
            className={`hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide justify-center flex-1 ${
              !isTransparent ? "text-slate-700" : "text-white drop-shadow-lg"
            }`}
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            <Link href="/" className="hover:text-amber-400 transition-colors">HOME</Link>
            <Link href="/tent-rentals" className="hover:text-amber-400 transition-colors">TENTS</Link>
            <div className="group relative">
              <span className="cursor-pointer hover:text-amber-400 transition-colors py-2">SERVICES</span>
              <div className="absolute left-0 top-full hidden w-56 flex-col bg-white border border-gray-100 shadow-xl group-hover:flex transform opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 rounded-xl overflow-hidden">
                <Link href="/wedding-tents" className="px-5 py-3 text-slate-600 hover:text-amber-500 hover:bg-slate-50 text-xs font-semibold tracking-wider">WEDDINGS</Link>
                <Link href="/party-tents" className="px-5 py-3 text-slate-600 hover:text-amber-500 hover:bg-slate-50 text-xs font-semibold tracking-wider">BACKYARD PARTIES</Link>
                <Link href="/festival-tents" className="px-5 py-3 text-slate-600 hover:text-amber-500 hover:bg-slate-50 text-xs font-semibold tracking-wider">FESTIVALS</Link>
              </div>
            </div>
            <Link href="/gallery" className="hover:text-amber-400 transition-colors">GALLERY</Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors">ABOUT</Link>
          </nav>
          
          {/* CTA & Phone */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:4034933128" className={`flex items-center font-semibold text-sm ${!isTransparent ? "text-slate-900" : "text-white"} hover:text-amber-400 transition-colors`}>
              <Phone className="mr-2 h-4 w-4" />
              403-493-3128
            </a>
            <Link 
              href="/contact" 
              className={`flex items-center px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                !isTransparent
                  ? "bg-slate-900 text-white hover:bg-slate-800 shadow-md"
                  : "bg-amber-400 text-slate-900 hover:bg-amber-500 shadow"
              }`}
            >
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 rounded-full ${!isTransparent ? "text-slate-900 bg-gray-100" : "text-white bg-white/20 backdrop-blur-sm"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ top: "70px", height: "calc(100vh - 70px)" }}
      >
        <div className="flex flex-col p-8 space-y-6 h-full">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-tight text-slate-900">Home</Link>
          <Link href="/tent-rentals" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-tight text-slate-900">Our Tents</Link>
          <Link href="/wedding-tents" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-tight text-slate-900">Weddings</Link>
          <Link href="/party-tents" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-tight text-slate-900">Parties</Link>
          <Link href="/festival-tents" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-tight text-slate-900">Festivals</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-tight text-slate-900">Gallery</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-tight text-slate-900">About</Link>
          
          <div className="pt-8 mt-auto border-t border-gray-100 flex flex-col space-y-6">
            <a href="tel:4034933128" className="flex items-center text-xl font-bold text-amber-600">
              <Phone className="mr-3 h-5 w-5" />
              403-493-3128
            </a>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)} 
              className="flex justify-center items-center w-full px-6 py-4 rounded-full bg-slate-900 text-white font-bold text-lg"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;