type SectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <div className="mb-4 h-px w-10 bg-cyan" aria-hidden="true" />
      <h2 id={id} className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
        {title}
      </h2>
      {description ? <p className="mt-3 text-base leading-7 text-secondary">{description}</p> : null}
    </div>
  );
}
