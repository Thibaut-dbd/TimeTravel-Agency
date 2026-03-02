"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer id="contact" ref={ref} className="border-t border-border bg-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-primary"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <span className="font-serif text-lg tracking-wide text-foreground">
                TimeTravel Agency
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium temporal expeditions since 2026. Explore history with
              unparalleled luxury, safety, and authenticity.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-4 text-xs tracking-widest uppercase text-primary">
                Destinations
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#destinations"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Paris 1889
                  </a>
                </li>
                <li>
                  <a
                    href="#destinations"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Cretaceous Period
                  </a>
                </li>
                <li>
                  <a
                    href="#destinations"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Florence 1504
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs tracking-widest uppercase text-primary">
                Agency
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#quiz"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Take the Quiz
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Safety Protocol
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-xs tracking-widest uppercase text-primary">
              Temporal Dispatch
            </h4>
            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe to receive updates on new eras and exclusive travel
              offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-4 py-2.5 text-sm tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {"\u00A9"} 2026 TimeTravel Agency. All rights reserved across all
            timelines.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Temporal Terms
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Paradox Disclaimer
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
