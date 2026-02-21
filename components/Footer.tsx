"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function LandingFooter() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#050505] text-white border-t border-white/5 py-12 relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* TOP CONTENT */}
        <div className="flex flex-col md:flex-row justify-between gap-12 items-start">

          {/* Branding */}
          <div className="max-w-sm">
            <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="h-6 w-6 rounded bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] text-white"></span>
              seo-lint-cli
            </h2>
            <p className="mt-4 text-sm text-white/40 leading-relaxed transition-colors hover:text-white/60">
              A lightweight SEO linter that helps developers catch missing title tags,
              meta descriptions, canonical URLs, and OG issues — before deploy.
            </p>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-4">
              Connect
            </h4>

            <div className="flex items-center gap-5">

              {/* GitHub */}
              <a
                href="https://github.com/Rohan-2601/SEO-LINTER"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rohan-raj-5b5198294/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#0077b5] hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/rjha72"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#1DA1F2] hover:-translate-y-1 transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-white/5 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/30">
          <p className="hover:text-white/50 transition-colors">© {new Date().getFullYear()} Rohan — All rights reserved.</p>

          <p className="mt-4 md:mt-0 flex items-center gap-1 hover:text-white/50 transition-colors">
            Built with <span className="text-emerald-500 animate-pulse">●</span> for developers
          </p>
        </div>

      </div>
    </motion.footer>
  );
}
