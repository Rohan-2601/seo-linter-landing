"use client";

import React, { useState } from "react";
import { Check, Copy, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Cta() {
  const [copied, setCopied] = useState(false);
  const command = "npx seo-lint-cli --help";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-black py-40">
      {/* Background Gradients */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-7xl perspective-1000">
          Ready to Ship{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
            Flawless SEO?
          </span>
        </h2>
        
        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/50 leading-relaxed md:text-xl font-light">
          Join developers who catch SEO issues before they hit production.
          <br /> Open source, free, and runs in seconds.
        </p>

        {/* Command Box */}
        <div className="mx-auto mt-16 max-w-lg">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-full border border-white/10 bg-[#050505] p-[1px] transition-all hover:border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-center justify-between gap-4 rounded-full bg-black px-6 py-4 font-mono text-sm">
                <div className="flex items-center gap-3 overflow-x-auto text-white/90 scrollbar-hide">
                    <span className="text-white/30">$</span>
                    <span className="whitespace-nowrap font-medium text-white/80">{command}</span>
                </div>
                
                <button
                    onClick={handleCopy}
                    className="relative p-2 rounded-md hover:bg-white/5 transition-colors text-white/40 hover:text-white"
                    aria-label="Copy command"
                >
                    {copied ? (
                    <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                      <Check className="h-4 w-4 text-white" />
                    </motion.div>
                    ) : (
                    <Copy className="h-4 w-4" />
                    )}
                </button>
            </div>
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
          <MagneticButton>
            <a
              href="/docs"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-all hover:scale-105 active:scale-95"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </MagneticButton>
          
          <MagneticButton>
            <a
              href="https://github.com/Rohan-2601/SEO-LINTER"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/[0.05] active:scale-95"
            >
              View on GitHub
            </a>
          </MagneticButton>
        </div>

        <p className="mt-12 text-xs text-white/30 uppercase tracking-[0.2em] font-medium">
          MIT Licensed • No Signup Required
        </p>
      </motion.div>
    </section>
  );
}
