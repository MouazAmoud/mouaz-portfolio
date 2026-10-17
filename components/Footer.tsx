import { ArrowUp } from "lucide-react";
import ExternalLink from "@/components/ExternalLink";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-divider py-8">
      <div className="shell flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cyan">
                Email
              </a>
            </li>
            <li>
              <ExternalLink href={site.linkedin} className="hover:text-cyan">
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={site.github} className="hover:text-cyan">
                GitHub
              </ExternalLink>
            </li>
            <li>
              <a href="#home" className="inline-flex items-center gap-1 hover:text-cyan">
                Back to top
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
