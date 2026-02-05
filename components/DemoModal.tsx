"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export function DemoModal({ isOpen, onClose, videoUrl = "https://www.loom.com/embed/0c8319c75bc6491ca9a5a4e6c794b53d" }: DemoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-20">
      
      {/* BACKDROP */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* MODAL CONTENT */}
      <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/10 shadow-2xl animate-fade-in-up">
        
        {/* HEADER / CLOSE BUTTON */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="rounded-full bg-black/50 p-2 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close demo</span>
          </button>
        </div>

        {/* VIDEO CONTAINER (16:9 Aspect Ratio) */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
        
      </div>
    </div>
  );
}
