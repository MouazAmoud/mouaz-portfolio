import Link from "next/link";
import MotionSection from "@/components/MotionSection";
import { contactLinks } from "@/lib/data";

export default function Contact() {
  return (
    <MotionSection id="contact" className="section-space">
      <div className="shell">
        <div className="glass-card rounded-[2.25rem] border-white/8 p-8 shadow-glow sm:p-10 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-[rgba(0,212,255,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
              Let&apos;s connect
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
              Open to AI, automation, research, and software engineering opportunities.
            </h2>
            <p className="mt-5 text-base leading-8 text-secondary sm:text-lg">
              Mouaz is open to AI, automation, research, and software engineering opportunities.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    className={index === 0 ? "primary-button" : "secondary-button"}
                  >
                    <Icon size={18} />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
