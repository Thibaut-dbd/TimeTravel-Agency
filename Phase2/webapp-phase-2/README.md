# TimeTravel Agency

> Explore history, reinvented.

A premium, mobile-first single-page web application for a luxury time travel agency. Built with modern web technologies and designed with an elegant dark theme and gold accents.

---

## Tech Stack

| Technology       | Purpose                                  |
| ---------------- | ---------------------------------------- |
| **Next.js 16**   | React framework with App Router          |
| **React 19**     | UI component library                     |
| **Tailwind CSS 4** | Utility-first CSS framework            |
| **Framer Motion** | Smooth animations and page transitions  |
| **Lucide React** | Icon library                             |
| **TypeScript**   | Type-safe development                    |

---

## Features

### Hero Section
- Full-screen dramatic header with background image (video-ready placeholder)
- Animated tagline with Call-to-Action button
- Smooth scroll indicator

### Destinations Gallery
- 3 premium interactive cards: **Paris 1889**, **Cretaceous Period**, **Florence 1504**
- Hover effects, era badges, and highlight tags
- Integration-ready with replaceable images at `/public/images/`

### Time Travel Quiz
- Interactive 3-question personalization quiz
- Dynamic recommendation engine based on user answers
- Animated transitions between steps with progress bar
- Result card with matched destination

### Chatbot Widget
- Floating chat bubble in bottom-right corner
- Clean dark-themed chat window with gold accents
- French welcome message
- **API-ready**: Replace the `setTimeout` in `components/chatbot-widget.tsx` with your API endpoint

### Additional
- Sticky header with smooth scrolling
- Mobile-responsive design
- Newsletter subscription form in footer
- Scroll-triggered fade-in animations

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

---

## Replacing Images

Destination images are located in `/public/images/`:
- `paris-1889.jpg` - Paris Belle Epoque
- `cretaceous.jpg` - Cretaceous Period
- `florence-1504.jpg` - Renaissance Florence

Replace these files with your own images (recommended aspect ratio: 16:9, min 1200px wide).

---

## Connecting the Chatbot to an API

In `components/chatbot-widget.tsx`, find the comment `// API HOOK` and replace the `setTimeout` block with your API call:

```typescript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: userMessage.content }),
})
const data = await response.json()
```

---

## AI Tools Used

| Tool             | Usage                                    |
| ---------------- | ---------------------------------------- |
| <!-- Add tool --> | <!-- Describe usage -->                 |
| <!-- Add tool --> | <!-- Describe usage -->                 |

---

## Credits

| Contributor      | Role                                     |
| ---------------- | ---------------------------------------- |
| <!-- Add name --> | <!-- Describe role -->                  |
| <!-- Add name --> | <!-- Describe role -->                  |

---

## License

<!-- Add your license here -->
