import SectionHeading from "@/components/SectionHeading";
import { aboutParagraphs, educationItems, focusAreas } from "@/lib/data";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-space border-t border-divider">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div>
          <SectionHeading id="about-title" title="About" />
          <div className="mt-6 max-w-[65ch] space-y-4 text-base leading-7 text-secondary">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="label mt-10">Focus areas</h3>
          <ul className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <li key={area.title} className="reveal border-l border-divider-strong pl-4">
                <p className="text-sm font-semibold text-heading">{area.title}</p>
                <p className="mt-1 text-sm leading-6 text-secondary">{area.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div id="education" className="scroll-mt-20">
          <h3 className="label">Education</h3>
          <ol className="mt-4 space-y-4">
            {educationItems.map((item) => (
              <li key={item.degree} className="card reveal p-5 sm:p-6">
                <p className="font-mono text-xs text-muted">{item.dates}</p>
                <p className="mt-2 font-display text-lg font-semibold text-heading">{item.degree}</p>
                <p className="text-sm text-body">{item.institution}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-secondary">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                      {detail}
                    </li>
                  ))}
                </ul>
                {item.note ? <p className="mt-4 border-t border-divider pt-3 text-xs text-muted">{item.note}</p> : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
