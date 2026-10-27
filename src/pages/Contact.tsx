import { Mail, MapPin } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { social, person } from "../data/site";

export default function Contact() {
  return (
    <section className="px-6 pt-36 pb-24 lg:px-10 lg:pt-44">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-(--color-accent)">CONTACT</p>
          <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
            Let's talk data.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-(--color-ink-soft)">
            Open to data analyst and machine learning roles, internships and collaborations.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3 text-sm">
              <Mail size={18} className="text-(--color-accent)" />
              <a href={`mailto:${person.email}`} className="hover:text-(--color-accent)">
                {person.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={18} className="text-(--color-accent)" />
              <span>{person.location} · {person.phone}</span>
            </div>
          </div>

          <div className="mt-10 flex gap-5">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="grow"
                className="text-sm font-medium text-(--color-ink-soft) hover:text-(--color-accent)"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
