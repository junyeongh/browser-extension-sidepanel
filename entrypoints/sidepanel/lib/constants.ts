import type { Services } from "./types";

export const services: Services = {
  productivity: {
    keep: {
      enabled: true,
      path: "https://keep.google.com",
    },
    tasks: {
      enabled: true,
      path: "https://tasks.google.com/embed/list/",
    },
  },
  LLM: {
    claude: {
      enabled: true,
      path: "https://claude.ai/",
    },
    gemini: {
      enabled: true,
      path: "https://gemini.google.com/",
    },
    chatGPT: {
      enabled: true,
      path: "https://chatgpt.com/",
    },
  },
} as const;

export const defaultCategory = "productivity";
export const defaultService = "keep";
