import { DocBlock, Code, Line } from "@/components/docs/Blocks";

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-white tracking-tight mb-6">Commands</h1>

      <p className="text-lg text-white/70 leading-relaxed mb-8">
        Full list of CLI commands and flags.
      </p>

      <div className="space-y-8">
        <DocBlock title="CLI Reference">
            <h4 className="font-semibold text-white mb-2">Scan a folder</h4>
            <Code>seo-lint-cli ./dist</Code>
            <br/>
            
            <h4 className="font-semibold text-white mb-2">Scan a live URL</h4>
            <Code>seo-lint-cli --url https://example.com</Code>
            <br/>
            
            <h4 className="font-semibold text-white mb-2">Scan multiple URLs</h4>
            <Code>seo-lint-cli --urls urls.txt</Code>
            <br/>
            
            <h4 className="font-semibold text-white mb-2">Show help</h4>
            <Code>seo-lint-cli --help</Code>
            <br/>
            
            <h4 className="font-semibold text-white mb-2">Show version</h4>
            <Code>seo-lint-cli --version</Code>
        </DocBlock>
      </div>
    </div>
  );
}
