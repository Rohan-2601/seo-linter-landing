export function LandingFooter() {
  return (
    <footer className="bg-[#222831] text-[#DFD0B8] border-t border-[#393E46]">
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* TOP CONTENT */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Branding */}
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold tracking-tight text-[#DFD0B8]">
              seo-lint-cli
            </h2>
            <p className="mt-3 text-sm text-[#948979] leading-relaxed">
              A lightweight SEO linter that helps developers catch missing title tags,
              meta descriptions, canonical URLs, and OG issues — before deploy.
            </p>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#DFD0B8]/80 mb-4">
              Connect
            </h4>

            <div className="flex items-center gap-5">

              {/* GitHub */}
              <a
                href="https://github.com/Rohan-2601/SEO-LINTER"
                target="_blank"
                className="hover:opacity-80 transition"
              >
                <svg
                  className="w-6 h-6 text-[#DFD0B8]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.67.5.1.68-.22.68-.5v-1.78c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.12-1.5-1.12-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.11 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05A9.24 9.24 0 0 1 12 6.8c.85 0 1.72.12 2.53.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.43.22 2.49.11 2.75.64.72 1.02 1.64 1.02 2.77 0 3.98-2.34 4.84-4.57 5.1.36.32.68.96.68 1.94v2.87c0 .28.18.6.69.5A10.29 10.29 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rohan-raj-5b5198294/"
                target="_blank"
                className="hover:opacity-80 transition"
              >
                <svg
                  className="w-6 h-6 text-[#DFD0B8]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5 1.9 5.5 1 4.6 1 3.5 1 2.4 1.9 1.5 3 1.5c1.1 0 1.98.9 1.98 2zm.02 4H1V23h4V7.5zm7.5 0h-3.99V23H12.5v-7.6c0-2 1.4-2.6 2.16-2.6.76 0 2.34.2 2.34 2.6V23H21v-8.4c0-4.5-2.4-6.6-5.6-6.6-2.3 0-3.38 1.3-3.9 2.2h-.06V7.5z"
                  />
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-[#393E46]"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-[#948979]">
          <p>© {new Date().getFullYear()} Rohan — All rights reserved.</p>

          <p className="mt-4 md:mt-0">
            Built with <span className="text-[#8BAE66]">●</span> for developers
          </p>
        </div>

      </div>
    </footer>
  );
}
