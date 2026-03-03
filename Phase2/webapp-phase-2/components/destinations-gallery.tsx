"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useCallback } from "react"

const destinations = [
  {
    id: "paris-1889",
    title: "Paris 1889",
    subtitle: "Belle \u00C9poque",
    image: "/images/paris.jpg",
    date: "1889 AD",
    location: "Paris, France",
    description:
      "Witness the inauguration of the Eiffel Tower during the World Fair. Stroll the grand boulevards of Haussmann's Paris, attend the Moulin Rouge's opening season, and dine in the city's finest salons.",
    highlights: ["Eiffel Tower Inauguration", "World Fair Exhibition", "Belle \u00C9poque Salons"],
  },
  {
    id: "cretaceous",
    title: "Cretaceous Period",
    subtitle: "-65M Years",
    image: "/images/cretaceous.jpg",
    date: "-65,000,000",
    location: "Prehistoric Earth",
    description:
      "Journey to the age of giants. Observe majestic dinosaurs in their natural habitat from the safety of our temporal observation pods. An adventure 65 million years in the making.",
    highlights: ["T-Rex Observation", "Pteranodon Flight Deck", "Ancient Flora Gardens"],
  },
  {
    id: "florence-1504",
    title: "Florence 1504",
    subtitle: "Renaissance",
    image: "/images/florence.jpg",
    date: "1504 AD",
    location: "Florence, Italy",
    description:
      "Walk alongside Michelangelo and Leonardo da Vinci. Witness the unveiling of the David, explore bustling Renaissance workshops, and attend lavish Medici court gatherings.",
    highlights: ["Michelangelo's Workshop", "Medici Court Access", "Da Vinci Encounter"],
  },
]

function DestinationCard({
  destination,
  index,
}: {
  destination: (typeof destinations)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)
  const [imgError, setImgError] = useState(false)

  const handleImageError = useCallback(() => {
    setImgError(true)
  }, [])

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_60px_rgba(201,165,78,0.08)]"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
        {imgError ? (
          <div className="flex h-full w-full items-center justify-center bg-secondary">
            <span className="text-sm text-muted-foreground">{destination.title}</span>
          </div>
        ) : (
          <Image
            src={destination.image}
            alt={`${destination.title} - ${destination.subtitle}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={handleImageError}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

        {/* Era Badge */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          className="absolute top-4 left-4 rounded-full border border-primary/30 bg-background/80 px-3 py-1 backdrop-blur-md"
        >
          <span className="text-xs tracking-widest uppercase text-primary">
            {destination.subtitle}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl tracking-tight text-foreground">
          {destination.title}
        </h3>

        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3 text-primary" />
            {destination.date}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3 text-primary" />
            {destination.location}
          </span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {destination.description}
        </p>

        {/* Highlights */}
        <div className="mt-4 flex flex-wrap gap-2">
          {destination.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#quiz"
          whileHover={{ x: 4 }}
          className="mt-6 inline-flex items-center gap-2 text-sm tracking-wider uppercase text-primary transition-colors hover:text-gold-light"
        >
          Book This Era
          <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.article>
  )
}

export function DestinationsGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="destinations" className="relative py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs tracking-[0.35em] uppercase text-primary">
            Premium Destinations
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">Choose Your Era</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Each journey is meticulously curated to deliver an authentic,
            immersive experience of history{"'"}s most extraordinary moments.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
