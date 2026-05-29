import MotionSection from "@/components/MotionSection";
import SectionHeading from "@/components/SectionHeading";
import { experienceItems } from "@/lib/data";

export default function Experience() {
  return (
    <MotionSection id="experience" className="section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="Experience"
          title="Applied AI automation work in production-oriented environments."
          description="Experience centered on building private, workflow-driven AI systems for document processing, retrieval, and operational automation."
        />

        <div className="mt-10">
          {experienceItems.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className="glass-card relative overflow-hidden rounded-[2rem] border-white/8 p-8"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyan via-purple to-transparent" />
              <div className="pl-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-cyan">{item.dates}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-heading">{item.role}</h3>
                    <p className="mt-2 text-base text-body">{item.company}</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-secondary">
                    Private company work
                  </div>
                </div>

                <ul className="mt-8 space-y-4">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-4 text-sm leading-7 text-secondary sm:text-base">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-purple" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
