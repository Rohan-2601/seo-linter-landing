"use client";

import React from "react";
import { Book, Terminal, Settings, ShieldAlert, Zap } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Installation", href: "#installation", icon: Terminal },
  { name: "Usage", href: "#usage", icon: Zap },
  { name: "Options & Flags", href: "#options", icon: Settings },
  { name: "SEO Rules", href: "#rules", icon: ShieldAlert },
  { name: "Example Output", href: "#example", icon: Book },
];

export function DocsSidebar() {
  return (
    <aside className="fixed top-20 left-0 h-[calc(100vh-5rem)] w-64 overflow-y-auto border-r border-[#D3DAD9]/10 bg-[#37353E]/50 backdrop-blur-sm hidden lg:block">
      <div className="p-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#D3DAD9]/50">
          Contents
        </h3>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#D3DAD9] transition-colors hover:bg-[#44444E] hover:text-white"
            >
              <item.icon className="h-4 w-4 text-[#715A5A]" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      
       <div className="mt-8 p-6 pt-0">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#D3DAD9]/50">
            Resources
        </h3>
        <nav className="space-y-1">
            <a href="https://github.com/vkhare-dot/seo-lint-cli" target="_blank" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#D3DAD9]/70 transition-colors hover:bg-[#44444E] hover:text-white">
                GitHub Repo
            </a>
            <a href="https://www.npmjs.com/package/seo-lint-cli" target="_blank" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#D3DAD9]/70 transition-colors hover:bg-[#44444E] hover:text-white">
                NPM Package
            </a>
        </nav>
       </div>
    </aside>
  );
}
