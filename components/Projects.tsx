import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TechList from "@/components/TechList";
import { projectItems } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-space border-t border-divider">
      <div className="shell">
        <SectionHeading
          id="projects-title"
          title="Selected Projects"
          description="What each project set out to solve, what I built, and the result where one was measured."
        />

        <div className="mt-12 space-y-6">
          {projectItems.map((project) => (
            <article
              key={project.id}
              id={project.id}
              aria-labelledby={`${project.id}-title`}
              className="card reveal scroll-mt-20 p-5 transition-colors duration-200 hover:border-divider-strong sm:p-8"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <p className="label text-violet">{project.context}</p>
                <p className="shrink-0 font-mono text-xs text-muted">{project.dates}</p>
              </div>

              <h3 id={`${project.id}-title`} className="mt-3 text-xl font-semibold tracking-tight text-heading sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-secondary">{project.subtitle}</p>

              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
                <div>
                  <h4 className="label">{project.problemLabel ?? "Problem"}</h4>
                  <p className="mt-2 text-sm leading-6 text-body sm:text-[0.95rem] sm:leading-7">{project.problem}</p>

                  {project.outcome ? (
                    <div className="mt-5 rounded-lg border border-cyan/30 bg-cyan/[0.06] px-4 py-3">
                      <h4 className="label text-cyan">Outcome</h4>
                      <p className="mt-1 text-sm font-medium text-heading">{project.outcome}</p>
                    </div>
                  ) : null}
                </div>

                <div>
                  <h4 className="label">What I built</h4>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-secondary sm:text-[0.95rem] sm:leading-7">
                    {project.contributions.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-cyan" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <TechList items={project.tech} className="mt-6" />

              {project.pipeline || project.details || project.note ? (
                <details className="group mt-6 border-t border-divider pt-4">
                  <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded text-sm font-medium text-cyan [&::-webkit-details-marker]:hidden">
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                    />
                    Technical details
                  </summary>

                  <div className="mt-4 space-y-5">
                    {project.pipeline ? (
                      <div>
                        <h4 className="label">Pipeline</h4>
                        <ol className="mt-3 flex flex-wrap items-center gap-2 font-mono text-xs">
                          {project.pipeline.map((step, index) => (
                            <li key={step} className="flex items-center gap-2">
                              <span className="rounded-md border border-divider-strong bg-raised px-2.5 py-1.5 text-body">
                                <span className="text-muted">{index + 1}.</span> {step}
                              </span>
                              {index < project.pipeline!.length - 1 ? (
                                <span aria-hidden="true" className="text-muted">
                                  →
                                </span>
                              ) : null}
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : null}

                    {project.details ? (
                      <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {project.details.map((detail) => (
                          <div key={detail.label}>
                            <dt className="label">{detail.label}</dt>
                            <dd className="mt-1 text-sm leading-6 text-body">{detail.value}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}

                    {project.note ? <p className="text-xs leading-5 text-muted">{project.note}</p> : null}
                  </div>
                </details>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
