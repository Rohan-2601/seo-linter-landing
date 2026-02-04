"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Book, Terminal, Settings, ShieldAlert, Zap, Command, Layout } from "lucide-react";
import { cn } from "@/lib/utils";

import { DocsFooter } from "@/components/docs/DocsFooter";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const nav = [
    { name: "Introduction", href: "/docs", icon: Book },
    { name: "Installation", href: "/docs/installation", icon: Terminal },
    { name: "Usage", href: "/docs/usage", icon: Zap },
    { name: "Rules", href: "/docs/rules", icon: ShieldAlert },
    { name: "Examples", href: "/docs/examples", icon: Layout },
    { name: "Commands", href: "/docs/commands", icon: Command },
  ];

  return (
    <div className="flex min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-indigo-500/30"> 

      {/* MOBILE HAMBURGER MENU */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-white/90 uppercase tracking-widest flex items-center gap-2">
            <span className="h-4 w-4 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">L</span>
            Docs
        </span>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside 
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 w-72 bg-[#0F0F0F]/80 backdrop-blur-xl border-r border-white/5 p-6 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:block md:h-screen md:top-0 md:sticky overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-10 mt-2">
            <h2 className="text-sm font-bold text-white tracking-widest uppercase flex items-center gap-2 opacity-50">
                <Book className="h-4 w-4" />
                Documentation
            </h2>
            {/* Close button inside sidebar for mobile */}
            <button 
                onClick={() => setIsSidebarOpen(false)} 
                className="md:hidden p-1 text-white/50 hover:text-white transition-colors"
            >
                <X size={20}/>
            </button>
        </div>

        <nav className="space-y-1">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    : "text-white/60 hover:bg-white/5 hover:text-white border border-transparent"
                )}
              >
                <item.icon className={cn("h-4 w-4 transition-colors", isActive ? "text-indigo-400" : "text-white/40 group-hover:text-white")} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 min-w-0 md:pl-0 pt-16 md:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-16">
          <div className="animate-fade-in-up">
            {children}
            <DocsFooter />
          </div>
        </div>
      </main>
    </div>
  );
}
