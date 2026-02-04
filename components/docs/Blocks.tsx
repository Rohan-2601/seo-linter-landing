import React from "react";
import { Terminal } from "lucide-react";

export function DocBlock({ title, children }: any) {
  return (
    <div className="group rounded-2xl bg-white/5 backdrop-blur-md p-8 border border-white/5 shadow-2xl transition-all hover:bg-white/[0.07] hover:border-white/10">
      <h3 className="text-lg font-bold text-white mb-6 tracking-wide flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
            <Terminal className="h-4 w-4" />
        </span>
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export function Code({ children }: any) {
  return (
    <div className="relative rounded-lg bg-[#050505] border border-white/10 py-3 pl-4 pr-3 font-mono text-[14px] text-emerald-400 overflow-x-auto shadow-inner flex items-center gap-3">
       <span className="text-white/20 select-none">$</span>
       <span className="flex-1">{children}</span>
    </div>
  );
}

export function Line({ children }: any) {
  return <p className="text-white/60 text-sm leading-relaxed">{children}</p>;
}
