"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

export function Cta() {
  const [copied, setCopied] = useState(false);
  const command = "npm install -g seo-lint-cli";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-[#37353E] py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#37353E] rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D3DAD9] to-[#D3DAD9]/70 md:text-5xl tracking-tight">
          Ready to Ship Flawless SEO?
        </h2>
        
        <p className="mx-auto mt-6 max-w-2xl text-[#D3DAD9]/70 text-lg">
          Join developers who catch SEO issues before they hit production.
          <br /> Open source, free, and runs in seconds.
        </p>

        {/* Command Box */}
        <div className="mx-auto mt-10 max-w-lg">
          <div className="relative group rounded-xl border border-[#D3DAD9]/10 bg-[#222222] p-4 shadow-2xl transition-all hover:border-[#D3DAD9]/20">
            <div className="flex items-center justify-between gap-4 font-mono text-sm">
              <div className="flex items-center gap-3 overflow-x-auto text-[#D3DAD9] scrollbar-hide">
                <Terminal className="h-5 w-5 text-[#715A5A] shrink-0" />
                <span className="whitespace-nowrap">{command}</span>
              </div>
              
              <button
                onClick={handleCopy}
                className="relative p-2 rounded-lg hover:bg-[#D3DAD9]/10 transition-colors text-[#D3DAD9]/60 hover:text-[#D3DAD9]"
                aria-label="Copy command"
              >
                {copied ? (
                  <Check className="h-5 w-5 text-green-400" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.npmjs.com/package/seo-lint-cli"
            target="_blank"
            className="w-full sm:w-auto rounded-lg bg-[#715A5A] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#715A5A]/20 transition-all hover:bg-[#8B7070] hover:shadow-[#715A5A]/30 hover:-translate-y-0.5"
          >
            Get Started
          </a>
          <a
            href="https://github.com/Rohan-2601/SEO-LINTER"
            target="_blank"
            className="w-full sm:w-auto rounded-lg border border-[#D3DAD9]/20 px-8 py-3.5 text-sm font-semibold text-[#D3DAD9] backdrop-blur-sm transition-all hover:bg-[#D3DAD9]/5 hover:border-[#D3DAD9]/40"
          >
            View on GitHub
          </a>
        </div>

        <p className="mt-8 text-sm text-[#D3DAD9]/40">
          MIT Licensed • No Signup Required
        </p>
      </div>
    </section>
  );
}
