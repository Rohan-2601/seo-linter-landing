"use client";

import React from "react";
import { Book, Terminal, Settings, ShieldAlert, Zap, Github, Package } from "lucide-react";
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
    <aside className="fixed top-24 left-4 h-[calc(100vh-7rem)] w-72 hidden lg:flex flex-col rounded-2xl border border-white/5 bg-[#0F0F0F]/60 backdrop-blur-xl">
      <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10">
        
        {/* CONTENTS */}
        <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
            Documentation
            </h3>
            <nav className="space-y-1">
            {navItems.map((item) => (
                <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:text-white"
                >
                <item.icon className="h-4 w-4 text-white/40 transition-colors group-hover:text-indigo-400" />
                {item.name}
                </Link>
            ))}
            </nav>
        </div>
      
        <div className="my-8 h-px w-full bg-white/5"></div>

        {/* RESOURCES */}
        <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                Resources
            </h3>
            <nav className="space-y-1">
                <a 
                    href="https://github.com/vkhare-dot/seo-lint-cli" 
                    target="_blank" 
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:text-white"
                >
                    <Github className="h-4 w-4 text-white/40 transition-colors group-hover:text-white" />
                    GitHub Repo
                </a>
                <a 
                    href="https://www.npmjs.com/package/seo-lint-cli" 
                    target="_blank" 
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:text-white"
                >
                    <Package className="h-4 w-4 text-white/40 transition-colors group-hover:text-red-400" />
                    NPM Package
                </a>
            </nav>
        </div>

      </div>
    </aside>
  );
}
