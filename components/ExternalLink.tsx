import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
};

export default function ExternalLink({ href, children, className, "aria-label": ariaLabel }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel ? `${ariaLabel} (opens in a new tab)` : undefined}
    >
      {children}
      {ariaLabel ? null : <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
