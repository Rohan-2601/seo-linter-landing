import { DocBlock, Code, Line } from "@/components/docs/Blocks";

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-[#D3DAD9]">Examples</h1>

      <p className="mt-4 text-[#D3DAD9]/80">
        See what the output looks like when running seo-lint-cli.
      </p>

      <div className="mt-8 space-y-6">
        <DocBlock title="Example Output">
            <Code>
                Checking: https://example.com
                <br/><br/>
                Page: https://example.com
                <br/>
                Warning: Missing &lt;h1&gt; tag
                <br/>
                Warning: Missing canonical link
                <br/>
                Warning: Missing Open Graph tags: og:title, og:description, og:image
                <br/><br/>
                3 SEO warnings found
            </Code>
        </DocBlock>
      </div>
    </div>
  );
}
