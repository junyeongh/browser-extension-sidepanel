import { services } from "./constants";

export function getServiceName(path: string): string {
  for (const [, categoryServices] of Object.entries(services)) {
    const entry = Object.entries(categoryServices).find(([, s]) => s.path === path);
    if (entry) {
      return entry[0].charAt(0).toUpperCase() + entry[0].slice(1);
    }
  }
  return "";
}
