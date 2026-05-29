import MotionSection from "@/components/MotionSection";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <MotionSection id="skills" className="section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="Skills"
          title="A practical stack for AI engineering, backend systems, and automation."
          description="Grouped to stay scannable and focused on capability rather than keyword density."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.category} className="glass-card rounded-[2rem] border-white/8 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan/25 bg-[rgba(0,212,255,0.07)] text-cyan">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-heading">{group.category}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
