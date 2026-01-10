"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { DocsFooter } from "@/components/docs/DocsFooter";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const nav = [
    { name: "Introduction", href: "/docs" },
    { name: "Installation", href: "/docs/installation" },
    { name: "Usage", href: "/docs/usage" },
    { name: "Rules", href: "/docs/rules" },
    { name: "Examples", href: "/docs/examples" },
    { name: "Commands", href: "/docs/commands" },
  ];

  return (
    <div className="flex min-h-screen bg-[#37353E] text-[#D3DAD9] font-sans transition-all"> 

      {/* MOBILE HAMBURGER MENU */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-[#37353E]/95 backdrop-blur border-b border-[#D3DAD9]/10 px-4 py-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-[#D3DAD9]/70 uppercase tracking-wider">Docs Navigation</span>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg bg-[#44444E] text-[#D3DAD9] hover:bg-[#715A5A] transition-colors"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside 
        className={`
          fixed top-0 bottom-0 left-0 z-50 w-72 bg-[#2E2E36] border-r border-[#D3DAD9]/10 p-6 
          transform transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:block md:h-screen md:top-0 md:sticky
          overflow-y-auto scrollbar-thin scrollbar-thumb-[#715A5A] scrollbar-track-[#37353E]
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-[#D3DAD9] tracking-wide uppercase opacity-90">
                Documentation
            </h2>
            {/* Close button inside sidebar for mobile */}
            <button 
                onClick={() => setIsSidebarOpen(false)} 
                className="md:hidden p-1 text-[#D3DAD9]/70 hover:text-white"
            >
                <X size={20}/>
            </button>
        </div>

        <nav className="space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsSidebarOpen(false)}
              className={`block rounded-lg px-4 py-2.5 text-base font-medium transition-all duration-200
              ${
                pathname === item.href
                  ? "bg-[#715A5A] text-white shadow-lg shadow-[#715A5A]/20 translate-x-1"
                  : "text-[#D3DAD9]/70 hover:bg-[#37353E] hover:text-[#D3DAD9] hover:translate-x-1"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 min-w-0 md:pl-0 pt-12 md:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-8 text-lg leading-relaxed">
          {children}
          <DocsFooter />
        </div>
      </main>
    </div>
  );
}
