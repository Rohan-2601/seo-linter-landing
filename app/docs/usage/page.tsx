import { DocBlock, Code, Line } from "@/components/docs/Blocks";

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-white tracking-tight mb-6">Usage</h1>

      <p className="text-lg text-white/70 leading-relaxed mb-8">
        You can lint a local build folder, a single live URL, or multiple URLs from a text file.
      </p>

      <div className="space-y-8">
        <DocBlock title="1. Lint a local build folder">
          <Line>Recursively scans all .html files in the folder.</Line>
          <Code>npx seo-lint-cli ./dist</Code>
          <Line>or target a specific build folder:</Line>
          <Code>seo-lint-cli ./build</Code>
        </DocBlock>

        <DocBlock title="2. Lint a single live URL">
          <Line>Scan any public URL for SEO issues:</Line>
          <Code>npx seo-lint-cli --url https://example.com</Code>
        </DocBlock>

        <DocBlock title="3. Lint multiple URLs">
          <Line>Create a file <code>urls.txt</code> with one URL per line:</Line>
          <Code>
            https://example.com/
            <br/>
            https://example.com/about
            <br/>
            https://example.com/blog/post-1
          </Code>
          <Line>Then Run:</Line>
          <Code>npx seo-lint-cli --urls urls.txt</Code>
        </DocBlock>
      </div>
    </div>
  );
}
