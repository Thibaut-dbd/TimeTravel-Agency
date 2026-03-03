"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 flex h-96 w-80 flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl shadow-primary/10 sm:w-96">
          {/* Chat header */}
          <div className="flex items-center justify-between border-b border-border/30 bg-secondary/50 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                <MessageCircle className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Temporal Concierge
                </p>
                <p className="text-[10px] text-muted-foreground">
                  Always online across all timelines
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-5">
            <div className="max-w-[80%] self-start rounded-2xl rounded-tl-sm bg-secondary px-4 py-3 text-sm leading-relaxed text-secondary-foreground">
              Welcome, traveler. I am your Temporal Concierge. How may I assist
              you with your journey through time?
            </div>
          </div>

          {/* Chat input */}
          <div className="border-t border-border/30 p-3">
            <div className="flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 px-4 py-2">
              <input
                type="text"
                placeholder="Ask about any era..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                aria-label="Chat message"
              />
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:brightness-110"
                aria-label="Send message"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </button>
    </div>
  )
}
