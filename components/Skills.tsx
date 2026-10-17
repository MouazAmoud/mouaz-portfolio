import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-space border-t border-divider">
      <div className="shell">
        <SectionHeading id="skills-title" title="Technical Skills" />

        <dl className="card mt-10 divide-y divide-divider">
          {skillGroups.map((group) => (
            <div key={group.category} className="grid gap-2 px-5 py-4 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-6 sm:px-6">
              <dt className="label pt-0.5">{group.category}</dt>
              <dd className="text-sm leading-6 text-body sm:text-[0.95rem]">
                <ul className="flex flex-wrap gap-x-1 gap-y-1">
                  {group.items.map((item, index) => (
                    <li key={item}>
                      {item}
                      {index < group.items.length - 1 ? (
                        <span aria-hidden="true" className="text-muted">
                          ,
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
