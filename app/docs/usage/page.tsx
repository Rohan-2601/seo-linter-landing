import { DocBlock, Code, Line } from "@/components/docs/Blocks";

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-white tracking-tight mb-6">Usage</h1>

      <p className="text-lg text-white/70 leading-relaxed mb-8">
        You can lint a local build folder, a single live URL, or multiple URLs from a text file.
      </p>

      <div className="space-y-8">
        <DocBlock title="Case 1: Check a local build folder (most common)">
          <Line>If you’re using React / Vite / Next.js (static export):</Line>
          <Line><strong className="text-white">Step 1: Build your project</strong></Line>
          <Code>npm run build</Code>
          <Line>This usually creates a folder like <code>dist/</code>, <code>build/</code>, or <code>out/</code>.</Line>
          <Line><strong className="text-white">Step 2: Run SEO-LINTER on the build output</strong></Line>
          <Code>npx seo-lint-cli ./dist</Code>
        </DocBlock>

        <DocBlock title="Case 2: Check a single live URL">
          <Line>If your site is already deployed or running on localhost and you want to test a single page:</Line>
          <Code>npx seo-lint-cli --url https://example.com</Code>
          <Code>npx seo-lint-cli --url http://localhost:3000</Code>
        </DocBlock>

        <DocBlock title="Case 3: Check multiple URLs at once (bulk scan)">
          <Line><strong className="text-white">Step 1: Create a file checks.txt</strong> (one URL per line)</Line>
          <Code>
            https://example.com/
            <br/>
            https://example.com/about
            <br/>
            https://example.com/blog
          </Code>
          <Line><strong className="text-white">Step 2: Run the bulk scan command</strong></Line>
          <Code>npx seo-lint-cli --urls checks.txt</Code>
        </DocBlock>
      </div>
    </div>
  );
}
