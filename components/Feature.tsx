"use client";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  {
    title: "SEO Scoring (0-100)",
    desc: "Every page gets a score based on passed checks. Aim for 100/100 to ensure perfect SEO health.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 46 46" fill="none" className="text-white">
        <path d="M23 1L29.7961 14.7709L45 16.9806L34 27.7042L36.5962 42.847L23 35.7L9.40384 42.847L12 27.7042L1 16.9806L16.2039 14.7709L23 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 45V9" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
      </svg>
    ),
  },
  {
    title: "Scan Local Builds",
    desc: "Lint your dist/build folder for missing titles, descriptions, canonicals, H1 errors, and OG metadata.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 46 46" fill="none" className="text-white">
        <path d="M45 29V23C45 10.85 35.15 1 23 1 10.85 1 1 10.85 1 23V29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
        <path d="M45 29H33V45H41C43.209 45 45 41V29Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Scan Live URLs",
    desc: "Use `--url` or `--urls` to lint staging sites, production pages, or any deployed URL.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 46 46" fill="none" className="text-white">
        <path d="M27 27H19V45H27V27Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 37H1V45H9V37Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
        <path d="M45 17H37V45H45V17Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
        <path d="M5 17L15 7L23 15L37 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 1H37V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Quality Checks",
    desc: "Validates that titles (10-60 chars) and meta descriptions (50-160 chars) are the optimal length.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 42 42" fill="none" className="text-white">
        <path d="M41 21C41 32.0457 32.0457 41 21 41C9.9543 41 1 32.0457 1 21C1 9.9543 9.9543 1 21 1C32.0457 1 41 9.9543 41 21Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M21 9V21L29 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 21H31" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="4 4" />
      </svg>
    ),
  },
  {
    title: "Image Accessibility",
    desc: "Automatically detects images missing `alt` text to ensure your site is accessible and SEO friendly.",
    icon: (
      <svg width="40" height="36" viewBox="0 0 46 42" fill="none" className="text-white">
        <path d="M1 1H45V41H1V1Z" stroke="currentColor" strokeWidth="2" />
        <path d="M1 31L11 21L21 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 27L33 19L45 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="33" cy="11" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Unified Report",
    desc: "See a beautiful summary of all passed rules, captured metadata, and issues in one single view.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 44 44" fill="none" className="text-white">
        <path d="M9 1H35C37.2091 1 39 2.79086 39 5V39C39 41.2091 37.2091 43 35 43H9C6.79086 43 5 41.2091 5 39V5C5 2.79086 6.79086 1 9 1Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M13 11H31" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M13 19H31" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M13 27H25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="31" cy="33" r="6" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
        <path d="M29 33L31 35L35 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const FeatureCard = ({ f, i }: { f: typeof features[0]; i: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.2 1"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="group relative flex flex-col items-start p-8 rounded-3xl border border-white/5 bg-[#050505] hover:bg-[#0A0A0A] transition-colors duration-500 hover:border-white/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-transparent to-white/0 opacity-0 group-hover:from-white/5 group-hover:to-transparent group-hover:opacity-100 transition-all duration-700 rounded-3xl pointer-events-none" />
      
      <div className="mb-6 relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A0A0A] border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <motion.div
          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 text-white/80 group-hover:text-white"
        >
          {f.icon}
        </motion.div>
      </div>
      <h3 className="text-xl font-medium text-white/90 group-hover:text-white transition-colors duration-300">
        {f.title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-300 font-light">
        {f.desc}
      </p>
    </motion.div>
  );
};

const FeatureSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none">
        <BackgroundRippleEffect />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_white_0%,_transparent_5%)] opacity-[0.03] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
            Everything You Need for <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">SEO Hygiene.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/50 font-light">
            seo-lint-cli helps developers catch SEO mistakes early without breaking the build.
            Designed for speed, simplicity, and accuracy.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
