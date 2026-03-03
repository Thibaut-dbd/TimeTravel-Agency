"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Clock, X } from "lucide-react"

interface Destination {
  id: string
  title: string
  era: string
  image: string
  tagline: string
  description: string
  details: {
    duration: string
    location: string
    period: string
  }
  highlights: string[]
}

const destinations: Destination[] = [
  {
    id: "paris-1889",
    title: "Paris 1889",
    era: "Belle Epoque",
    image: "/images/paris-1889.jpg",
    tagline: "Witness the birth of the Iron Lady",
    description:
      "Step into the enchanting Parisian streets during the Exposition Universelle. Watch the Eiffel Tower rise against the skyline, mingle with the artistic elite, and taste the golden age of French culture at its peak.",
    details: {
      duration: "72 hours",
      location: "Paris, France",
      period: "May 1889",
    },
    highlights: [
      "Exclusive access to the Eiffel Tower opening ceremony",
      "Private tour of Gustave Eiffel's secret apartment",
      "Dinner at the Grand Hotel with Belle Epoque luminaries",
      "Visit the Exposition Universelle pavilions",
    ],
  },
  {
    id: "cretaceous",
    title: "Cretaceous",
    era: "66 Million Years Ago",
    image: "/images/cretaceous.jpg",
    tagline: "Walk where giants once roamed",
    description:
      "Venture into the primeval world of the late Cretaceous period. Observe colossal dinosaurs in their natural habitat from the safety of our temporal observation pods. An expedition beyond imagination.",
    details: {
      duration: "48 hours",
      location: "Laurasia Supercontinent",
      period: "68 Million BC",
    },
    highlights: [
      "Observe T-Rex and Triceratops in their habitat",
      "Guided expedition through ancient forests",
      "Temporal observation pod with panoramic views",
      "Collect authenticated prehistoric specimens",
    ],
  },
  {
    id: "florence-1504",
    title: "Florence 1504",
    era: "High Renaissance",
    image: "/images/florence-1504.jpg",
    tagline: "Witness genius at work",
    description:
      "Immerse yourself in the cradle of the Renaissance. Walk the same streets as Michelangelo and Leonardo da Vinci, witness the unveiling of David, and experience the artistic revolution that shaped Western civilization.",
    details: {
      duration: "96 hours",
      location: "Florence, Italy",
      period: "September 1504",
    },
    highlights: [
      "Attend the unveiling of Michelangelo's David",
      "Private visit to Leonardo da Vinci's workshop",
      "Dine at a Medici-hosted Renaissance banquet",
      "Explore the Duomo and Uffizi masterpieces in creation",
    ],
  },
]

function DestinationCard({
  destination,
  onSelect,
}: {
  destination: Destination
  onSelect: () => void
}) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={destination.image}
          alt={`${destination.title} - ${destination.tagline}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-primary/40 bg-background/80 px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase text-primary backdrop-blur-sm">
          {destination.era}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-serif text-2xl text-foreground">
          {destination.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {destination.tagline}
        </p>

        {/* Quick info */}
        <div className="mt-auto flex items-center gap-4 border-t border-border/30 pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-primary/70" aria-hidden="true" />
            {destination.details.duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3 text-primary/70" aria-hidden="true" />
            {destination.details.location}
          </span>
        </div>

        <button
          onClick={onSelect}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/5 py-3 text-xs font-medium tracking-wider uppercase text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          Discover More
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}

function DestinationModal({
  destination,
  onClose,
}: {
  destination: Destination
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${destination.title} details`}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border/50 bg-card shadow-2xl shadow-primary/5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal image */}
        <div className="relative aspect-video">
          <Image
            src={destination.image}
            alt={destination.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 640px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal content */}
        <div className="flex flex-col gap-6 p-6 md:p-8">
          <div>
            <p className="mb-2 text-xs font-medium tracking-[0.25em] uppercase text-primary">
              {destination.era}
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              {destination.title}
            </h2>
          </div>

          <p className="leading-relaxed text-muted-foreground">
            {destination.description}
          </p>

          {/* Details grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1 rounded-lg border border-border/30 bg-secondary/50 p-3">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-[10px] tracking-wider uppercase text-muted-foreground">
                Duration
              </span>
              <span className="text-sm font-medium text-foreground">
                {destination.details.duration}
              </span>
            </div>
            <div className="flex flex-col gap-1 rounded-lg border border-border/30 bg-secondary/50 p-3">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-[10px] tracking-wider uppercase text-muted-foreground">
                Location
              </span>
              <span className="text-sm font-medium text-foreground">
                {destination.details.location}
              </span>
            </div>
            <div className="flex flex-col gap-1 rounded-lg border border-border/30 bg-secondary/50 p-3">
              <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-[10px] tracking-wider uppercase text-muted-foreground">
                Period
              </span>
              <span className="text-sm font-medium text-foreground">
                {destination.details.period}
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="mb-3 text-xs font-medium tracking-[0.2em] uppercase text-primary">
              Voyage Highlights
            </h3>
            <ul className="flex flex-col gap-2">
              {destination.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <button className="mt-2 w-full rounded-full bg-primary py-4 text-sm font-semibold tracking-wider uppercase text-primary-foreground transition-all hover:brightness-110">
            Reserve This Voyage
          </button>
        </div>
      </div>
    </div>
  )
}

export function DestinationsGallery() {
  const [selected, setSelected] = useState<Destination | null>(null)

  return (
    <section id="destinations" className="relative py-24 md:py-32">
      {/* Section background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-xl text-center md:mb-20">
          <p className="mb-4 text-xs font-medium tracking-[0.35em] uppercase text-primary">
            Choose Your Era
          </p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl md:text-5xl text-balance">
            Curated Destinations Through Time
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Each voyage is meticulously crafted to offer an unparalleled
            immersion into the most pivotal moments of history.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {destinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onSelect={() => setSelected(dest)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <DestinationModal
          destination={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}
