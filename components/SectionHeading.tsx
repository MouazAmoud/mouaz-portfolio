type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-[rgba(124,58,237,0.10)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-purple">
        <span className="h-1.5 w-1.5 rounded-full bg-purple" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-secondary sm:text-lg">{description}</p>
    </div>
  );
}
