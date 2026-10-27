import { ArrowRight } from "lucide-react";
import { Link } from "../lib/router";
import { Reveal, RevealGroup, revealItem } from "../components/Reveal";
import { MagneticButton } from "../components/MagneticButton";
import { motion } from "motion/react";
import { achievements, certifications, languages } from "../data/site";

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-36 pb-20 lg:px-10 lg:pt-44">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">ABOUT ME</p>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              A data mind with an engineer's habits.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-(--color-ink-soft)">
              Data Science graduate from Ballari, Karnataka — building models, dashboards and full-stack AI apps.
            </p>
            <Link to="/projects" className="mt-8 inline-block">
              <MagneticButton className="inline-flex items-center gap-2 rounded-full bg-(--color-ink) px-7 py-3.5 text-sm font-medium text-(--color-canvas) transition-colors hover:bg-(--color-accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2">
                See my work <ArrowRight size={16} />
              </MagneticButton>
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="/img/santosh.jpg"
              alt="Santosh Kumar G"
              className="mx-auto aspect-[2/3] w-full max-w-sm rounded-[2rem] object-cover object-[50%_25%] shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-(--color-canvas-alt) px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-(--color-ink-soft)">
          <Reveal>
            <p className="font-display text-2xl font-medium text-(--color-ink)">
              I like turning messy datasets into answers people can act on.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              I'm an aspiring Data Analyst with practical experience engineering machine learning models, building
              data pipelines and deploying full-stack AI applications. Python, SQL and Power BI are my daily tools.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              As a Machine Learning Intern at Contriver, I built a Road Pavement Detection system — CNN models
              classifying potholes, cracks and normal surfaces with 92% accuracy — and deployed it end to end.
              I'm now completing a 400+ hour AI Engineer program with DataMites, heading into deep learning,
              NLP, generative and agentic AI.
            </p>
          </Reveal>
        </div>
      </section>

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

      <section className="bg-(--color-ink) px-6 py-24 text-(--color-canvas) lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-gold)">CERTIFICATIONS</p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-3" stagger={0.08}>
            {certifications.map((p) => (
              <motion.div variants={revealItem} key={p.title} className="border-t border-(--color-canvas)/15 pt-6">
                <p className="font-display text-lg font-medium">{p.title}</p>
                <p className="mt-2 text-sm text-(--color-canvas)/60">{p.by}</p>
              </motion.div>
            ))}
          </RevealGroup>
          <p className="mt-14 text-sm text-(--color-canvas)/60">
            <span className="text-(--color-gold)">LANGUAGES</span> &nbsp; {languages.join(" · ")}
          </p>
        </div>
      </section>
    </>
  );
}
