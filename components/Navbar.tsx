"use client";

import React, { useEffect, useState } from "react";
import { Download, Star, Github } from "lucide-react";

export function Navbar() {
  const [stars, setStars] = useState<number | null>(null);
  const [downloads, setDownloads] = useState<number | null>(null);

  useEffect(() => {
    // Fetch GitHub Stars
    fetch("https://api.github.com/repos/Rohan-2601/SEO-LINTER")
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count))
      .catch((e) => console.error("Failed to fetch stars", e));

    // Fetch NPM Downloads (last month)
    fetch("https://api.npmjs.org/downloads/point/last-month/seo-lint-cli")
      .then((res) => res.json())
      .then((data) => setDownloads(data.downloads))
      .catch((e) => console.error("Failed to fetch downloads", e));
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(num);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-fit z-50">
      <div className="flex items-center gap-3 rounded-full border border-[#D3DAD9]/10 bg-[#37353E]/80 px-6 py-2.5 shadow-xl backdrop-blur-md shadow-black/20">
        
        {/* GitHub Stars */}
        <a
          href="https://github.com/Rohan-2601/SEO-LINTER"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 pr-4 border-r border-[#D3DAD9]/10 transition-colors hover:opacity-80"
        >
            <Github className="h-4 w-4 text-[#D3DAD9]"/>
          <div className="flex items-center gap-1.5">
            <Star className="h-4 w-4 text-[#715A5A] fill-[#715A5A]" />
            <span className="text-sm font-medium text-[#D3DAD9]">
              {stars !== null ? formatNumber(stars) : "..."}
            </span>
          </div>
        </a>

        {/* NPM Downloads */}
        <a
          href="https://www.npmjs.com/package/seo-lint-cli"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 pl-1 transition-colors hover:opacity-80"
        >
          <div className="flex items-center gap-1.5">
            <Download className="h-4 w-4 text-[#715A5A]" />
            <span className="text-sm font-medium text-[#D3DAD9]">
              {downloads !== null ? `${formatNumber(downloads)}/mo` : "..."}
            </span>
          </div>
        </a>

      </div>
    </nav>
  );
}
