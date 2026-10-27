import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, RevealGroup, revealItem } from "../components/Reveal";
import { projects } from "../data/site";

const categories = ["All", "Data Analytics", "Machine Learning", "Full-Stack"] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const visibleProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory,
  );

  return (
    <div>
      <section className="px-6 pt-36 pb-12 lg:px-10 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">PROJECTS</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              Things I've built, end to end.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-(--color-ink-soft)">
              From CNN-powered web apps to Power BI dashboards on 30K orders.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-xl border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) ${
                      isActive
                        ? "border-(--color-ink) bg-(--color-ink) text-(--color-canvas)"
                        : "border-(--color-line) bg-transparent text-(--color-ink) hover:border-(--color-accent)"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <RevealGroup className="grid gap-6 md:grid-cols-2" stagger={0.08}>
            {visibleProjects.map((project) => (
              <motion.article
                variants={revealItem}
                key={project.title}
                className="flex flex-col rounded-3xl border border-(--color-line) bg-(--color-canvas-alt) p-5 sm:p-6"
              >
                {project.imageSrc ? (
                  <img
                    src={project.imageSrc}
                    alt={`${project.title} project preview`}
                    className="aspect-[1.65] w-full rounded-xl border border-(--color-line) object-cover"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={`Screenshot placeholder for ${project.title}`}
                    className="flex aspect-[1.65] items-center justify-center rounded-xl border border-dashed border-(--color-line) text-sm text-(--color-ink-soft)"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, var(--color-canvas-alt) 0, var(--color-canvas-alt) 14px, var(--color-canvas) 14px, var(--color-canvas) 28px)",
                    }}
                  >
                    Project screenshot placeholder
                  </div>
                )}

                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-display text-xl font-semibold sm:text-2xl">{project.title}</h2>
                  <span className="text-xs text-(--color-ink-soft)">{project.date}</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-(--color-line) px-3 py-1 text-xs text-(--color-ink-soft)"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-(--color-ink-soft)">{project.blurb}</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-(--color-line) px-4 py-2 text-sm font-medium transition-colors hover:border-(--color-accent) hover:text-(--color-accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-(--color-ink) px-4 py-2 text-sm font-medium text-(--color-canvas) transition-colors hover:bg-(--color-accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
