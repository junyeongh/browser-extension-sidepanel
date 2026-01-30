import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: 'side panel',
    description: 'Open websites in side panel',
    version: '0.0.1',
    permissions: ['sidePanel', 'declarativeNetRequestWithHostAccess'],
    host_permissions: [
      'https://keep.google.com/*',
      'https://tasks.google.com/embed/list/*',
      'https://claude.ai/*'
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
