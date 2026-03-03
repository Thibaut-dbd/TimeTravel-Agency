"use client"

import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        {/* Animated ambient glow to simulate video background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse rounded-full bg-primary/20 blur-3xl" style={{ animationDelay: "1s" }} />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary/15 blur-3xl" style={{ animationDelay: "2s" }} />
        </div>
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.78 0.14 75 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.14 75 / 0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-xs font-medium tracking-[0.35em] uppercase text-primary md:text-sm">
          Luxury Temporal Voyages
        </p>

        <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
          <span className="block text-balance">
            Journey Beyond
          </span>
          <span className="block text-primary text-balance">
            Time Itself
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Step through the temporal threshold and witness history unfold before
          your eyes. Exclusive voyages crafted for the most discerning
          travelers.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#destinations"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wider uppercase text-primary-foreground transition-all hover:brightness-110 sm:w-auto"
          >
            Explore Destinations
          </a>
          <a
            href="#experience"
            className="inline-flex w-full items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-medium tracking-wider uppercase text-foreground transition-all hover:border-primary hover:text-primary sm:w-auto"
          >
            Our Experience
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#destinations"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to destinations"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">
            Scroll to Reveal
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
