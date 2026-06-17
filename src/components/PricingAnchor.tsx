// src/components/PricingAnchor.tsx
import { 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  FileCheck,
  AlertOctagon
} from "lucide-react";

type PricingAnchorProps = {
  checkoutUrl: string;
};

export default function PricingAnchor({ checkoutUrl }: PricingAnchorProps) {
  const bonuses = [
    {
      icon: <FileCheck className="w-5 h-5 text-blue-500" />,
      title: "Bonus #1: Pre-Formatted Style Templates",
      value: "$47 Value",
      description: "Skip the tedious configuration steps completely. Get instant access to downloadable layout sheets already tailored with optimal margin variables, Verdana body sets, and correct paragraph breaks[cite: 1]."
    },
    {
      icon: <Layers className="w-5 h-5 text-purple-500" />,
      title: "Bonus #2: Visual Layout Checklist Matrices",
      value: "$27 Value",
      description: "A fast, step-by-step cross-check guide to verify your document geometry before compiling files. Never accidentally forget to isolate a title page or drop trailing line text again[cite: 1]."
    }
  ];

  return (
    <section id="pricing" className="bg-slate-900 text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t-4 border-orange-500 relative overflow-hidden">
      
      {/* Subtle Background Accent Patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-orange-500 font-mono text-xs uppercase tracking-widest font-black bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-md">
            Limited Launch Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-4 mb-4">
            Unlock Instant Access to the Full System Today
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Gain complete lifetime access to the elite text guides and step-by-step video lecture modules. Start crafting professional, high-converting digital assets immediately[cite: 1].
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-4xl mx-auto">
          
          {/* LEFT COLUMN: THE HIGH-VALUE BONUS STACK */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-extrabold tracking-tight text-slate-200 uppercase tracking-wider text-2xs font-mono">
              ⚡ Action-Step Bonuses Included:
            </h3>
            
            {bonuses.map((bonus, idx) => (
              <div key={idx} className="bg-slate-800/40 rounded-2xl border border-slate-800 p-6 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 font-bold text-white text-base">
                    {bonus.icon}
                    <span>{bonus.title}</span>
                  </div>
                  <span className="text-2xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {bonus.value}
                  </span>
                </div>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed text-justify">
                  {bonus.description}
                </p>
              </div>
            ))}

            <div className="p-5 rounded-2xl bg-slate-950/40 border border-slate-800 border-dashed text-slate-400 text-xs leading-relaxed">
              <strong>💡 Total Value Realization:</strong> Getting your digital assets layout optimized significantly speeds up sales cycles and enhances affiliate interest. Re-brandable viral structures can pay for the tuition cost within your initial traffic launch loops[cite: 1].
            </div>
          </div>

          {/* RIGHT COLUMN: THE CORE MASTER CHECKOUT CARD */}
          <div className="lg:col-span-6">
            <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-slate-200 flex flex-col items-center">
              
              {/* Top Banner Tag */}
              <div className="absolute top-0 right-0 bg-blue-600 text-white font-black font-mono text-3xs tracking-widest px-4 py-1.5 uppercase rounded-bl-xl shadow-sm">
                Text + Video Bundle
              </div>
              
              <p className="text-xs text-slate-400 uppercase tracking-widest font-extrabold mb-1 self-start">Full Lifetime License</p>
              <div className="flex items-baseline gap-2 mb-6 self-start">
                <span className="text-slate-400 line-through text-2xl font-medium">$147</span>
                <span className="text-5xl font-black text-slate-900 tracking-tight">$35</span>
                <span className="text-xs text-slate-500 font-medium font-mono">USD</span>
              </div>

              {/* Comprehensive Line Item Verification */}
              <ul className="text-left space-y-3.5 text-xs md:text-sm text-slate-600 mb-8 border-t border-slate-100 pt-6 w-full">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>The Complete Illustrated <strong>"Professional-PDF-Guide.pdf"</strong> reference manual[cite: 1].</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Full Access to the <strong>Desktop Video Walkthrough</strong> Masterclass Lectures.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Full sample package layout source codes and sample rebranding files.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Lifetime updates on output document encryption, styles, and tools[cite: 1].</span>
                </li>
              </ul>

              {/* 🎯 OFFICIAL JVZOO EMBEDDED BUTTON NORMS */}
              <div className="w-full flex justify-center py-2 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-98">
                <a href={checkoutUrl} className="block focus:outline-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://i.jvzoo.com/0/443677/3" 
                    alt="Pdf master ebook" 
                    className="mx-auto max-w-full h-auto cursor-pointer object-contain"
                  />
                </a>
              </div>

              {/* Small Security Verification Subtext */}
              <div className="mt-6 flex items-center justify-center gap-1.5 text-3xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                100% Risk-Free Secure Checkout via JVZoo Vault
              </div>

            </div>
          </div>

        </div>

        {/* EXTRA SAFETY ANTI-PIRACY RECONCILIATION BLOCK */}
        <div className="mt-20 border-t border-slate-800 pt-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center text-slate-500 text-2xs leading-relaxed">
          <p className="text-justify md:text-left">
            <strong>Strict License Protection Warning:</strong> This purchase grants a strict, single-user internal frontend operating license[cite: 1]. You do <u>not</u> possess any resale rights, giveaway rights, or content sharing permissions for the manual or accompanying files[cite: 1]. Any redistribution, file sharing, or unauthorized document transmission will instantly void your license and break civil anti-piracy parameters[cite: 1].
          </p>
        </div>

      </div>
    </section>
  );
}