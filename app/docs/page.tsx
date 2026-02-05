import { DocBlock, Code, Line } from "@/components/docs/Blocks";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-white tracking-tight mb-6">Introduction</h1>

      <p className="text-lg text-white/70 leading-relaxed mb-4">
        <strong className="text-white">seo-lint-cli</strong> is a developer-friendly SEO linting tool for keeping your static sites and live URLs search-engine optimized.
      </p>
      
      <p className="text-lg text-white/70 leading-relaxed mb-8">
        It audits your site for missing meta tags, broken structures, and accessibility issues, giving you an <strong className="text-emerald-400">SEO Score (0-100)</strong> before you deploy.
      </p>

      <div className="space-y-8">
        <DocBlock title="Key Features">
            <Line>• Lint local HTML builds (Next.js, Vite, CRA, Astro, etc.)</Line>
            <Line>• Lint single live URLs</Line>
            <Line>• Lint multiple URLs via text file</Line>
            <Line>• CI/CD friendly (does not block builds by default)</Line>
        </DocBlock>

        <DocBlock title="Quick Start">
          <Line>Run it instantly with npx:</Line>
          <Code>npx seo-lint-cli --help</Code>
        </DocBlock>
        
        <div className="flex gap-4 pt-4">
            <Link 
                href="/docs/installation"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
            >
                Get Started
                <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
      </div>
    </div>
  );
}
