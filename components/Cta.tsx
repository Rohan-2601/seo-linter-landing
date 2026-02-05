"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Cta() {
  const [copied, setCopied] = useState(false);
  const command = "npx seo-lint-cli --help";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-32">
        {/* Background Gradients */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Ready to Ship <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Flawless SEO?</span>
        </h2>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          Join developers who catch SEO issues before they hit production.
          <br /> Open source, free, and runs in seconds.
        </p>

        {/* Command Box */}
        <div className="mx-auto mt-12 max-w-lg">
          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0F0F0F] p-1 shadow-2xl transition-all hover:border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-center justify-between gap-4 rounded-lg bg-black/40 px-4 py-3 font-mono text-sm backdrop-blur-sm">
                <div className="flex items-center gap-3 overflow-x-auto text-white/90 scrollbar-hide">
                    <span className="text-emerald-500 font-bold">➜</span>
                    <span className="whitespace-nowrap">{command}</span>
                </div>
                
                <button
                    onClick={handleCopy}
                    className="relative p-2 rounded-md hover:bg-white/10 transition-colors text-white/60 hover:text-white"
                    aria-label="Copy command"
                >
                    {copied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                    <Copy className="h-4 w-4" />
                    )}
                </button>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/docs"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-xl shadow-white/5 transition-all hover:scale-105 hover:shadow-white/10"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://github.com/Rohan-2601/SEO-LINTER"
            target="_blank"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
          >
            View on GitHub
          </a>
        </div>

        <p className="mt-8 text-sm text-white/30">
          MIT Licensed • No Signup Required
        </p>
      </div>
    </section>
  );
}
