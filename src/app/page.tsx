import HeroSection from "@/components/HeroSection";
import ProblemGrid from "@/components/ProblemGrid";
import SolutionReveal from "@/components/SolutionReveal";
import PricingAnchor from "@/components/PricingAnchor";

export default function Home() {
  // Centralized JVZoo Payment Link
  const jvzooCheckoutUrl = "https://www.jvzoo.com/b/00000/00000/1";

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* 1. ANNOUNCEMENT HEADER ACCENT BLOCK */}
      <div className="bg-blue-600 text-white text-xs md:text-sm font-bold text-center py-2.5 px-4 uppercase tracking-wider sticky top-0 z-50 shadow-md">
        🔥 Special Launch Offer: Includes Both The Complete Manual & Masterclass Video Lectures
      </div>

      {/* 2. INJECT MODULAR DESIGN BLOCKS */}
      <HeroSection checkoutUrl={jvzooCheckoutUrl} />
      
      <ProblemGrid />
      
      <SolutionReveal />
      
      <PricingAnchor checkoutUrl={jvzooCheckoutUrl} />

      {/* 3. STRICT LEGAL POLICIES COMPLIANCE FOOTER */}
      <footer className="bg-slate-950 text-slate-500 text-3xs md:text-2xs text-center py-16 px-6 border-t border-slate-900 leading-relaxed">
        <div className="max-w-3xl mx-auto">
          <p className="font-bold text-slate-400 uppercase mb-3 tracking-widest text-3xs">Legal Notices & Anti-Piracy Policies</p>
          <p className="mb-4 text-justify md:text-center">
            <strong>Important Protection Notice:</strong> You do not possess resale or sharing permissions for this package[cite: 9, 10, 11]. No part of these compiled files may be redistributed without express written consent[cite: 12].
          </p>
          <p className="mb-6 text-justify md:text-center">
            <strong>Earnings Disclaimer:</strong> We offer zero passive profit or generation guarantees[cite: 17, 18]. Individual progress rests entirely on personal motivation, design skill acquisition steps, and your unique business actions[cite: 19].
          </p>
          <p className="border-t border-slate-900 pt-6">© {new Date().getFullYear()} PDF & Video Training Systems. All Rights Reserved. Managed globally via JVZoo securely.</p>
        </div>
      </footer>

    </div>
  );
}