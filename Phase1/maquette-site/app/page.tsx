import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DestinationsGallery } from "@/components/destinations-gallery"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DestinationsGallery />
      </main>
      <Footer />
      <ChatbotWidget />
    </>
  )
}
