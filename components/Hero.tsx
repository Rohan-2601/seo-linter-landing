"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#0A0A0A] text-white selection:bg-indigo-500/30">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        <BackgroundRippleEffect />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-[#0A0A0A]/0 to-[#0A0A0A]/0" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        
        {/* PILL BADGE */}
        <div className="mt-12 animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-white/80 tracking-wide">
              v0.1.5 is now available
            </span>
          </div>
        </div>

        {/* HEADLINE */}
        <h1 className="mt-8 max-w-5xl text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
          <span className="block text-white">
            Catch SEO Mistakes
          </span>
          <span className="block bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent pb-4">
            Before You Deploy
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 max-w-2xl text-lg text-white/60 md:text-xl leading-relaxed animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:600ms]">
          <span className="font-semibold text-white">seo-lint-cli</span> scans your
          HTML builds or live URLs for missing titles, descriptions,
          canonical tags, and Open Graph issues.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:800ms]">
          
          <a
            href="https://www.npmjs.com/package/seo-lint-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-transform active:scale-95 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)]"
          >
            <Terminal className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Install via npm
          </a>

          <Link
            href="/docs"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            Read Documentation
            <ArrowRight className="h-4 w-4 opacity-50 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
          </Link>
        </div>

        {/* CODE SNIPPET VISUAL (Optional Decoration) */}
        <div className="mt-16 w-full max-w-3xl rounded-xl border border-white/10 bg-[#0A0A0A]/80 shadow-2xl backdrop-blur-xl animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:1000ms]">
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/20 text-red-500 border border-red-500/30" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/20 text-yellow-500 border border-yellow-500/30" />
            <div className="h-3 w-3 rounded-full bg-green-500/20 text-green-500 border border-green-500/30" />
            <div className="ml-2 text-xs font-medium text-white/30">terminal</div>
          </div>
          <div className="overflow-x-auto p-4 text-left font-mono text-sm">
             <div className="flex items-center gap-2">
                <span className="text-emerald-400">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">npx seo-lint-cli ./out</span>
             </div>
             <div className="mt-2 text-white/50">
                Scanning 12 files... <br/>
                <span className="text-emerald-400">✔</span> index.html <span className="text-white/30 text-xs ml-2">98/100</span><br/>
                <span className="text-emerald-400">✔</span> about.html <span className="text-white/30 text-xs ml-2">100/100</span><br/>
                <span className="text-rose-400">✖</span> contact.html <span className="text-rose-400/80 ml-2">- Missing meta description</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

