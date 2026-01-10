import { DocBlock, Code, Line } from "@/components/docs/Blocks";

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-[#D3DAD9]">Commands</h1>

      <p className="mt-4 text-[#D3DAD9]/80">
        Full list of CLI commands and flags.
      </p>

      <div className="mt-8 space-y-6">
        <DocBlock title="Commands">
            <h4 className="font-semibold text-[#D3DAD9] mb-1">Scan a folder</h4>
            <Code>seo-lint-cli ./dist</Code>
            <br/>
            
            <h4 className="font-semibold text-[#D3DAD9] mb-1">Scan a live URL</h4>
            <Code>seo-lint-cli --url https://example.com</Code>
            <br/>
            
            <h4 className="font-semibold text-[#D3DAD9] mb-1">Scan multiple URLs</h4>
            <Code>seo-lint-cli --urls urls.txt</Code>
            <br/>
            
            <h4 className="font-semibold text-[#D3DAD9] mb-1">Show help</h4>
            <Code>seo-lint-cli --help</Code>
            <br/>
            
            <h4 className="font-semibold text-[#D3DAD9] mb-1">Show version</h4>
            <Code>seo-lint-cli --version</Code>
        </DocBlock>

       
      </div>
    </div>
  );
}
