import MotionSection from "@/components/MotionSection";
import SectionHeading from "@/components/SectionHeading";
import { projectItems } from "@/lib/data";

export default function Projects() {
  return (
    <MotionSection id="projects" className="section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="Projects & Research"
          title="AI systems work spanning agents, retrieval, multimodal pipelines, and ML research."
          description="Selected work across academic projects, research initiatives, and technical focus areas. Public links are intentionally omitted where work is private or still in progress."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {projectItems.map((project) => (
            <article
              key={project.title}
              className="group glass-card flex h-full flex-col rounded-[2rem] border-white/8 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-glow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-purple">{project.type}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-heading">{project.title}</h3>
                </div>
                {project.dates ? (
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                    {project.dates}
                  </span>
                ) : null}
              </div>

              <div className="mt-6 space-y-4 text-sm leading-7 text-secondary">
                {project.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-purple/35 bg-[rgba(124,58,237,0.10)] px-3 py-1 text-xs font-medium text-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
