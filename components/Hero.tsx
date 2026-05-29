"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { heroHighlights } from "@/lib/data";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative min-h-screen pt-20">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute inset-0 bg-grid bg-[size:42px_42px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
        <motion.div
          className="absolute left-[12%] top-32 h-40 w-40 rounded-full bg-cyan/20 blur-3xl"
          animate={{ opacity: [0.4, 0.7, 0.45], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[10%] top-52 h-48 w-48 rounded-full bg-purple/20 blur-3xl"
          animate={{ opacity: [0.35, 0.55, 0.3], scale: [1.05, 1, 1.06] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="shell flex min-h-[calc(100vh-5rem)] items-center">
        <div className="grid w-full gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-[rgba(0,212,255,0.07)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan"
            >
              <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_rgba(0,212,255,0.8)]" />
              AI Systems • Research • Automation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6 }}
              className="mt-8 text-5xl font-semibold tracking-tight text-heading sm:text-6xl xl:text-7xl"
            >
              Mouaz Amoud
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.6 }}
              className="mt-5 max-w-2xl text-xl font-medium leading-8 text-body sm:text-2xl"
            >
              AI Engineer | Computer Engineering & Electronics Double Major
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.6 }}
              className="mt-6 max-w-2xl text-base leading-8 text-secondary sm:text-lg"
            >
              High-achieving computer engineering student building AI systems, automation workflows, RAG
              pipelines, and research-driven machine learning solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.6 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link href="#projects" className="primary-button">
                View Projects
                <ArrowRight size={18} />
              </Link>
              <Link href="/Mouaz-Amoud-CV.pdf" target="_blank" className="secondary-button">
                <Download size={18} />
                Download CV
              </Link>
              <Link
                href="https://www.linkedin.com/in/mouaz-amoud-0b9aa62b1"
                target="_blank"
                className="secondary-button"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
            >
              {heroHighlights.map((item) => (
                <div key={item.label} className="glass-card rounded-2xl border-white/8 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">{item.label}</p>
                  <p className="mt-2 text-base font-semibold text-heading">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
            className="relative mx-auto flex w-full max-w-md items-center justify-center"
          >
            <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-cyan/25 via-transparent to-purple/20 blur-3xl" />
            <div className="relative w-full rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_0_0_1px_rgba(0,212,255,0.12),0_20px_80px_rgba(10,14,26,0.7)] backdrop-blur-2xl">
              <div className="rounded-[1.6rem] border border-cyan/20 bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.14),transparent_32%),radial-gradient(circle_at_90%_10%,rgba(124,58,237,0.18),transparent_30%),rgba(17,24,39,0.82)] p-3">
                <div className="relative overflow-hidden rounded-[1.3rem] border border-white/10 bg-slate-950/80 aspect-[4/5]">
                  {!imageError ? (
                    <Image
                      src="/profile.jpg"
                      alt="Portrait of Mouaz Amoud"
                      fill
                      priority
                      sizes="(max-width: 768px) 80vw, 32rem"
                      className="object-cover object-center"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.12),transparent_35%),radial-gradient(circle_at_bottom,rgba(124,58,237,0.18),transparent_35%),rgba(15,23,42,0.95)]">
                      <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-cyan/30 bg-[rgba(0,212,255,0.10)] text-4xl font-semibold tracking-[0.18em] text-heading shadow-glow">
                        MA
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
