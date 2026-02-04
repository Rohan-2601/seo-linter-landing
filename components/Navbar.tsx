"use client";

import React, { useEffect, useState } from "react";
import { Download, Star, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [stars, setStars] = useState<number | null>(null);
  const [downloads, setDownloads] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(num);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out flex justify-center py-6",
      scrolled ? "py-4" : "py-6"
    )}>
      <div className={cn(
        "flex items-center gap-4 rounded-full border px-6 py-2.5 shadow-2xl transition-all duration-300 backdrop-blur-md",
        scrolled 
          ? "bg-black/40 border-white/10 shadow-black/20" 
          : "bg-white/5 border-white/5 shadow-none hover:bg-white/10"
      )}>
        
        {/* GitHub Stars */}
        <a
          href="https://github.com/Rohan-2601/SEO-LINTER"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 pr-4 border-r border-white/10 transition-colors hover:opacity-80"
        >
            <Github className="h-4 w-4 text-white/70 group-hover:text-white transition-colors"/>
          <div className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-white/90">
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
            <Download className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-sm font-medium text-white/90">
              {downloads !== null ? `${formatNumber(downloads)}/mo` : "..."}
            </span>
          </div>
        </a>

      </div>
    </nav>
  );
}
