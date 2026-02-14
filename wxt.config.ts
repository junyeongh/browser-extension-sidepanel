import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: 'side panel',
    description: 'Open websites in side panel',
    version: '0.0.2',
    permissions: ['sidePanel', 'declarativeNetRequestWithHostAccess'],
    host_permissions: [
      'https://keep.google.com/*',
      'https://tasks.google.com/embed/list/*',
      'https://claude.ai/*',
      'https://chatgpt.com/*',
      'https://chat.openai.com/*',
      'https://openai.com/*',
      'https://gemini.google.com/*',
      'https://auth.openai.com/*',
      'https://auth0.openai.com/*',
      'https://challenges.cloudflare.com/*',
      'https://*.cloudflare.com/*',
      'https://accounts.google.com/*',
      'https://google.com/*',
      'https://www.google.com/*',
    ],
    side_panel: {
      default_path: 'sidepanel.html',
    },
    action: {
      "default_title": "Click to open panel"
    },
    minimum_chrome_version: '120',
    declarative_net_request: {
      rule_resources: [{
        enabled: true,
        id: "frame_rules",
        path: "rules.json"
      }]
    }
  },
  modules: ['@wxt-dev/module-react', '@wxt-dev/auto-icons'],
  autoIcons: {
    baseIconPath: "assets/icon.svg",
  }
});
