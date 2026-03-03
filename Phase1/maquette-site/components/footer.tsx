export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/40 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/60">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="font-serif text-lg tracking-wide text-foreground">
                TimeTravel
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The world{"'"}s most exclusive temporal voyage agency. Crafting
              journeys through history since every point in time.
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="mb-4 text-xs font-medium tracking-[0.2em] uppercase text-primary">
              Destinations
            </h3>
            <ul className="flex flex-col gap-2.5">
              {["Paris 1889", "Cretaceous Era", "Florence 1504", "Ancient Rome", "Edo Japan"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#destinations"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-medium tracking-[0.2em] uppercase text-primary">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {["About Us", "Safety Protocols", "Temporal Ethics", "Careers", "Press"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-medium tracking-[0.2em] uppercase text-primary">
              Contact
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>concierge@timetravel.agency</li>
              <li>+1 (800) TEMPORAL</li>
              <li>Available across all timelines</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-border/30 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            {"© Infinity"} TimeTravel Agency. All rights reserved across all
            timelines.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Temporal Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
