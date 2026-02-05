import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function DocsFooter() {
  return (
    <footer className="mt-24 border-t border-white/5 pt-12 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white/40 text-sm font-medium">
          © {new Date().getFullYear()} seo-lint-cli. Open Source.
        </div>
        
        <div className="flex items-center gap-6">
          <Link 
            href="https://github.com/Rohan-2601/SEO-LINTER" 
            target="_blank"
            className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link 
            href="https://x.com/rjha72" 
            className="text-white/40 hover:text-[#1DA1F2] transition-colors p-2 hover:bg-white/5 rounded-lg"
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
