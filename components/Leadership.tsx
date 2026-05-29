import { Crown } from "lucide-react";
import MotionSection from "@/components/MotionSection";
import SectionHeading from "@/components/SectionHeading";
import { leadershipItems } from "@/lib/data";

export default function Leadership() {
  return (
    <MotionSection id="leadership" className="section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="Leadership & Awards"
          title="Leadership built alongside execution, teaching, and competitive performance."
          description="A track record of leading communities, managing teams, and contributing to technical culture while maintaining strong academic and project output."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-5">
            {leadershipItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="glass-card rounded-[2rem] border-white/8 p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan/30 bg-[rgba(0,212,255,0.08)] text-cyan">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-heading">{item.title}</h3>
                        <p className="mt-1 text-sm text-body">{item.organization}</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                      {item.dates}
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-secondary">{item.description}</p>
                </article>
              );
            })}
          </div>

          <aside className="glass-card rounded-[2rem] border-white/8 p-7 shadow-violet">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple/35 bg-[rgba(124,58,237,0.12)] text-purple">
              <Crown size={24} />
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-purple">Highlighted Achievement</p>
            <h3 className="mt-3 text-3xl font-semibold text-heading">Leader of the Year</h3>
            <p className="mt-4 text-sm leading-7 text-secondary">
              Recognition earned through sustained leadership, operational discipline, and consistent contribution to team outcomes.
            </p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-body">Leadership profile</p>
              <p className="mt-2 text-sm leading-7 text-secondary">
                Built around mentoring, organizing, and delivering results across technical and community settings.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </MotionSection>
  );
}
