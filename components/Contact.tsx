import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import ExternalLink from "@/components/ExternalLink";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-space border-t border-divider">
      <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
        <div>
          <SectionHeading
            id="contact-title"
            title="Contact"
            description="I'm open to internships and research opportunities in software engineering, computer engineering, and AI systems. Email is the best way to reach me."
          />
          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <MapPin size={15} aria-hidden="true" />
            {site.location}
          </p>
        </div>

        <div className="card p-5 sm:p-6">
          <a
            href={`mailto:${site.email}`}
            className="group flex items-center gap-3 break-all font-display text-lg font-semibold text-heading transition-colors hover:text-cyan sm:text-xl"
          >
            <Mail size={20} aria-hidden="true" className="shrink-0 text-cyan" />
            {site.email}
          </a>
          <div className="mt-6 flex flex-wrap gap-3">
            <ExternalLink href={site.linkedin} className="secondary-button">
              <Linkedin size={17} aria-hidden="true" />
              LinkedIn
            </ExternalLink>
            <ExternalLink href={site.github} className="secondary-button">
              <Github size={17} aria-hidden="true" />
              GitHub
            </ExternalLink>
            <a href={site.cvPath} download={site.cvFileName} className="secondary-button">
              <Download size={17} aria-hidden="true" />
              Download CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
