"use client";

import { Download, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/data";
import { site } from "@/lib/site";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    setMobileOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const sections = ["#home", ...navItems.map((item) => item.href)]
      .map((href) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === "home" ? null : `#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu(true);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [mobileOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-background/90 backdrop-blur">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <a href="#home" className="font-display text-base font-semibold tracking-tight text-heading">
          Mouaz Amoud
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive ? "text-cyan" : "text-secondary hover:text-heading"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.cvPath}
            download={site.cvFileName}
            className="secondary-button hidden min-h-9 px-4 py-1.5 sm:inline-flex"
          >
            <Download size={16} aria-hidden="true" />
            CV
          </a>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="icon-button h-10 w-10 lg:hidden"
          >
            {mobileOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!mobileOpen}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-divider bg-background lg:hidden"
      >
        <nav aria-label="Mobile" className="shell py-4">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  onClick={() => closeMenu()}
                  className={`flex min-h-12 items-center border-b border-divider text-base ${
                    active === item.href ? "text-cyan" : "text-body"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.cvPath}
            download={site.cvFileName}
            onClick={() => closeMenu()}
            className="primary-button mt-6 w-full"
          >
            <Download size={16} aria-hidden="true" />
            Download CV (PDF)
          </a>
        </nav>
      </div>
    </header>
  );
}
