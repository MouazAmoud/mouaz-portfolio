"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="glass-card flex items-center justify-between rounded-full border-white/12 px-4 py-3 shadow-glow">
          <Link href="#home" className="text-sm font-semibold tracking-[0.24em] text-heading uppercase">
            Mouaz Amoud
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-[rgba(0,212,255,0.14)] text-cyan"
                      : "text-secondary hover:text-cyan"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/Mouaz-Amoud-CV.pdf" target="_blank" className="secondary-button">
              Download CV
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-white/10 p-2 text-heading transition hover:border-cyan/40 hover:text-cyan lg:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="glass-card mt-3 rounded-3xl border-white/12 p-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm transition ${
                    active === item.href
                      ? "bg-[rgba(0,212,255,0.14)] text-cyan"
                      : "text-secondary hover:text-cyan"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/Mouaz-Amoud-CV.pdf"
                target="_blank"
                className="primary-button mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Download CV
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
