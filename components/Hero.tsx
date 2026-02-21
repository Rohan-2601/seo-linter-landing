"use client";
import React, { useState } from "react";
import { Terminal, Play, CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import { DemoModal } from "@/components/DemoModal";
import { motion, Variants } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }, // Expo Out
  },
};

export function Hero() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-[#000000] text-white selection:bg-white/30 selection:text-black flex flex-col justify-center">
      <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />

      {/* PREMIUM BACKGROUND GLOWS - Very subtle, elegant */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[600px] bg-gradient-to-b from-emerald-500/10 to-indigo-500/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-t from-zinc-800/20 to-transparent blur-[120px] rounded-full pointer-events-none" />
      
      {/* Noise Texture for physical feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT COLUMN - TEXT CONTENT */}
        <div className="flex flex-col items-start text-left perspective-1000">
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/70 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-semibold tracking-wide uppercase text-[10px]">
                Linter v0.1.8 Released
              </span>
            </div>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl sm:text-6xl lg:text-[76px] font-medium tracking-tight leading-[1.05] text-white"
          >
            Deploy with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
              Confidence.
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-[480px] text-lg text-white/50 leading-relaxed font-light"
          >
            Catch missing meta tags, broken canonicals, and accessibility issues instantly. The lightweight CLI tool that enforces SEO hygiene locally, before production.
          </motion.p>

          {/* BUTTONS */}
          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center gap-5">
            <MagneticButton>
              <a
                href="https://www.npmjs.com/package/seo-lint-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                <Terminal className="h-4 w-4" />
                npm install
              </a>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={() => setShowDemo(true)}
                className="group relative flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/[0.08] hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                <Play className="h-4 w-4 fill-white text-white" />
                Watch Demo
              </button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - VISUAL GRAPHIC */}
        <motion.div
           variants={itemVariants}
           className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end"
           style={{ perspective: "1200px" }}
        >
          {/* STATIC CARD 2 (Background / Error Card) */}
          <motion.div 
            variants={itemVariants}
            style={{ rotateZ: -2, rotateX: 8, y: -10 }}
            className="absolute left-[5%] md:left-[15%] lg:left-[5%] top-[10%] w-[280px] sm:w-[320px] rounded-2xl border border-white/5 bg-[#0A0A0A]/90 backdrop-blur-xl p-5 shadow-2xl z-0 transform-gpu"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/5 to-transparent rounded-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
              <div className="text-xs font-mono text-white/50">/about.html</div>
              <div className="text-[10px] uppercase tracking-widest text-rose-400 font-bold bg-rose-500/10 border border-rose-500/20 px-2 py-1 rounded">Score: 65</div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <XCircle className="w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" />
                <div className="text-xs text-white/60 leading-relaxed font-light">Missing `rel="canonical"` tag</div>
              </div>
              <div className="flex gap-3 items-start">
                <XCircle className="w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" />
                <div className="text-xs text-white/60 leading-relaxed font-light">Image missing alt text (src="/team.jpg")</div>
              </div>
            </div>
          </motion.div>

          {/* STATIC CARD 1 (Foreground / Success Card) */}
          <motion.div 
            variants={itemVariants}
            style={{ rotateZ: 1, rotateY: -3, y: 10 }}
            className="absolute right-[5%] md:right-[15%] lg:right-[-5%] bottom-[10%] lg:bottom-[15%] w-[320px] sm:w-[380px] rounded-3xl border border-white/10 bg-gradient-to-b from-[#151515]/95 to-[#0A0A0A]/95 backdrop-blur-2xl p-6 md:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-10 transform-gpu"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent rounded-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#1A1A1A] border border-white/5 flex items-center justify-center shadow-inner">
                  <div className="h-3.5 w-3.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.6)]" />
                </div>
                <div>
                  <div className="text-sm font-mono text-white/90">/index.html</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">Tested in 120ms</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-light text-emerald-400 tracking-tight">100<span className="text-sm text-emerald-400/40">/100</span></div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Title tag 55 chars (Optimal)",
                "Meta description is 142 chars",
                "Open Graph image configured",
                "H1 tag found uniquely",
                "No broken local links"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-white/[0.03] bg-white/[0.01] p-3 transition-colors hover:bg-white/[0.03]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400/80 shrink-0" />
                  <div className="text-xs text-white/70 font-light">{text}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 w-full group overflow-hidden relative cursor-pointer rounded-xl bg-white/[0.03] border border-white/[0.05] p-3.5 flex items-center justify-center gap-2 transition-all hover:bg-white/[0.06] hover:border-white/10">
              <span className="text-xs font-medium text-white/80 group-hover:text-white transition-colors">View Full Report</span>
              <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors group-hover:translate-x-0.5" />
            </div>
          </motion.div>

        </motion.div>

      </motion.div>
    </div>
  );
}
