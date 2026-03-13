"use client";
import React, { useState } from "react";
import { Terminal, Play } from "lucide-react";
import { DemoModal } from "@/components/DemoModal";
import { motion, Variants } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import Image from "next/image";

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
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-black text-white selection:bg-white/30 selection:text-black flex flex-col justify-center">
      <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />

      {/* Hero image background */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg"
          alt="SEO dashboard background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/80" />
      </div>

      {/* Accent glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-radial from-emerald-400/25 to-transparent blur-3xl pointer-events-none" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-5xl px-6 lg:px-8 pt-28 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="rounded-3xl border border-white/15 bg-black/35 backdrop-blur-md p-8 sm:p-10 lg:p-14">
          <motion.div
            variants={itemVariants}
            className="mb-7 flex justify-center"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs text-white/85">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-semibold tracking-wide uppercase text-[10px]">
                Linter v0.1.8 Released
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-center text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-white"
          >
            Ship SEO fixes
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-cyan-200">
              before production.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 mx-auto max-w-2xl text-center text-base sm:text-lg text-white/80 leading-relaxed"
          >
            SEO Linter scans your pages for missing meta tags, broken
            canonicals, OG gaps, and accessibility misses in seconds. Catch
            issues locally, not after deploy.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton>
              <a
                href="https://www.npmjs.com/package/seo-lint-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:scale-105 active:scale-95"
              >
                <Terminal className="h-4 w-4" />
                npm install
              </a>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={() => setShowDemo(true)}
                className="group relative flex items-center gap-3 rounded-full border border-white/30 bg-black/20 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
              >
                <Play className="h-4 w-4 fill-white text-white" />
                Watch Demo
              </button>
            </MagneticButton>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap justify-center gap-2.5 text-xs text-white/75"
          >
            {[
              "Canonical & meta checks",
              "Open Graph validation",
              "A11y hints",
              "Runs in your CI",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/25 bg-black/25 px-3 py-1.5 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
