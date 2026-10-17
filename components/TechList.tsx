type TechListProps = {
  items: string[];
  className?: string;
};

export default function TechList({ items, className = "" }: TechListProps) {
  return (
    <ul aria-label="Technologies" className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-divider bg-background/60 px-2 py-1 font-mono text-xs text-secondary"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
