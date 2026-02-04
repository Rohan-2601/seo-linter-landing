import { DocBlock, Code, Line } from "@/components/docs/Blocks";

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-white tracking-tight mb-6">Installation</h1>

      <p className="text-lg text-white/70 leading-relaxed mb-8">
        You can use seo-lint-cli directly via npx or install it locally/globally.
      </p>

      <div className="space-y-8">
        <DocBlock title="Run directly using npx (recommended)">
          <Line>No installation needed. Just run:</Line>
          <Code>npx seo-lint-cli --help</Code>
        </DocBlock>

        <DocBlock title="Install locally in a project">
          <Line>Add it as a dev dependency:</Line>
          <Code>npm install -D seo-lint-cli</Code>
          <Line>Then run:</Line>
          <Code>npx seo-lint-cli ./dist</Code>
        </DocBlock>

        <DocBlock title="Install globally (optional)">
          <Line>Install it on your system:</Line>
          <Code>npm install -g seo-lint-cli</Code>
          <Line>Then run:</Line>
          <Code>seo-lint-cli --help</Code>
        </DocBlock>
      </div>
    </div>
  );
}
