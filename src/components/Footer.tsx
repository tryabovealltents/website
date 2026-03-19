import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/logo1.png" 
                alt="Above All Tent and Party Rentals" 
                className="h-16 brightness-0 invert" 
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Premium tent rentals and event accessories curated for weddings, corporate events, and festivals across Calgary and surrounding areas.
            </p>
            <div className="text-sm font-medium">
              <a href="tel:7786882174" className="text-white hover:text-amber-400 transition-colors block mb-2">778-688-2174</a>
              <a href="tel:7789559402" className="text-white hover:text-amber-400 transition-colors block">778-955-9402</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/tent-rentals" className="hover:text-amber-400 transition-colors">Our Tents</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-400 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Get Started</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/wedding-tents" className="hover:text-amber-400 transition-colors">Weddings</Link></li>
              <li><Link href="/festival-tents" className="hover:text-amber-400 transition-colors">Festivals</Link></li>
              <li><Link href="/party-tents" className="hover:text-amber-400 transition-colors">Backyard Parties</Link></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Corporate Events</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">Service Area</h4>
            <ul className="space-y-4 text-sm">
              <li>Calgary</li>
              <li>Airdrie</li>
              <li>Chestermere</li>
              <li>Cochrane</li>
              <li>Okotoks & Surrounding</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Above All Tent and Party Rentals. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}