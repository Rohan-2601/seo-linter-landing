import { DocBlock, Code, Line } from "@/components/docs/Blocks";

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-[#D3DAD9]">Installation</h1>

      <p className="mt-4 text-[#D3DAD9]/80">
        You can use seo-lint-cli directly via npx or install it locally/globally.
      </p>

      <div className="mt-8 space-y-6">
        <DocBlock title="Run directly using npx (recommended)">
          <Line>No installation needed:</Line>
          <Code>npx seo-lint-cli --help</Code>
        </DocBlock>

        <DocBlock title="Install locally in a project">
          <Code>npm install -D seo-lint-cli</Code>
          <Line>Then run:</Line>
          <Code>npx seo-lint-cli ./dist</Code>
        </DocBlock>

        <DocBlock title="Install globally (optional)">
          <Code>npm install -g seo-lint-cli</Code>
          <Line>Then run:</Line>
          <Code>seo-lint-cli --help</Code>
        </DocBlock>
      </div>
    </div>
  );
}
