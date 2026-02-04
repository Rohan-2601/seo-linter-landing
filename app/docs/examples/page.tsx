import { DocBlock, Code, Line } from "@/components/docs/Blocks";

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-white tracking-tight mb-6">Examples</h1>

      <p className="text-lg text-white/70 leading-relaxed mb-8">
        See what the output looks like when running seo-lint-cli.
      </p>

      <div className="space-y-8">
        <DocBlock title="Example Output">
            <Code>
                Checking: https://example.com
                <br/><br/>
                <span className="text-white font-bold">Page: https://example.com</span>
                <br/>
                <span className="text-rose-400">✖ Warning:</span> Missing &lt;h1&gt; tag
                <br/>
                <span className="text-rose-400">✖ Warning:</span> Missing canonical link
                <br/>
                <span className="text-rose-400">✖ Warning:</span> Missing Open Graph tags: og:title, og:description
                <br/><br/>
                <span className="text-rose-400 font-bold">3 SEO warnings found</span>
            </Code>
        </DocBlock>
      </div>
    </div>
  );
}
