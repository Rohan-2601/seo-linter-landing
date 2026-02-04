"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

const features = [
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
    title: "Open Graph Checker",
    desc: "Detect missing OG tags for social previews: og:title, og:description, og:image.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 42 42" fill="none" className="text-white">
        <path d="M41 1H1V41H41V1Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 7H7V20H18V7Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 26H7V35H18V26Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M35 7H24V35H35V7Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "HTML Structure Validation",
    desc: "Find missing <title>, missing meta description, missing <h1>, or multiple H1 tags.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 42 42" fill="none" className="text-white">
        <path
          d="M9 9H33M9 17H33M1 25H13V31H29V25H41"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M37 1H5C2.79 1 1 2.79 1 5V37C1 39.21 2.79 41 5 41H37C39.21 41 41 39.21 41 37V5C41 2.79 39.21 1 37 1Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Non-Blocking Warnings",
    desc: "You see clear warnings, but builds never fail. Perfect for CI/CD pipelines.",
    icon: (
      <svg width="40" height="36" viewBox="0 0 46 42" fill="none" className="text-white">
        <path d="M30.56 18.46C27.9 15.8 23 15.8 20.34 18.46 17.68 21.12 17.68 26.02 20.34 28.68L23 31.34L25.66 28.68C28.32 26.02 28.32 21.12 25.66 18.46Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
        <path d="M41 41H5C3.94 41 2.92 40.58 2.17 39.83 1.42 39.08 1 38.06 1 37V1H17L22 9H45V37C45 38.06 44.58 39.08 43.83 39.83 43.08 40.58 42.06 41 41 41Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Framework Agnostic",
    desc: "Works with Next.js, React, Astro, SvelteKit, Nuxt, Vanilla HTML — everything.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 44 44" fill="none" className="text-white">
        <path d="M25 7C34.94 7 43 15.06 43 25 43 34.94 34.94 43 25 43 15.06 43 7 34.94 7 25" stroke="currentColor" strokeWidth="2"/>
        <path d="M19 1C9.06 1 1 9.06 1 19H19V1Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
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
