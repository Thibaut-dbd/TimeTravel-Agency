"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, Sparkles, RotateCcw } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "What experience do you seek?",
    options: [
      { label: "Cultural Elegance", value: "culture", icon: "diamond" },
      { label: "Raw Adventure", value: "adventure", icon: "mountain" },
      { label: "Artistic Inspiration", value: "art", icon: "palette" },
    ],
  },
  {
    id: 2,
    question: "Preferred era type?",
    options: [
      { label: "Industrial Revolution", value: "industrial", icon: "cog" },
      { label: "Prehistoric World", value: "prehistoric", icon: "leaf" },
      { label: "Classical Antiquity", value: "classical", icon: "pillar" },
    ],
  },
  {
    id: 3,
    question: "Ideal activity?",
    options: [
      { label: "Grand Exhibitions & Galas", value: "galas", icon: "glass" },
      { label: "Exploration & Discovery", value: "explore", icon: "compass" },
      { label: "Workshops & Creation", value: "create", icon: "brush" },
    ],
  },
]

const results: Record<
  string,
  { title: string; subtitle: string; description: string; image: string }
> = {
  paris: {
    title: "Paris 1889",
    subtitle: "Belle \u00C9poque",
    description:
      "Your ideal era is the golden age of Paris! You will thrive among the grand exhibitions, elegant salons, and the shimmering debut of the Eiffel Tower. Prepare for an experience of unmatched cultural sophistication.",
    image: "/TimeTravel-Agency/images/paris.jpg",
  },
  cretaceous: {
    title: "Cretaceous Period",
    subtitle: "-65M Years",
    description:
      "You are a born explorer! The prehistoric world awaits with its awe-inspiring landscapes and magnificent creatures. Our secure observation pods will give you a front-row seat to nature's greatest show.",
    image: "/TimeTravel-Agency/images/cretaceous.jpg",
  },
  florence: {
    title: "Florence 1504",
    subtitle: "Renaissance",
    description:
      "Your soul belongs in the Renaissance! Walk alongside the greatest artistic minds in history, witness masterpieces being born, and immerse yourself in the creative revolution that shaped Western civilization.",
    image: "/TimeTravel-Agency/images/florence.jpg",
  },
}

function getRecommendation(answers: string[]): string {
  const scores: Record<string, number> = { paris: 0, cretaceous: 0, florence: 0 }

  answers.forEach((answer) => {
    if (["culture", "industrial", "galas"].includes(answer)) scores.paris++
    if (["adventure", "prehistoric", "explore"].includes(answer)) scores.cretaceous++
    if (["art", "classical", "create"].includes(answer)) scores.florence++
  })

  return Object.entries(scores).reduce((a, b) => (a[1] >= b[1] ? a : b))[0]
}

function OptionIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    diamond: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M2.25 7.5l9.75 13.5 9.75-13.5M2.25 7.5L12 2.25l9.75 5.25M2.25 7.5h19.5" />
      </svg>
    ),
    mountain: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M3 20l5.5-9.5L12 15l4-7 5 12H3z" />
      </svg>
    ),
    palette: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4c3.1 0 5.6-2.5 5.6-5.6C23 6.36 18.03 2 12 2z" />
        <circle cx="8" cy="10" r="1.5" /><circle cx="12" cy="7" r="1.5" /><circle cx="16" cy="10" r="1.5" />
      </svg>
    ),
    cog: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 008.57 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 8.57a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.6.77 1.02 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    leaf: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
      </svg>
    ),
    pillar: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M6 3h12M6 21h12M7 3v18M17 3v18M9 3v18M15 3v18M4 3h16M4 21h16" />
      </svg>
    ),
    glass: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M8 22h8M12 17v5M7 2h10l-2 15H9L7 2z" />
      </svg>
    ),
    compass: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" />
      </svg>
    ),
    brush: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M18.37 2.63a2.12 2.12 0 013 3L14 13l-4 1 1-4 7.37-7.37zM9 15a3 3 0 00-3 3c0 1.66-1.34 2-3 2 1.65 1.32 3.13 2 5 2a4 4 0 004-4 3 3 0 00-3-3z" />
      </svg>
    ),
  }
  return <>{icons[icon] || null}</>
}

export function TimeTravelQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [result, setResult] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setResult(getRecommendation(newAnswers))
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setAnswers([])
    setResult(null)
  }

  const progress = result ? 100 : ((currentStep) / questions.length) * 100

  return (
    <section id="quiz" className="relative py-24 lg:py-32" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs tracking-[0.35em] uppercase text-primary">
            Personalized Experience
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">Find Your Perfect Era</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Answer three simple questions and let our temporal algorithms match
            you with your ideal destination.
          </p>
        </motion.div>

        {/* Quiz Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden rounded-2xl border border-border bg-card"
        >
          {/* Progress Bar */}
          <div className="h-1 bg-secondary">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          <div className="p-6 md:p-10">
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div
                  key={`question-${currentStep}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Question Counter */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs tracking-widest uppercase text-muted-foreground">
                      Question {currentStep + 1} of {questions.length}
                    </span>
                    {currentStep > 0 && (
                      <button
                        onClick={handleBack}
                        className="flex items-center gap-1 text-xs tracking-wider uppercase text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ArrowLeft className="h-3 w-3" />
                        Back
                      </button>
                    )}
                  </div>

                  {/* Question */}
                  <h3 className="mb-8 font-serif text-2xl text-foreground md:text-3xl">
                    {questions[currentStep].question}
                  </h3>

                  {/* Options */}
                  <div className="flex flex-col gap-4">
                    {questions[currentStep].options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className="group flex items-center gap-4 rounded-xl border border-border bg-secondary/50 p-5 text-left transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
                          <OptionIcon icon={option.icon} />
                        </div>
                        <span className="text-sm tracking-wide text-foreground md:text-base">
                          {option.label}
                        </span>
                        <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:text-primary group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-xs tracking-widest uppercase text-primary">
                      Your Perfect Match
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl text-foreground md:text-4xl">
                    {results[result].title}
                  </h3>
                  <p className="mt-1 text-sm tracking-widest uppercase text-primary">
                    {results[result].subtitle}
                  </p>

                  <div className="mx-auto mt-6 h-48 w-full max-w-md overflow-hidden rounded-xl">
                    <img
                      src={results[result].image}
                      alt={results[result].title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {results[result].description}
                  </p>

                  <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <a
                      href="#destinations"
                      className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm tracking-wider uppercase text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(201,165,78,0.25)]"
                    >
                      Book This Era
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm tracking-wider uppercase text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Retake Quiz
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
