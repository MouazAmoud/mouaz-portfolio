import MotionSection from "@/components/MotionSection";
import SectionHeading from "@/components/SectionHeading";
import { aboutPillars } from "@/lib/data";

export default function About() {
  return (
    <MotionSection id="about" className="section-space">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="About"
            title="Engineering AI systems with research discipline and execution depth."
            description="Mouaz Amoud is a Computer Engineering student at Lebanese American University and an Electronics double major at Lebanese University. He focuses on AI systems, automation, RAG pipelines, machine learning, and system integration, combining strong academic performance with leadership, research, and hands-on technical work."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="glass-card rounded-3xl border-white/8 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple/35 bg-[rgba(124,58,237,0.10)] text-purple">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-heading">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-secondary">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
