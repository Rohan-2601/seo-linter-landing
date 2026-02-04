import { DocBlock, Code, Line } from "@/components/docs/Blocks";

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-white tracking-tight mb-6">Rules</h1>

      <p className="text-lg text-white/70 leading-relaxed mb-8">
        Review the SEO rules that seo-lint-cli checks for.
      </p>

      <div className="space-y-8">
        <DocBlock title="Critical SEO Warnings">
            <Line>The tool NEVER blocks builds — everything is a warning.</Line>
            <br/>
            
            <h4 className="font-semibold text-white mt-4 mb-2">Missing &lt;title&gt;</h4>
            <Line>Page has no title tag</Line>
            
            <h4 className="font-semibold text-white mt-4 mb-2">Missing meta description</h4>
            <Line>&lt;meta name="description"&gt; is missing</Line>
            
            <h4 className="font-semibold text-white mt-4 mb-2">Missing &lt;h1&gt;</h4>
            <Line>No H1 tag on the page</Line>
            
            <h4 className="font-semibold text-white mt-4 mb-2">Multiple &lt;h1&gt;</h4>
            <Line>More than one H1 detected</Line>
            
            <h4 className="font-semibold text-white mt-4 mb-2">Missing canonical</h4>
            <Line>&lt;link rel="canonical"&gt; is missing</Line>
            
            <h4 className="font-semibold text-white mt-4 mb-2">Missing Open Graph tags</h4>
            <Line>Missing one or more of: og:title, og:description, og:image</Line>
        </DocBlock>

        <DocBlock title="Upcoming Rules">
            <Line>These are planned for future versions:</Line>
            <ul className="list-disc list-inside text-white/60 text-sm mt-3 space-y-2 ml-2">
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
