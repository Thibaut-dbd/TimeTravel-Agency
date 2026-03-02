import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DestinationsGallery } from "@/components/destinations-gallery"
import { TimeTravelQuiz } from "@/components/time-travel-quiz"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DestinationsGallery />
      <TimeTravelQuiz />
      <Footer />
      <ChatbotWidget />
    </main>
  )
}
