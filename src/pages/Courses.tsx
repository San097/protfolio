import { motion } from "motion/react";
import { Reveal, RevealGroup, revealItem } from "../components/Reveal";
import { skills, experience } from "../data/site";

export default function Skills() {
  return (
    <>
      <section className="px-6 pt-36 pb-12 lg:px-10 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">SKILLS</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              The toolkit behind the work.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-(--color-canvas-alt) px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {skills.map((g) => (
              <motion.div
                variants={revealItem}
                key={g.group}
                className="rounded-3xl border border-(--color-line) bg-(--color-canvas) p-8"
              >
                <p className="text-xs tracking-[0.2em] text-(--color-accent)">{g.group.toUpperCase()}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span key={t} className="rounded-full border border-(--color-line) px-3 py-1.5 text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">INTERNSHIP &amp; WORK</p>
          </Reveal>
          <RevealGroup className="mt-10 space-y-10" stagger={0.08}>
            {experience.map((e) => (
              <motion.div variants={revealItem} key={e.role} className="border-t border-(--color-line) pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-medium">{e.role}</h3>
                  <span className="text-sm text-(--color-accent)">{e.date}</span>
                </div>
                <p className="mt-1 text-sm text-(--color-ink-soft)">{e.org}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-(--color-ink-soft)">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
