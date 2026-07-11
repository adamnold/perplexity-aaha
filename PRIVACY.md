# Privacy and Network Behavior

The wrapper adds no AAHA analytics. It disables Chromium component updates, background networking, domain-reliability reporting, Breakpad, Translate, Optimization Hints, Media Router, and Secure DNS; known Google update/telemetry hosts are blocked.

Perplexity must still contact perplexity.ai, CDNs, model/search infrastructure, authentication providers, connectors, and linked sources. Google or Apple traffic may occur when the user deliberately selects those sign-in methods. Blocklists reduce known optional traffic but are not proof of zero third-party traffic.

The local profile at ~/.config/Perplexity contains cookies, sessions, cache, local storage, and preferences. Normal uninstall preserves it; --purge removes it and signs the wrapper out without deleting the Perplexity account.
