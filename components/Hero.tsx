"use client";
import React, { useState } from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { ArrowRight, Terminal, Play } from "lucide-react";
import Link from "next/link";
import { DemoModal } from "@/components/DemoModal";

export function Hero() {
  const [showDemo, setShowDemo] = useState(false);

  return (
      <div className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] text-white selection:bg-indigo-500/30">
        
        <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />

        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 z-0">
          <BackgroundRippleEffect />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-[#0A0A0A]/0 to-[#0A0A0A]/0" />
        </div>
  
        {/* CONTENT */}
        {/* <div className="relative z-10 flex h-full flex-col items-center justify-start px-4 text-center sm:px-6 lg:px-8 pt-25 md:pt-40 pb-20"> */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-start px-4 text-center sm:px-6 lg:px-8 pt-20 md:pt-28 pb-20">

          
          {/* PILL BADGE */}
          <div className="mt-0 animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-white/80 tracking-wide">
                v0.1.8 is now available
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
            <span className="font-semibold text-white">seo-lint-cli</span> checks your
            static site for missing tags, broken links, and now gives you an
            <span className="text-emerald-400 font-medium"> SEO Score (0-100)</span> per page.
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

            <button
                onClick={() => setShowDemo(true)}
                className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
            >
                <Play className="h-4 w-4 fill-white/20 text-white/80 transition-transform group-hover:scale-110" />
                Watch Demo
            </button>
          </div>
  
          {/* CODE SNIPPET VISUAL (Optional Decoration) */}
          <div className="mt-16 w-full max-w-3xl rounded-xl border border-white/10 bg-[#0A0A0A]/80 shadow-2xl backdrop-blur-xl animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:1000ms]">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/20 text-red-500 border border-red-500/30" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/20 text-yellow-500 border border-yellow-500/30" />
              <div className="h-3 w-3 rounded-full bg-green-500/20 text-green-500 border border-green-500/30" />
              <div className="ml-2 text-xs font-medium text-white/30">terminal</div>
            </div>
            <div className="overflow-x-auto p-4 text-left font-mono text-sm leading-6">
               <div className="flex items-center gap-2 mb-2">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">npx seo-lint-cli ./dist</span>
               </div>
               <div className="text-white/70">
                  <div className="flex items-center gap-2 text-white/90">
                      <span>🔎 SEO Lint Report</span>
                  </div>
                  <div className="border-t border-dashed border-white/20 my-1 w-full max-w-md"></div>
                  <div>
                     <span className="text-white">📄 Page: index.html</span>
                     <span className="ml-4 text-emerald-400 font-bold">🏆 SEO Score: 92/100</span>
                  </div>
                  <div className="ml-4 mt-1 text-xs text-white/40">
                      <span className="text-green-400">✓</span> Title Present
                      <span className="ml-3 text-green-400">✓</span> Meta Desc
                      <span className="ml-3 text-green-400">✓</span> H1
                  </div>
                  <br />
                  <div>
                     <span className="text-white">📄 Page: contact.html</span>
                     <span className="ml-4 text-yellow-400 font-bold">🏆 SEO Score: 65/100</span>
                  </div>
                  <div className="ml-4 mt-1">
                     <span className="text-rose-400">✖ Image missing alt text (src="/logo.png")</span>
                  </div>
               </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  }

