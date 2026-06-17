// src/components/HeroSection.tsx
import Link from "next/link";
import { Video, ChevronRight, ShieldCheck, Star, ArrowDown, Users } from "lucide-react";

export default function HeroSection({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-slate-50 to-white pt-20 pb-28 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      
      {/* Subtle Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(59,130,246,0.08)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Trust Badge Kicker */}
        <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm text-blue-700 font-black uppercase tracking-widest text-2xs md:text-xs mx-auto px-4 py-2 rounded-full border border-blue-200/60 shadow-xs mb-8">
          <SparklesIcon className="w-3.5 h-3.5 animate-pulse text-blue-600" />
          Complete Text Blueprint & Step-by-Step Video Masterclass
        </div>

        {/* Massive Attention-Grabbing Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] max-w-5xl mx-auto mb-8">
          Stop Writing Boring Documents. Transform Raw Copy into{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Stunning E-books
          </span>{" "}
          & High-Converting PDF Reports!
        </h1>

        {/* Deep Descriptive Sub-headline */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Discover the exact design framework top internet publishers use to build professional digital assets from scratch. No expensive design software subscriptions or prior technical skills required.
        </p>

        {/* Premium Video Theater Screen Component */}
        <div className="w-full max-w-4xl mx-auto mb-16">
          <div className="bg-slate-950 rounded-3xl p-2 sm:p-3 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.3)] border border-slate-200/80 relative group">
            
            {/* Top Video Bezel Strip */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900 rounded-t-[20px] flex items-center px-4 gap-1.5 border-b border-slate-800/50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-[10px] text-slate-500 font-mono ml-2">Video Lecture Preview #01_Overview.mp4</span>
            </div>

            {/* Content Display Panel */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden relative bg-slate-900 mt-5">
              {/* Replace this div block with your premium Vimeo, Wistia, or Bunny.net iframe player */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 text-slate-400 p-6">
                <div className="w-24 h-24 bg-blue-600/10 text-blue-500 rounded-full flex items-center justify-center mb-4 border border-blue-500/20 group-hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/5 group-hover:shadow-blue-500/20">
                  <Video className="w-12 h-12 text-blue-500 fill-blue-500/20" />
                </div>
                <h3 className="text-xl font-bold tracking-wide text-white mb-2">Watch the Executive Course Overview</h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md text-center leading-relaxed">
                  Press play to uncover the core system architecture behind creating stunning, interactive PDF lead magnets and e-books.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Aggressive Double-Layer Call To Action Grid */}
        <div className="max-w-xl mx-auto text-center">
          <Link 
            href="#pricing"
            className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black py-6 px-10 rounded-2xl text-xl sm:text-2xl transition-all duration-200 transform hover:-translate-y-1 shadow-[0_20px_40px_-10px_rgba(249,115,22,0.3)] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.5)] group"
          >
            Claim Your Training License Now
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          {/* Trust Footers Below CTA Button */}
          <div className="mt-5 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              Secure JVZoo Verified Transaction Vault
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline" />
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
              <strong className="text-slate-800 ml-1">5.0 Rating</strong>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline" />
            <span className="flex items-center gap-1.5 text-slate-700">
              <Users className="w-4 h-4 text-blue-500" />
              Over 1,200+ Creators Trained
            </span>
          </div>

          {/* Directional Indicator Anchor */}
          <div className="mt-16 animate-bounce text-slate-400 flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-mono">Explore the Core Curriculum</span>
            <ArrowDown className="w-4 h-4" />
          </div>

        </div>

      </div>
    </header>
  );
}

// Simple absolute SVG helper icon to remove extra dependencies
function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l-.813-5.096L3 15l5.187-.813L9 9l.813 5.187L15 15l-5.187.813ZM18.25 5.25 17.5 9l-.75-3.75L13 4.5l3.75-.75.75-3.75.75 3.75 3.75.75-3.75.75Z" />
    </svg>
  );
}