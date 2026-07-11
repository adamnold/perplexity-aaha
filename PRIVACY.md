# Privacy and Network Behavior

The wrapper adds no AAHA analytics. It disables Chromium component updates, background networking, domain-reliability reporting, Breakpad, Translate, Optimization Hints, Media Router, and Secure DNS; known Google update/telemetry hosts are blocked.

Perplexity must still contact perplexity.ai, CDNs, model/search infrastructure, authentication providers, connectors, and linked sources. A clean-profile audit on 2026-07-11 showed that the Perplexity page loads accounts.google.com during initial startup, before the user selects a sign-in method. It also contacted Cloudflare Insights, Datadog, Singular, and Eppo hosts controlled by Perplexity's web application. Apple traffic may occur when Apple sign-in is selected. The wrapper does not control these service-level design choices, and blocking identity-provider resources would break the promised Google sign-in path.

Blocklists reduce known Chromium update and telemetry traffic but are not proof of zero Google or third-party traffic. AAHA_NETWORK_AUDIT=1 can be used to review current hostname behavior because Perplexity may change its web application independently.

The local profile at ~/.config/Perplexity contains cookies, sessions, cache, local storage, and preferences. Normal uninstall preserves it; --purge removes it and signs the wrapper out without deleting the Perplexity account.
