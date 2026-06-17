
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { CheckCircle2, Download, ShieldCheck, AlertTriangle, FileText, Video, HelpCircle } from "lucide-react";

export default function ThanksContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // JVZoo automatically passes the tracking receipt code inside your success parameters
  const receipt = searchParams.get("receipt");

  useEffect(() => {
    // If an intruder tries to browse to /download directly without paying, boot them instantly
    if (!receipt) {
      router.push("/");
    }
  }, [receipt, router]);

  // Temporary skeleton frame to show while routing redirects execute
  if (!receipt) {
    return (
      <div className="text-center p-8 bg-white rounded-3xl border border-red-100 shadow-xl max-w-sm w-full">
        <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4 animate-bounce" />
        <h3 className="text-lg font-black text-slate-900 mb-1">Access Protocol Refused</h3>
        <p className="text-slate-500 text-xs leading-relaxed">No tracking parameters detected. Redirecting to initialization root...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-slate-200/60 relative z-10">
      
      {/* Verified Success Header Graphic */}
      <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-emerald-50 text-emerald-600 mb-6 border border-emerald-100 shadow-xs">
        <CheckCircle2 className="h-12 w-12" />
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
        Payment Verified Successfully!
      </h1>
      
      <p className="text-sm text-slate-500 mb-8 font-medium">
        Thank you for your order. Your official JVZoo Receipt Token is:{" "}
        <span className="font-mono text-slate-900 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md font-bold text-xs select-all">
          {receipt}
        </span>
      </p>

      {/* Grid Summary of Assets Being Downloaded */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/50 flex gap-3 items-start">
          <div className="p-2 bg-blue-100/60 text-blue-600 rounded-lg border border-blue-200/30 flex-shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Professional-PDF-Guide.pdf</h4>
            <p className="text-3xs text-slate-400 font-mono mt-0.5">Size: ~2.4 MB | Format: PDF Guide[cite: 1]</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/50 flex gap-3 items-start">
          <div className="p-2 bg-purple-100/60 text-purple-600 rounded-lg border border-purple-200/30 flex-shrink-0">
            <Video className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Video Masterclass Vault</h4>
            <p className="text-3xs text-slate-400 font-mono mt-0.5">Format: MP4 Screencast Lectures</p>
          </div>
        </div>
      </div>

      {/* Operational Step Guidelines */}
      <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-6 text-left mb-8">
        <h3 className="text-sm font-extrabold text-blue-900 mb-2 uppercase tracking-wider text-3xs font-mono flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          Execution Instructions:
        </h3>
        <ol className="space-y-2 text-xs md:text-sm text-blue-800 leading-relaxed list-decimal list-inside">
          <li>Click the primary emerald package button down below to fetch your digital files bundle.</li>
          <li>Extract the contents of the downloaded ZIP archive locally onto your target operating desktop.</li>
          <li>Launch the companion walkthrough lectures to track screen layout paths alongside your reference manual.</li>
        </ol>
      </div>

      {/* MAIN TARGET CLOUD FILE DELIVERY CTA ACTION LINK */}
      <a
        href="https://your-secure-cloud-storage.com/bundles/pdf-video-masterclass.zip" // Replace with your actual secure file link or Amazon S3 URL
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black py-5 px-8 rounded-2xl text-lg md:text-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 text-center"
      >
        <Download className="w-5 h-5 animate-bounce" />
        Download Full System Training Bundle
      </a>

      {/* Support Help Block Anchor */}
      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-3xs font-mono font-bold uppercase tracking-wider text-slate-400">
        <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-slate-400" /> Secure Asset Manifest Integrity</span>
        <a 
          href="mailto:support@yourdomain.com" // Update to your customer care desk contact endpoint
          className="flex items-center gap-1 text-blue-600 hover:underline"
        >
          <HelpCircle className="w-3.5 h-3.5" /> Assistance Desk Contact
        </a>
      </div>

    </div>
  );
}