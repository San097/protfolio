import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger } from "../lib/lenis";
import { Link } from "../lib/router";
import { MagneticButton } from "../components/MagneticButton";
import { FloatingShapes } from "../components/FloatingShapes";
import { Reveal, RevealGroup, revealItem } from "../components/Reveal";
import { achievements, projects, experience, education, tools, person } from "../data/site";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const heroImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = heroImgRef.current;
    if (!img) return;
    const tween = gsap.to(img, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: { trigger: img, start: "top top", end: "bottom top", scrub: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  useEffect(() => {
    const triggers = gsap.utils.toArray<HTMLElement>(".reveal-gsap").map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }),
      }),
    );
    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-36 pb-24 lg:px-10 lg:pt-44">
        <FloatingShapes />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          >
            <motion.p
              variants={revealItem}
              className="text-xs font-medium tracking-[0.25em] text-(--color-accent)"
            >
              DATA ANALYST · ML ENGINEER
            </motion.p>
            <motion.h1
              variants={revealItem}
              className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Turning raw data
              <br />
              into <span className="italic text-(--color-accent)">decisions</span>
              <br />
              that matter.
            </motion.h1>
            <motion.p variants={revealItem} className="mt-6 max-w-md text-lg leading-relaxed text-(--color-ink-soft)">
              Santosh Kumar G is a Data Science graduate who builds machine learning models, data pipelines and dashboards — and ships them as full-stack applications.
            </motion.p>
            <motion.div variants={revealItem} className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/projects">
                <MagneticButton className="inline-flex items-center gap-2 rounded-full bg-(--color-ink) px-7 py-3.5 text-sm font-medium text-(--color-canvas) transition-colors hover:bg-(--color-accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2">
                  View my projects <ArrowRight size={16} />
                </MagneticButton>
              </Link>
              <Link
                to="/about"
                data-cursor="grow"
                className="inline-flex items-center gap-2 rounded-full border border-(--color-line) px-7 py-3.5 text-sm font-medium transition-colors hover:border-(--color-accent) hover:text-(--color-accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
              >
                About me
              </Link>
            </motion.div>

            <motion.div variants={revealItem} className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4">
              <div>
                <p className="font-display text-2xl font-medium">92%</p>
                <p className="text-xs text-(--color-ink-soft)">Accuracy on road-surface CNN</p>
              </div>
              <div>
                <p className="font-display text-2xl font-medium">30K</p>
                <p className="text-xs text-(--color-ink-soft)">Orders analysed in Power BI</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-sm">
            <div ref={heroImgRef} className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/img/santosh.jpg"
                alt="Portrait of Santosh Kumar G"
                className="aspect-[2/3] w-full object-cover object-[50%_25%]"
                loading="eager"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: easeOutExpo }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-(--color-canvas) p-5 shadow-xl ring-1 ring-(--color-line) sm:-left-10"
            >
              <p className="font-display text-xl font-medium">Python · SQL · Power BI</p>
              <p className="text-xs text-(--color-ink-soft)">Core toolkit</p>
            </motion.div>
          </div>
        </div>

        <Reveal delay={0.3} className="relative mt-24">
          <p className="text-center text-xs tracking-[0.2em] text-(--color-ink-soft)/70">TOOLS I WORK WITH</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {tools.map((p) => (
              <span key={p} className="font-display text-lg text-(--color-ink-soft)/50">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Summary */}
      <section className="relative bg-(--color-canvas-alt) px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">SUMMARY</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Data, models and the apps that carry them.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-(--color-ink-soft)">
              <p>
                Aspiring Data Analyst and Data Science graduate with hands-on experience engineering machine
                learning models, building data pipelines and deploying full-stack AI applications.
              </p>
              <p>
                Proficient in Python, SQL and Power BI, with a track record of translating complex datasets into
                actionable insight — including a road-surface model that reaches 92% accuracy.
              </p>
              <p>
                Passionate about data visualization and predictive modeling that solve real-world business
                challenges.
              </p>
            </div>
            <Link
              to="/about"
              data-cursor="grow"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-(--color-accent) hover:underline"
            >
              Read more about me <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-center text-xs tracking-[0.2em] text-(--color-accent)">BY THE NUMBERS</p>
          </Reveal>
          <RevealGroup className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-4" stagger={0.1}>
            {achievements.map((a) => (
              <motion.div variants={revealItem} key={a.label} className="border-l-2 border-(--color-line) pl-5">
                <p className="font-display text-4xl font-medium text-(--color-accent) sm:text-5xl">{a.number}</p>
                <p className="mt-2 text-sm leading-snug text-(--color-ink-soft)">{a.label}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-(--color-ink) px-6 py-24 text-(--color-canvas) lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-gold)">SELECTED PROJECTS</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Built, deployed, measured.
            </h2>
          </Reveal>
          <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {projects.map((b) => (
              <motion.div variants={revealItem} key={b.title} className="border-t border-(--color-canvas)/20 pt-6">
                <p className="text-xs tracking-wide text-(--color-canvas)/40">{b.date}</p>
                <p className="mt-2 font-display text-xl font-medium">{b.title}</p>
                <p className="mt-1 text-xs text-(--color-gold)">{b.type}</p>
                <p className="mt-3 text-sm leading-relaxed text-(--color-canvas)/65">{b.blurb}</p>
              </motion.div>
            ))}
          </RevealGroup>
          <Link to="/projects" data-cursor="grow" className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-(--color-gold) hover:underline">
            See all projects <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">INTERNSHIP &amp; WORK</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Learning by shipping.
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2" stagger={0.08}>
            {experience.map((e) => (
              <motion.article variants={revealItem} key={e.role} className="border-t border-(--color-line) pt-6">
                <p className="text-xs tracking-wide text-(--color-accent)">{e.date.toUpperCase()}</p>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug">{e.role}</h3>
                <p className="mt-1 text-sm text-(--color-ink-soft)">{e.org}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-(--color-ink-soft)">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Education */}
      <section className="bg-(--color-canvas-alt) px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">EDUCATION</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Where I studied.
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 divide-y divide-(--color-line) border-y border-(--color-line)" stagger={0.06}>
            {education.map((e) => (
              <motion.div
                variants={revealItem}
                key={e.title}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
                  <span className="text-sm font-medium text-(--color-accent)">{e.date}</span>
                  <span className="font-display text-lg font-medium">{e.title}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-(--color-ink-soft)">
                  <span>{e.place}</span>
                  <span className="rounded-full border border-(--color-line) px-3 py-1 text-xs">{e.note}</span>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden bg-(--color-ink) px-6 py-24 text-(--color-canvas) lg:px-10">
        <FloatingShapes />
        <Reveal className="relative mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.2em] text-(--color-gold)">OPEN TO OPPORTUNITIES</p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Let's work with your data.
          </h2>
          <p className="mt-5 text-lg text-(--color-canvas)/65">
            Looking for a data analyst or ML role? I'd love to hear from you.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={`mailto:${person.email}`}
              data-cursor="grow"
              className="inline-flex items-center gap-2 rounded-full bg-(--color-canvas) px-7 py-3.5 text-sm font-medium text-(--color-ink) transition-colors hover:bg-(--color-gold)"
            >
              {person.email} <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
