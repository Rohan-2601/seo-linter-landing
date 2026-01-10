import { DocBlock, Code, Line } from "@/components/docs/Blocks";

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-[#D3DAD9]">Introduction</h1>

      <p className="mt-4 text-[#D3DAD9]/80">
        <strong>seo-lint-cli</strong> is a lightweight, framework-agnostic SEO linter for static HTML builds and live URLs.
      </p>
      
      <p className="mt-4 text-[#D3DAD9]/80">
        It helps developers catch missing titles, meta descriptions, canonical tags, H1 issues, and Open Graph problems before deployment.
      </p>

      <div className="mt-8 space-y-6">
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
      </div>
    </div>
  );
}
