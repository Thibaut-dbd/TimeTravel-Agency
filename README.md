# TimeTravel Agency - Webapp Interactive

Une webapp immersive pour une agence de voyage temporel de luxe, permettant aux utilisateurs d'explorer des destinations historiques, d'interagir avec un assistant IA et de trouver leur ere ideale via un quiz personnalise.

---

## Stack Technique

| Technologie | Usage |
|---|---|
| **Next.js 16** (App Router) | Framework React fullstack, routing, API routes |
| **React 19** | Bibliotheque UI, composants fonctionnels, hooks |
| **TypeScript** | Typage statique sur l'ensemble du projet |
| **Tailwind CSS 4** | Systeme de design utilitaire, theming via design tokens |
| **Framer Motion** | Animations et transitions fluides (scroll reveal, modales) |
| **shadcn/ui** + **Radix UI** | Composants UI accessibles et personnalisables |
| **Lucide React** | Icones vectorielles coherentes |
| **Mistral AI API** (`mistral-small-latest`) | Intelligence artificielle pour le chatbot conversationnel |
| **next-themes** | Gestion du theme clair/sombre |
| **Vercel** | Deploiement et hebergement |

---

## Features Implementees

### Landing Page avec Hero Section
- Section hero plein ecran avec image de fond (Paris 1889)
- Animations d'entree sequentielles (texte, bouton, indicateur de scroll)
- Header avec navigation ancree vers les sections de la page
- Design responsive mobile-first

### Galerie des 3 Destinations Temporelles
- **Paris 1889** - Belle Epoque, inauguration de la Tour Eiffel
- **Cretace -65M** - Observation des dinosaures depuis des pods securises
- **Florence 1504** - Renaissance, ateliers de Michel-Ange et Leonard de Vinci
- Cartes animees au scroll avec badges d'epoque, highlights et CTA
- Gestion des erreurs de chargement d'images

### Chatbot IA Conversationnel
- Widget flottant avec animation d'ouverture/fermeture
- Integration API Mistral via route API Next.js securisee (cle API cote serveur)
- System prompt personnalise definissant la personnalite de l'assistant (conseiller voyage temporel, reponses en francais)
- Historique de conversation complet envoye a chaque requete
- Indicateur de chargement ("L'assistant reflechit...")
- Gestion des erreurs avec message de fallback en francais

### Quiz de Recommandation d'Ere
- 3 questions a choix multiples avec animations de transition
- Algorithme de scoring pour recommander la destination ideale
- Barre de progression animee
- Affichage du resultat avec image, description et CTA
- Navigation arriere et option de recommencer le quiz

### Elements Transversaux
- Theme sombre par defaut avec design tokens coherents
- Typographie avec polices serif (Playfair Display) et sans-serif (Inter)
- Footer avec liens de navigation et informations legales

---

## Transparence & Outils IA (Prompts documentes)

### Outils utilises

- **v0 by Vercel (Vibe coding)** : Generation et iteration du code de l'application via prompts conversationnels
  - Prompt utilise : 
    - Phase 1 [ici](/Phase1/prompt-p1.md) 
    - Phase 2 [ici](/Phase2/prompt-p2.md) 
    - Phase 3 [ici](/Phase3/prompt-p3.md) 

- **IA generative pour les images** : Creation des visuels des destinations temporelles
  - Prompt pour Paris 1889 : Paris in 1889 during Exposition Universelle, cinematic travel photography, luxury campaign style, golden hour lighting, view of the newly built Eiffel Tower painted in venetian red, elegant crowd with ladies in long dresses and umbrellas and gentlemen in top hats, steam atmosphere, iron architecture, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, vibrant but elegant colors, 8K, ultra detailed --ar 16:9
  - Prompt pour le Cretace : Late Cretaceous landscape 65 million years ago, cinematic travel photography, luxury campaign style, golden hour lighting, a majestic Triceratops drinking at a lake with reflection, giant ferns and Araucaria trees, volcanic smoke in distant background, peaceful but raw nature, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, vibrant but elegant colors, 8K, ultra detailed --ar 16:9
  - Prompt pour Florence 1504 : Florence Italy in 1504 Renaissance era, cinematic travel photography, luxury campaign style, golden hour lighting, view of the Santa Maria del Fiore Duomo and terracotta rooftops, nobles in velvet renaissance clothing walking in the piazza, artistic atmosphere, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, vibrant but elegant colors, 8K, ultra detailed --ar 16:9

- **Mistral AI (mistral-small-latest)** : Moteur conversationnel du chatbot integre
  - System prompt utilise : `Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe. Ton role : conseiller les clients sur les meilleures destinations temporelles. Ton ton : Professionnel mais chaleureux, passionne d'histoire, enthousiaste. Tu connais parfaitement : Paris 1889 (Belle Epoque), Cretace -65M, et Florence 1504 (Renaissance). Tu dois repondre en francais de maniere concise.`

- **Autres outils IA utilises** : 
  - Gemini Pro
  - Neo Banana
  - Mistral via API

---

## Installation et lancement

```bash
# Cloner le projet
git clone <url-du-repo>
cd timetravel-agency

# Installer les dependances
pnpm install

# Configurer les variables d'environnement
# Creer un fichier .env.local a la racine avec :
MISTRAL_API_KEY=votre_cle_api_mistral

# Lancer le serveur de developpement
pnpm dev
```

L'application sera accessible sur `http://localhost:3000`.
URL de la webapp déployée : https://thibaut-dbd.github.io/TimeTravel-Agency/

---

## Structure du projet

```
Webapp/
    app/
      api/chat/route.ts       # Route API securisee pour le chatbot Mistral
      layout.tsx               # Layout principal avec polices et theme
      page.tsx                 # Page d'accueil assemblant tous les composants
      globals.css              # Design tokens et styles globaux
    components/
      header.tsx               # Navigation principale
      hero-section.tsx         # Section hero avec animations
      destinations-gallery.tsx # Galerie des 3 destinations
      time-travel-quiz.tsx     # Quiz interactif de recommandation
      chatbot-widget.tsx       # Widget chatbot IA flottant
      footer.tsx               # Pied de page
      theme-provider.tsx       # Provider de theme clair/sombre
      ui/                      # Composants shadcn/ui reutilisables
    public/
      images/                  # Visuels des destinations
    styles/
        globals                # css globaux
```

---

## Credits
**Projet pedagogique Supervise IA - M1 CSINFRA**
CORRIVAUD Lylian, Thibaut DABBADIE, Gregory MYSCILE.
