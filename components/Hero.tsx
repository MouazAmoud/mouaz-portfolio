import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import ExternalLink from "@/components/ExternalLink";
import { currentActivities, heroHighlights } from "@/lib/data";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_30%,black,transparent_75%)]"
      />

      <div className="shell grid gap-12 pb-16 pt-12 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center lg:gap-16 lg:pb-24 lg:pt-24">
        <div className="max-w-2xl">
          <p className="label text-cyan">B.E. Computer Engineering · LAU</p>

          <h1 id="hero-title" className="mt-4 text-4xl font-semibold tracking-tight text-heading sm:text-5xl lg:text-6xl">
            Mouaz Amoud
          </h1>

          <p className="mt-4 text-lg font-medium text-body sm:text-xl">
            Computer Engineering Student
            <span className="hidden text-muted sm:inline" aria-hidden="true">
              {" "}
              ·{" "}
            </span>
            <span className="block text-secondary sm:inline">AI Systems, Software &amp; Research</span>
          </p>

          <p className="mt-6 max-w-[62ch] text-base leading-7 text-secondary">
            I study Computer Engineering at the Lebanese American University alongside a second degree in
            Electronics at the Lebanese University. I build software that connects to real systems: IoT camera pipelines,
            document-automation services, and multi-agent applications. I&apos;m currently researching the outage
            performance of energy-harvesting and hybrid-powered wireless relays.
          </p>

          <div className="mt-6 border-l-2 border-purple/70 pl-4">
            <p className="label">Currently</p>
            <ul className="mt-2 space-y-1 text-sm text-body">
              {currentActivities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={site.cvPath} download={site.cvFileName} className="primary-button">
              <Download size={17} aria-hidden="true" />
              Download CV
            </a>
            <a href="#contact" className="secondary-button">
              Get in touch
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <div className="flex items-center gap-2 sm:ml-1">
              <ExternalLink href={site.linkedin} aria-label="LinkedIn profile" className="icon-button">
                <Linkedin size={18} aria-hidden="true" />
              </ExternalLink>
              <ExternalLink href={site.github} aria-label="GitHub profile" className="icon-button">
                <Github size={18} aria-hidden="true" />
              </ExternalLink>
              <a href={`mailto:${site.email}`} aria-label={`Email ${site.email}`} className="icon-button">
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-[200px] sm:max-w-[260px] lg:max-w-none">
          <div className="relative">
            <div aria-hidden="true" className="absolute -right-3 -top-3 h-full w-full rounded-xl border border-purple/40" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-divider-strong bg-surface">
              <Image
                src="/profile.jpg"
                alt="Portrait of Mouaz Amoud"
                fill
                priority
                sizes="(min-width: 1024px) 300px, 280px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </figure>
      </div>

      <div className="shell pb-16 lg:pb-20">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-divider bg-divider lg:grid-cols-4">
          {heroHighlights.map((item) => (
            <div key={item.label} className="flex flex-col gap-1 bg-background px-4 py-4 sm:px-5">
              <dt className="order-2 text-xs leading-5 text-muted sm:text-sm">{item.label}</dt>
              <dd className="order-1 font-display text-lg font-semibold text-heading sm:text-xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
