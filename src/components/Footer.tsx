import { Link } from "../lib/router";
import { nav, social } from "../data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-(--color-ink) text-(--color-canvas)">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          <div>
            <p className="font-display text-2xl font-medium">Santosh Kumar G</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-(--color-canvas)/60">
              Data Analyst & ML engineer turning data into decisions.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-(--color-canvas)/40">EXPLORE</p>
            <ul className="mt-4 space-y-3">
              {nav.slice(0, 3).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-(--color-canvas)/75 hover:text-(--color-canvas)">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-(--color-canvas)/40">CONNECT</p>
            <ul className="mt-4 space-y-3">
              {nav.slice(3).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-(--color-canvas)/75 hover:text-(--color-canvas)">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-(--color-canvas)/40">EMAIL</p>
            <a href="mailto:santosh.ds.rymec@gmail.com" className="mt-4 block text-sm text-(--color-canvas)/75 hover:text-(--color-canvas)">santosh.ds.rymec@gmail.com</a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-(--color-canvas)/15 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-(--color-canvas)/40">© 2026 Santosh Kumar G. All rights reserved.</p>
          <div className="flex gap-5">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="grow"
                className="text-xs tracking-wide text-(--color-canvas)/60 hover:text-(--color-canvas)"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
