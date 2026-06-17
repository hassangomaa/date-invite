/**
 * Personalize the invite here — swap recipient details for anyone.
 * Everything else updates automatically across the flow.
 */
export const siteConfig = {
  sender: {
    name: "SNSN",
    nameArabic: "سنسن",
  },

  recipient: {
    /** Her first name — change this per invite */
    name: "Nourhan",
    /** Optional pet name shown in some steps */
    nickname: "beautiful",
    /**
     * Profile photo URL (leave empty for a default heart avatar).
     * Tip: add a file to /public/photos/her.jpg and set "/photos/her.jpg"
     */
    photoUrl: "",
  },

  proposal: {
    greeting: "Hey",
    question: "will you go on a date with me?",
    emoji: "🌹",
    confirmQuestion: "Are you sure? I really mean it",
    confirmEmoji: "🥰",
  },

  schedule: {
    title: "When are you free?",
    subtitle: "Pick a day and time that works for you",
    defaultTime: "18:00",
  },

  food: {
    title: "What are you craving?",
    subtitle: "I'll take care of everything",
    options: [
      { id: "sushi", label: "Sushi", emoji: "🍣" },
      { id: "italian", label: "Italian", emoji: "🍝" },
      { id: "burgers", label: "Burgers", emoji: "🍔" },
      { id: "surprise", label: "Surprise me", emoji: "✨" },
    ],
  },

  success: {
    headline: "glad you didn't say no.",
    message: "be ready by 6, I'm coming to get you",
    messageEmoji: "🚗",
    ps: "P.S. normal people text. I made a website during lunch, for you, no big deal.",
    /** Shown in footer */
    builtBy: "built with love by",
  },
} as const;

export type SiteConfig = typeof siteConfig;
