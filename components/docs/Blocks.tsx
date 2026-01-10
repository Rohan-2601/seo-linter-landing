import React from "react";

export function DocBlock({ title, children }: any) {
  return (
    <div className="rounded-2xl bg-[#2E2E36]/60 backdrop-blur-sm p-8 border border-[#D3DAD9]/5 shadow-xl shadow-black/10 hover:border-[#D3DAD9]/10 transition-colors">
      <h3 className="text-xl font-bold text-[#D3DAD9] mb-6 tracking-tight flex items-center gap-3">
        <span className="w-1.5 h-6 bg-[#715A5A] rounded-full"></span>
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export function Code({ children }: any) {
  return (
    <div className="rounded-lg bg-[#1E1E24] border border-[#D3DAD9]/5 px-5 py-3 font-mono text-[15px] text-[#D3DAD9] overflow-x-auto shadow-inner">
      {children}
    </div>
  );
}

export function Line({ children }: any) {
  return <p className="text-[#D3DAD9]/80 text-sm">{children}</p>;
}
