import { DocBlock, Code, Line } from "@/components/docs/Blocks";

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-[#D3DAD9]">Usage</h1>

      <p className="mt-4 text-[#D3DAD9]/80">
        You can lint a local build folder, a single live URL, or multiple URLs from a text file.
      </p>

      <div className="mt-8 space-y-6">
        <DocBlock title="1. Lint a local build folder">
          <Line>Recursively scans all .html files in the folder.</Line>
          <Code>npx seo-lint-cli ./dist</Code>
          <Line>or</Line>
          <Code>seo-lint-cli ./build</Code>
        </DocBlock>

        <DocBlock title="2. Lint a single live URL">
          <Code>npx seo-lint-cli --url https://example.com</Code>
        </DocBlock>

        <DocBlock title="3. Lint multiple URLs">
          <Line>Create a file <code>urls.txt</code> with:</Line>
          <Code>
            https://example.com/
            <br/>
            https://example.com/about
            <br/>
            https://example.com/blog/post-1
          </Code>
          <Line>Run:</Line>
          <Code>npx seo-lint-cli --urls urls.txt</Code>
        </DocBlock>
      </div>
    </div>
  );
}
