Now, let's make the chatbot widget fully functional by connecting it to the Mistral AI API.

Please implement the following:

API Integration: Set up the logic to call the Mistral API. If using a framework like Next.js, create an API route to keep the API key secure. If using Vite/React directly, provide instructions on how I should set up the .env file for VITE_MISTRAL_API_KEY.

Model: Use the mistral-small-latest model.

System Prompt (Personality): Inject this exact system prompt into the API call to define the AI's behavior: 'Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe. Ton rôle : conseiller les clients sur les meilleures destinations temporelles. Ton ton : Professionnel mais chaleureux, passionné d'histoire, enthousiaste. Tu connais parfaitement : Paris 1889 (Belle Époque), Crétacé -65M, et Florence 1504 (Renaissance). Tu dois répondre en français de manière concise.'

Chat State: Update the widget to handle the conversation array (user messages and assistant responses), clear the input field after sending, and show a loading indicator (like 'L'assistant réfléchit...') while waiting for the Mistral API response.

Error Handling: Add a fallback message in the chat UI if the API call fails.

Add a new interactive section called 'Find Your Era' above the footer. This will be a functional personalization feature.
Create a simple, elegant 3-step quiz component:


1 'What experience do you seek?' (Options: Culture, Adventure, Elegance)
2 'Preferred period?' (Options: Modern, Ancient, Renaissance)
3 'Ideal activity?' (Options: Monuments, Nature, Art)


When the user finishes, use a simple logic to dynamically display a recommended destination (Paris, Cretaceous, or Florence) based on their answers, along with a 'Book this era' button.