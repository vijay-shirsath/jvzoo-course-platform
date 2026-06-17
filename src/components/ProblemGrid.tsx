// src/components/ProblemGrid.tsx
import { AlertTriangle, XCircle, Monitor, ShieldAlert, EyeOff, FileWarning } from "lucide-react";

export default function ProblemGrid() {
  const pitfalls = [
    {
      icon: <EyeOff className="w-6 h-6 text-red-500" />,
      title: "The Screen-Typography Eye Strain Trap",
      subtitle: "Using Default Print Fonts For Digital Displays",
      description: "Many publishers default to printing favorites like Times New Roman or Georgia[cite: 1]. While beautiful on physical paper, these serif fonts become incredibly jagged and hard to read on computer monitors[cite: 1]. This creates instant reader fatigue, causing your audience to close your document before digesting your message[cite: 1]."
    },
    {
      icon: <FileWarning className="w-6 h-6 text-red-500" />,
      title: "The Defective Page Dimension Oversight",
      subtitle: "Formatting Assets with Standard European A4 Boundaries",
      description: "If you compile your PDF using standard European A4 page settings, your international customers are in trouble[cite: 1]. When someone in the USA tries to print an A4 document onto standard Letter paper, the document loses the last few lines of text or drops page footers completely onto blank secondary pages[cite: 1]."
    },
    {
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      title: "Cluttered Document Flow & Structural Bleed",
      subtitle: "Allowing Global Templates to Overwrite Premium Covers",
      description: "Amateur creators fail to segregate their file structure, allowing default headers and footers to bleed directly onto the main title cover page or table of contents index[cite: 1]. If your premium guide shows raw page numbers or copyright text symbols right across your front-cover graphic, your perceived value immediately drops[cite: 1]."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      title: "The Flat, Monotonous Text Wall Failure",
      subtitle: "Ignoring Visual Emphasis Frameworks & Image Wrapping Rules",
      description: "Dumping massive, unformatted text blocks on a page guarantees users will skim past your most valuable takeaways[cite: 1]. Without strategic elements like 4-border emphasis text boxes, balanced paragraph space padding, or proper Page Wrap image layouts, your e-book looks like a generic text document instead of a premium masterclass[cite: 1]."
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200/80 py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Grid Pattern to add visual structure */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-red-600 font-mono text-xs uppercase tracking-widest font-black bg-red-50 border border-red-100 px-3 py-1 rounded-md">
            Critical Design Pitfalls
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-6 leading-tight">
            Are Your Digital Products Silently Destroying Your Credibility?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Writing high-quality content is only half the battle. If your document formatting looks primitive, your audience will instantly assume your information is low-value. Avoid these common design traps.
          </p>
        </div>
        
        {/* Expanded Sizing Problem Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          {pitfalls.map((pitfall, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-50 rounded-2xl border border-slate-200/60 p-8 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-red-200"
            >
              <div>
                {/* Icon & Title Block */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 bg-red-100/60 rounded-xl group-hover:bg-red-50 transition-colors border border-red-200/30 flex-shrink-0">
                    {pitfall.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg md:text-xl tracking-tight leading-snug">
                      {pitfall.title}
                    </h4>
                    <span className="text-2xs font-bold uppercase tracking-wider text-red-600 font-mono block mt-0.5">
                      {pitfall.subtitle}
                    </span>
                  </div>
                </div>

                {/* Granular Descriptive Copy */}
                <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                  {pitfall.description}
                </p>
              </div>

              {/* Decorative Warning Alert Footer Tag */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-2xs font-bold text-slate-400 group-hover:text-red-500 transition-colors font-mono uppercase tracking-wider">
                <ShieldAlert className="w-3.5 h-3.5" />
                Conversion Risk Factor: Critical Impact
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Transition Kicker Text */}
        <div className="text-center mt-16 max-w-2xl mx-auto border-t border-dashed border-slate-200 pt-12">
          <p className="text-sm font-semibold text-slate-500 italic">
            "The content layout you provide creates a psychological first impression. If your presentation looks cheap, your market will buy from competitors who look polished."
          </p>
        </div>

      </div>
    </section>
  );
}