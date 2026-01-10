"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#37353E]">

      {/* BACKGROUND RIPPLE - ALWAYS VISIBLE */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]">
        <BackgroundRippleEffect />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-[#D3DAD9] md:text-6xl lg:text-7xl">
          Catch SEO Mistakes
          <br /> Before You Deploy
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-[#D3DAD9]/80">
          <span className="font-semibold text-[#D3DAD9]">seo-lint-cli</span> scans your
          HTML builds or live URLs and warns you about missing titles, descriptions,
          canonical tags, H1 issues, and Open Graph problems — no config required.
        </p>

        <div className="mx-auto mt-10 flex w-full items-center justify-center gap-4">
          <a
            href="https://www.npmjs.com/package/seo-lint-cli"
            target="_blank"
            className="rounded-lg bg-[#715A5A] px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-[#8B7070]"
          >
            Install via npm
          </a>

          <a
            href="/docs"
            className="rounded-lg border border-[#D3DAD9]/40 px-6 py-3 text-sm font-medium text-[#D3DAD9] backdrop-blur-lg transition hover:bg-[#44444E]"
          >
            Read Docs
          </a>
        </div>
      </div>
    </div>
  );
}

