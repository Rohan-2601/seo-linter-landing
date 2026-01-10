import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function DocsFooter() {
  return (
    <footer className="mt-20 border-t border-[#D3DAD9]/10 pt-10 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[#D3DAD9]/60 text-sm">
          © {new Date().getFullYear()} seo-lint-cli. Open Source.
        </div>
        
        <div className="flex items-center gap-6">
          <Link 
            href="https://github.com/Rohan-2601/seo-lint-cli" 
            target="_blank"
            className="text-[#D3DAD9]/60 hover:text-[#D3DAD9] transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link 
            href="#" 
            className="text-[#D3DAD9]/60 hover:text-[#D3DAD9] transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
