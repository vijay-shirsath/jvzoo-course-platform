// src/components/SolutionReveal.tsx
import { 
  Type, 
  Layers, 
  Grid as GridIcon, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight,
  BookOpen,
  Video,
  ExternalLink,
  Lock
} from "lucide-react";

export default function SolutionReveal() {
  const modules = [
    {
      id: "MODULE 01",
      icon: <Type className="w-6 h-6 text-blue-600" />,
      bgClass: "from-blue-500/5 to-indigo-500/5",
      borderClass: "hover:border-blue-200",
      title: "Screen Typography Optimization & Canvas Geometry",
      subtitle: "Foundational Configuration Decisions",
      description: "Establish correct presentation settings before writing a single word of text. This module outlines the precise parameters required to prevent reader fatigue and global layout issues.",
      learnPoints: [
        "The Font Contrast Metric: Discover why narrower fonts like Arial are ideal for large titles, while Verdana's unique character width reduces eye strain on small screens[cite: 1].",
        "The Times New Roman Pitfall: Why printing favorites fail miserably on digital monitors, creating immediate user frustration[cite: 1].",
        "Universal Canvas Scaling: Setting your layout strictly to Letter size dimensions to ensure international printing boundaries do not drop trailing text lines or page footers onto blank pages[cite: 1]."
      ]
    },
    {
      id: "MODULE 02",
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      bgClass: "from-indigo-500/5 to-purple-500/5",
      borderClass: "hover:border-indigo-200",
      title: "Document Separation & Page Break Routing",
      subtitle: "Isolating Section Formats Seamlessly",
      description: "Break away from amateur word processing flows by configuring distinct page layout classes. This module prevents headers or footers from breaking across your premium title and cover designs[cite: 1].",
      learnPoints: [
        "Page Class Separation: Exact instructions to assign 'First Page' and 'Index' properties to isolate cover pages from standard body text templates[cite: 1].",
        "Manual Page Breaks: Setting up custom page break rules with automatic initialization scripts to restart document tracking at page 1 after your index[cite: 1].",
        "Footer Formatting Scripts: How to properly configure page numbering text styles alongside automated copyright symbol codes inside universal template margins[cite: 1]."
      ]
    },
    {
      id: "MODULE 03",
      icon: <GridIcon className="w-6 h-6 text-purple-600" />,
      bgClass: "from-purple-500/5 to-pink-500/5",
      borderClass: "hover:border-purple-200",
      title: "Advanced Layout Structuring & Visual Anchors",
      subtitle: "Injecting High-Converting Elements",
      description: "Transform plain text documents into an interactive multi-media experience. Learn to insert emphasis elements and format images to retain high visibility while keeping users engaged[cite: 1].",
      learnPoints: [
        "Interactive Clickable Indexes: Building automated Tables of Contents embedded with dynamic, internal destination hyperlinks for fast document scrolling[cite: 1].",
        "Four-Border Emphasis Callouts: Constructing colored layout frames utilizing custom background hex tables, precise padding buffers, and border-margin alignments[cite: 1].",
        "Text-Wrap Asset Geometry: Integrating graphic files using strict Page Wrap settings to prevent layout shifts when scaling content layout trees[cite: 1].",
        "Monetization Hyperlinks: Turning text lines and canvas graphics into high-converting affiliate tracking vectors pointing directly to sales channels[cite: 1]."
      ]
    },
    {
      id: "MODULE 04",
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      bgClass: "from-emerald-500/5 to-teal-500/5",
      borderClass: "hover:border-emerald-200",
      title: "Export Encryption Locks & Viral Affiliate Rebranding",
      subtitle: "Asset Protection & Traffic Loop Generation",
      description: "Secure your premium intellectual data from piracy, or leverage automated distribution loops to allow affiliates to easily rebrand your links to boost sales[cite: 1].",
      learnPoints: [
        "Anti-Piracy Security Locks: Configuring export panels to securely restrict users from highlighting text, copying data, or extracting content assets[cite: 1].",
        "Viral Rebranding Macros: Structuring link strings using tracking syntax like '-8-tag$data-8-' to house flexible backup URLs[cite: 1].",
        "Automated Brander Distribution: Compiling standalone rebrander software packages so affiliates can inject their custom tracking links to launch viral networks[cite: 1]."
      ]
    }
  ];

  return (
    <section className="bg-slate-50 py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-black bg-blue-50 border border-blue-100 px-3 py-1 rounded-md">
            The Comprehensive Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-6 leading-tight">
            Step-By-Step Video Lectures & Written Execution Blueprints
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            This program tracks real production workflows. Each module combines structured technical lessons from <span className="font-semibold text-slate-800">"Professional-PDF-Guide.pdf"</span> with over-the-shoulder video captures to guarantee full mastery[cite: 1].
          </p>
        </div>

        {/* Massive Sized Curriculum Component Block */}
        <div className="space-y-12">
          {modules.map((mod, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-3xl border border-slate-200/70 shadow-xs overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/65 border-b-4 ${mod.borderClass} flex flex-col lg:flex-row`}
            >
              {/* Left Column: Module Meta */}
              <div className={`lg:w-1/3 bg-gradient-to-br ${mod.bgClass} p-8 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between`}>
                <div>
                  <span className="text-xs font-mono font-black tracking-widest text-slate-400 bg-white shadow-xs px-2.5 py-1 rounded-md border border-slate-100">
                    {mod.id}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight mt-6 mb-2 leading-tight">
                    {mod.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500 font-mono">
                    {mod.subtitle}
                  </p>
                </div>
                
                {/* Visual Delivery Status Tags */}
                <div className="mt-8 flex items-center gap-3 border-t border-slate-200/50 pt-4 text-3xs font-mono font-bold tracking-wider uppercase text-slate-400">
                  <span className="flex items-center gap-1 text-blue-600"><BookOpen className="w-3.5 h-3.5" /> PDF Guide</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1 text-purple-600"><Video className="w-3.5 h-3.5" /> HD Video</span>
                </div>
              </div>

              {/* Right Column: Deep Syllabus Learn Points */}
              <div className="lg:w-2/3 p-8 md:p-10 flex flex-col justify-center">
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 font-medium italic">
                  {mod.description}
                </p>
                
                <ul className="space-y-4">
                  {mod.learnPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 group/item">
                      <div className="mt-1 bg-emerald-50 text-emerald-600 p-1 rounded-md border border-emerald-100 flex-shrink-0 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Curriculum Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 text-white pointer-events-none">
            <Lock className="w-48 h-48" />
          </div>
          <div className="max-w-2xl relative z-10">
            <h4 className="text-lg md:text-xl font-bold tracking-tight mb-2">
              🔒 Complete Resource Files Vault Included
            </h4>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              When you purchase the program, you don't just get access to the step-by-step videos. You also receive complete sample layout source codes, pre-formatted style configurations, visual check sheets, and sample rebranding templates to deploy instantly.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}