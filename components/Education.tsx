import MotionSection from "@/components/MotionSection";
import SectionHeading from "@/components/SectionHeading";
import { educationItems } from "@/lib/data";

export default function Education() {
  return (
    <MotionSection id="education" className="section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="Education"
          title="Two parallel majors, one rigorous technical trajectory."
          description="A dual-track academic path across computer engineering and electronics, pursued in parallel with top academic standing and scholarship-backed performance."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {educationItems.map((item, index) => (
            <article key={item.degree} className="glass-card relative rounded-[2rem] border-white/8 p-7">
              {index === 0 ? (
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-[rgba(0,212,255,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                  Primary Track
                </div>
              ) : (
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-[rgba(124,58,237,0.10)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple">
                  Parallel Major
                </div>
              )}
              <p className="text-sm uppercase tracking-[0.2em] text-muted">{item.dates}</p>
              <h3 className="mt-3 text-2xl font-semibold text-heading">{item.degree}</h3>
              <p className="mt-2 text-base text-body">{item.institution}</p>
              <ul className="mt-6 space-y-3">
                {item.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-sm leading-7 text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
