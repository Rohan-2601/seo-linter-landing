"use client";

import React, { useEffect, useState } from "react";
import { Download, Star, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

export function Navbar() {
  const [stars, setStars] = useState<number | null>(null);
  const [downloads, setDownloads] = useState<number | null>(null);
  const { scrollY } = useScroll();
  
  // Transform values for scroll effects
  const navY = useTransform(scrollY, [0, 50], [0, 0]);
  const navWidth = useTransform(scrollY, [0, 50], ["100%", "auto"]);
  const navPadding = useTransform(scrollY, [0, 50], ["24px", "12px"]);
  const navBorderColor = useTransform(scrollY, [0, 50], ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]);
  const navBg = useTransform(scrollY, [0, 50], ["rgba(0,0,0,0)", "rgba(5,5,5,0.7)"]);
  const navBackdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);

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
    <motion.nav 
      style={{ y: navY, paddingTop: navPadding }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full"
    >
      <motion.div 
        style={{ 
          backgroundColor: navBg, 
          borderColor: navBorderColor,
          backdropFilter: navBackdropBlur,
          WebkitBackdropFilter: navBackdropBlur, 
        }}
        className={cn(
          "flex items-center gap-6 rounded-full border border-transparent px-8 py-3 transition-shadow duration-500",
          "hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]"
        )}
      >
        {/* LOGO AREA (Optional, but good for premium feel) */}
        <a href="/" className="flex items-center gap-2 group mr-4">
          <div className="h-2 w-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-500 ease-out" />
          <span className="text-sm font-medium text-white tracking-widest hidden sm:block">
            SEO LINTER
          </span>
        </a>

        <div className="h-4 w-px bg-white/10 hidden sm:block" />

        <div className="flex items-center gap-4">
          {/* GitHub Stars */}
          <a
            href="https://github.com/Rohan-2601/SEO-LINTER"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 transition-all hover:opacity-100 opacity-60"
          >
              <Github className="h-4 w-4 text-white group-hover:text-white transition-colors"/>
            <div className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 text-white/40 group-hover:text-white transition-colors" />
              <span className="text-xs font-medium text-white tracking-wider">
                {stars !== null ? formatNumber(stars) : "..."}
              </span>
            </div>
          </a>

          {/* NPM Downloads */}
          <a
            href="https://www.npmjs.com/package/seo-lint-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 transition-all hover:opacity-100 opacity-60"
          >
            <div className="flex items-center gap-1.5">
              <Download className="h-3.5 w-3.5 text-white/40 group-hover:text-white transition-colors" />
              <span className="text-xs font-medium text-white tracking-wider">
                {downloads !== null ? `${formatNumber(downloads)}/mo` : "..."}
              </span>
            </div>
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
