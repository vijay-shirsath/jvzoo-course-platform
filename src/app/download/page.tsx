// src/app/download/page.tsx
import { Suspense } from "react";
import ThanksContent from "@/components/ThanksContent";

export const metadata = {
  title: "Secure Digital Delivery Area | Access Granted",
  // Tells Google and alternative engines to never catalog or expose this page
  robots: { index: false, follow: false }, 
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4 py-16 md:py-24 relative overflow-hidden">
      
      {/* Decorative Structural Grid Matrix Accent Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      <Suspense 
        fallback={
          <div className="text-center p-8 bg-white rounded-3xl border shadow-xl max-w-sm w-full flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent mb-4"></div>
            <p className="text-slate-800 font-bold tracking-tight">Verifying JVZoo Transaction Vault...</p>
            <p className="text-slate-400 text-xs mt-1">Please hold while your access tokens clear.</p>
          </div>
        }
      >
        <ThanksContent />
      </Suspense>
    </main>
  );
}