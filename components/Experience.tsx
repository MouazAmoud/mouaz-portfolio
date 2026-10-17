import { ArrowDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TechList from "@/components/TechList";
import { experienceGroups } from "@/lib/data";

const accentStyles = {
  cyan: { dot: "bg-cyan", label: "text-cyan" },
  violet: { dot: "bg-purple", label: "text-violet" }
} as const;

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-space border-t border-divider">
      <div className="shell">
        <SectionHeading
          id="experience-title"
          title="Experience"
          description="Industry internships, ongoing research, and academic appointments."
        />

        <div className="mt-12 space-y-14">
          {experienceGroups.map((group) => {
            const accent = accentStyles[group.accent];
            return (
              <div key={group.label}>
                <h3 className={`label ${accent.label}`}>{group.label}</h3>
                <ol className="mt-6 space-y-10 border-l border-divider-strong">
                  {group.items.map((item) => (
                    <li key={`${item.organization}-${item.roles[0].title}`} className="reveal relative max-w-4xl pl-6 sm:pl-8">
                      <span
                        aria-hidden="true"
                        className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-background ${accent.dot}`}
                      />
                      <p className="font-display text-lg font-semibold text-heading sm:text-xl">{item.organization}</p>
                      {item.context ? <p className="mt-0.5 text-sm text-secondary">{item.context}</p> : null}

                      <div className="mt-4 space-y-5">
                        {item.roles.map((role) => (
                          <div key={role.title}>
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                              <h4 className="font-sans text-base font-semibold text-body">{role.title}</h4>
                              <p className="shrink-0 font-mono text-xs text-muted">{role.dates}</p>
                            </div>
                            <ul className="mt-2 max-w-[75ch] space-y-1.5 text-sm leading-6 text-secondary sm:text-[0.95rem] sm:leading-7">
                              {role.bullets.map((bullet) => (
                                <li key={bullet} className="flex gap-3">
                                  <span aria-hidden="true" className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-muted" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {item.tech || item.caseStudy ? (
                        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                          {item.tech ? <TechList items={item.tech} /> : null}
                          {item.caseStudy ? (
                            <a href={item.caseStudy.href} className="text-link inline-flex items-center gap-1.5 text-sm">
                              {item.caseStudy.label}
                              <ArrowDown size={14} aria-hidden="true" />
                            </a>
                          ) : null}
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
