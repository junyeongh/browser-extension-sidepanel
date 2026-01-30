export default defineBackground(() => {
  browser.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((err) => console.error(err));
});
