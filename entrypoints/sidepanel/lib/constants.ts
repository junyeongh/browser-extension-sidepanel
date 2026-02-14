import type { Services } from "./types";

export const services: Services = {
  productivity: {
    keep: {
      enabled: true,
      logo: "",
      path: "https://keep.google.com",
    },
    tasks: {
      enabled: true,
      logo: "",
      path: "https://tasks.google.com/embed/list/",
    },
  },
  LLM: {
    claude: {
      enabled: true,
      logo: "",
      path: "https://claude.ai/",
    },
    gemini: {
      enabled: true,
      logo: "",
      path: "https://gemini.google.com/app",
    },
    chatGPT: {
      enabled: false,
      logo: "",
      path: "https://gemini.google.com/app",
    },
  },
} as const;

export const defaultCategory = "productivity";
export const defaultService = "keep";
