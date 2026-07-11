"use strict";
module.exports = {
  schemaVersion: 2, configured: true,
  repoName: "perplexity-aaha", productName: "Perplexity",
  appId: "com.adamandhisagents.perplexity", executable: "perplexity-aaha",
  iconName: "perplexity-aaha", profileName: "Perplexity",
  legacyProfileNames: [], compatibilityDesktopIds: ["perplexity"],
  url: "https://www.perplexity.ai",
  trustedNavigationHosts: ["perplexity.ai", "pplx.ai"],
  trustedAuthHosts: ["accounts.google.com", "appleid.apple.com"],
  permissions: { "clipboard-sanitized-write": ["perplexity.ai"] },
  blockedHosts: ["clients2.google.com", "clients4.google.com", "update.googleapis.com", "safebrowsing.googleapis.com", "optimizationguide-pa.googleapis.com", "redirector.gvt1.com", "google-analytics.com", "www.google-analytics.com", "stats.g.doubleclick.net"],
  externalProtocols: ["http:", "https:", "mailto:"], openExternalLinks: true,
  width: 1360, height: 860, category: "Network;",
  comment: "Perplexity AI answer engine", keywords: "ai;search;research;perplexity;"
};
