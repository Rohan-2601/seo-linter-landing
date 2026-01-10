"use client";
import React from "react";

const features = [
  {
    title: "Scan Local Builds",
    desc: "Lint your dist/build folder for missing titles, descriptions, canonicals, H1 errors, and OG metadata.",
    icon: (
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
        <path d="M45 29V23C45 10.85 35.15 1 23 1 10.85 1 1 10.85 1 23V29" stroke="#D3DAD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z" fill="#715A5A" stroke="#D3DAD9" strokeWidth="2" />
        <path d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z" fill="#715A5A" stroke="#D3DAD9" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Scan Live URLs",
    desc: "Use `--url` or `--urls` to lint staging sites, production pages, or any deployed URL.",
    icon: (
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
        <path d="M27 27H19V45H27V27Z" stroke="#D3DAD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 37H1V45H9V37Z" fill="#715A5A" stroke="#D3DAD9" strokeWidth="2" />
        <path d="M45 17H37V45H45V17Z" fill="#715A5A" stroke="#D3DAD9" strokeWidth="2" />
        <path d="M5 17L15 7L23 15L37 1" stroke="#D3DAD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 1H37V10" stroke="#D3DAD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Open Graph Checker",
    desc: "Detect missing OG tags for social previews: og:title, og:description, og:image.",
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <path d="M41 1H1V41H41V1Z" stroke="#D3DAD9" strokeWidth="2"/>
        <path d="M18 7H7V20H18V7Z" stroke="#D3DAD9" strokeWidth="2"/>
        <path d="M18 26H7V35H18V26Z" stroke="#D3DAD9" strokeWidth="2"/>
        <path d="M35 7H24V35H35V7Z" fill="#715A5A" stroke="#D3DAD9" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "HTML Structure Validation",
    desc: "Find missing <title>, missing meta description, missing <h1>, or multiple H1 tags.",
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <path
          d="M9 9H33M9 17H33M1 25H13V31H29V25H41"
          stroke="#D3DAD9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M37 1H5C2.79 1 1 2.79 1 5V37C1 39.21 2.79 41 5 41H37C39.21 41 41 39.21 41 37V5C41 2.79 39.21 1 37 1Z" stroke="#D3DAD9" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Non-Blocking Warnings",
    desc: "You see clear warnings, but builds never fail. Perfect for CI/CD pipelines.",
    icon: (
      <svg width="46" height="42" viewBox="0 0 46 42" fill="none">
        <path d="M30.56 18.46C27.9 15.8 23 15.8 20.34 18.46 17.68 21.12 17.68 26.02 20.34 28.68L23 31.34L25.66 28.68C28.32 26.02 28.32 21.12 25.66 18.46Z" fill="#715A5A" stroke="#D3DAD9" strokeWidth="2"/>
        <path d="M41 41H5C3.94 41 2.92 40.58 2.17 39.83 1.42 39.08 1 38.06 1 37V1H17L22 9H45V37C45 38.06 44.58 39.08 43.83 39.83 43.08 40.58 42.06 41 41 41Z" stroke="#D3DAD9" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Framework Agnostic",
    desc: "Works with Next.js, React, Astro, SvelteKit, Nuxt, Vanilla HTML — everything.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M25 7C34.94 7 43 15.06 43 25 43 34.94 34.94 43 25 43 15.06 43 7 34.94 7 25" stroke="#D3DAD9" strokeWidth="2"/>
        <path d="M19 1C9.06 1 1 9.06 1 19H19V1Z" fill="#715A5A" stroke="#D3DAD9" strokeWidth="2"/>
      </svg>
    ),
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-[#37353E]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#D3DAD9] md:text-5xl">
            Everything You Need for SEO Hygiene
          </h2>
          <p className="mt-4 text-[#D3DAD9]/80 max-w-2xl mx-auto md:text-lg">
            seo-lint-cli helps developers catch SEO mistakes early without breaking the build.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="text-center bg-[#44444E] border border-[#D3DAD9]/20 p-10 rounded-xl shadow-lg shadow-black/20"
            >
              <div className="mx-auto">{f.icon}</div>
              <h3 className="mt-8 text-xl font-bold text-[#D3DAD9]">{f.title}</h3>
              <p className="mt-4 text-[#D3DAD9]/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
