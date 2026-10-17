import SectionHeading from "@/components/SectionHeading";
import { awardGroups, leadershipItems } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="leadership" aria-labelledby="leadership-title" className="section-space border-t border-divider">
      <div className="shell">
        <SectionHeading
          id="leadership-title"
          title="Leadership & Recognition"
          description="Elected representation, student-branch leadership, and long-term service in Scouting."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-12">
          <div className="space-y-4">
            <h3 className="label">Leadership</h3>
            {leadershipItems.map((item) => (
              <article
                key={item.organization}
                className={`card reveal p-5 sm:p-6 ${item.featured ? "border-l-2 border-l-purple" : ""}`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h4 className="text-lg font-semibold text-heading">{item.organization}</h4>
                  <p className="shrink-0 font-mono text-xs text-muted">{item.dates}</p>
                </div>

                <ul className="mt-2 space-y-3">
                  {item.roles.map((role) => (
                    <li key={role.title}>
                      <p className="flex flex-wrap items-center gap-2 text-sm font-medium text-body">
                        {role.title}
                        {role.status ? (
                          <span
                            className={`rounded px-1.5 py-0.5 font-mono text-[0.7rem] uppercase tracking-wider ${
                              role.status === "Current" ? "bg-cyan/10 text-cyan" : "bg-raised text-muted"
                            }`}
                          >
                            {role.status}
                          </span>
                        ) : null}
                      </p>
                      {role.bullets ? (
                        <ul className="mt-1.5 space-y-1 text-sm leading-6 text-secondary">
                          {role.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>

                {item.stat || item.bullets ? (
                  <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                    {item.stat ? (
                      <p className="shrink-0">
                        <span className="block font-display text-3xl font-semibold text-heading">{item.stat.value}</span>
                        <span className="block max-w-[9rem] text-xs leading-5 text-muted">{item.stat.label}</span>
                      </p>
                    ) : null}
                    {item.bullets ? (
                      <ul className="space-y-1.5 text-sm leading-6 text-secondary">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span aria-hidden="true" className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-muted" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          <div>
            <h3 className="label">Awards & Recognition</h3>
            <div className="mt-4 space-y-6">
              {awardGroups.map((group) => (
                <div key={group.label}>
                  <h4 className="font-mono text-xs text-violet">{group.label}</h4>
                  <ul className="mt-2 divide-y divide-divider border-y border-divider">
                    {group.items.map((award) => (
                      <li key={award.title} className="reveal flex gap-4 py-4">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-heading">{award.title}</p>
                          <p className="mt-0.5 text-sm text-cyan">{award.result}</p>
                          {award.note ? <p className="mt-1 text-xs leading-5 text-muted">{award.note}</p> : null}
                        </div>
                        {award.year ? <p className="shrink-0 font-mono text-xs text-muted">{award.year}</p> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
