import { DocBlock, Code, Line } from "@/components/docs/Blocks";

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-[#D3DAD9]">Rules</h1>

      <p className="mt-4 text-[#D3DAD9]/80">
        Review the SEO rules that seo-lint-cli checks for.
      </p>

      <div className="mt-8 space-y-6">
        <DocBlock title="Critical SEO Warnings">
            <Line>The tool NEVER blocks builds — everything is a warning.</Line>
            <br/>
            
            <h4 className="font-semibold text-[#D3DAD9]">Missing &lt;title&gt;</h4>
            <Line>Page has no title tag</Line>
            <br/>
            
            <h4 className="font-semibold text-[#D3DAD9]">Missing meta description</h4>
            <Line>&lt;meta name="description"&gt; is missing</Line>
            <br/>
            
            <h4 className="font-semibold text-[#D3DAD9]">Missing &lt;h1&gt;</h4>
            <Line>No H1 tag on the page</Line>
            <br/>
            
            <h4 className="font-semibold text-[#D3DAD9]">Multiple &lt;h1&gt;</h4>
            <Line>More than one H1 detected</Line>
            <br/>
            
            <h4 className="font-semibold text-[#D3DAD9]">Missing canonical</h4>
            <Line>&lt;link rel="canonical"&gt; is missing</Line>
            <br/>
            
            <h4 className="font-semibold text-[#D3DAD9]">Missing Open Graph tags</h4>
            <Line>Missing one or more of: og:title, og:description, og:image</Line>
        </DocBlock>

        <DocBlock title="Upcoming Rules">
            <Line>These are planned:</Line>
            <ul className="list-disc list-inside text-[#D3DAD9]/80 text-sm mt-2 space-y-1">
                <li>Title too long or too short</li>
                <li>Description too long or too short</li>
                <li>Missing robots.txt</li>
                <li>Missing sitemap.xml</li>
                <li>Missing alt tags on images</li>
                <li>Broken internal links</li>
            </ul>
        </DocBlock>
      </div>
    </div>
  );
}
