import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Phone } from "lucide-react";

export default function NotFound() {
  const links = [
    { href: "/tent-rentals", label: "Our Tents" },
    { href: "/wedding-tents", label: "Wedding Tents" },
    { href: "/party-tents", label: "Party Tents" },
    { href: "/festival-tents", label: "Festival Tents" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Top bar */}
      <div className="border-b border-white/10 px-6 py-5">
        <div className="container mx-auto">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="Above All Tent and Party Rentals"
              width={160}
              height={56}
              className="h-14 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          {/* 404 number */}
          <div className="relative mb-8 select-none">
            <span className="text-[160px] md:text-[220px] font-black leading-none text-white/5 block">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-1 bg-amber-400 rounded-full" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Page not found
          </h1>
          <p className="text-slate-400 text-lg mb-12 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          {/* Primary actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition-colors"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Quick links */}
          <div className="border-t border-white/10 pt-10">
            <p className="text-slate-500 text-sm uppercase tracking-widest mb-6">
              Explore our services
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm text-slate-300 border border-white/10 hover:border-amber-400/50 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Phone */}
          <div className="mt-12">
            <a
              href="tel:4034933128"
              className="inline-flex items-center text-slate-400 hover:text-amber-400 transition-colors text-sm"
            >
              <Phone className="mr-2 h-4 w-4" />
              Need help? Call us at 403-493-3128
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
