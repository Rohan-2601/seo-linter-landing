"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

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
        <path d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
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

const FeatureSection = () => {
  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      {/* BACKGROUND EFFECTS (Matched to Hero) */}
      <div className="absolute inset-0 z-0 opacity-50">
        <BackgroundRippleEffect />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-[#0A0A0A]/0 to-[#0A0A0A]/0" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Everything You Need for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-300">SEO Hygiene</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/60">
            seo-lint-cli helps developers catch SEO mistakes early without breaking the build.
            Designed for speed, simplicity, and accuracy.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative flex flex-col items-start p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
                {f.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
