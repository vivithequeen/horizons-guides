---
title: Shipping Guide
description: Requirements and common rejection reasons for each Horizons project type, so a sent-back project never comes as a surprise.
sidebar:
  order: 0
---

<style>
  /* Scoped to .horizons-guide so these styles only affect this page and never
     leak into the other guide pages. Colors are driven by CSS variables that
     flip with Starlight's own dark/light toggle (:root[data-theme='dark']),
     so we reuse the site's theme switch instead of shipping our own. Each
     ship-type title is a real Markdown heading so Starlight's built-in
     "On this page" table of contents lists every type. */
  .horizons-guide {
    --bg-chip-strong: #f5f5f5;
    --border: #e5e5e5;
    --border-strong: #888;
    --text-strong: #000000;
    --text-body: #1a1a1a;
    --text-muted: #333333;
    --text-dim: #4a4a4a;
    --text-faint: #888888;
    --step-bg: #000000;
    --step-fg: #ffffff;
    --good: #1a7a3a;
    --bad: #b91c1c;
    --rejection-bg: #fef2f2;
    --rejection-text: #4a1f1f;
    --warning-bg: #fef2f2;
    --warning-text: #7f1d1d;
    --tip-bg: #f5f5f5;
    --tip-border: #000000;
  }
  :root[data-theme='dark'] .horizons-guide {
    --bg-chip-strong: #232327;
    --border: #2a2a2d;
    --border-strong: #3a3a3e;
    --text-strong: #f5f5f7;
    --text-body: #d8d8dc;
    --text-muted: #b8b8be;
    --text-dim: #9a9aa0;
    --text-faint: #6e6e75;
    --step-bg: #f1f1f3;
    --step-fg: #0f0f10;
    --good: #4ade80;
    --bad: #f87171;
    --rejection-bg: rgba(248, 113, 113, 0.1);
    --rejection-text: #f3b4b4;
    --warning-bg: rgba(248, 113, 113, 0.12);
    --warning-text: #f3b4b4;
    --tip-bg: #1c1c1f;
    --tip-border: #f1f1f3;
  }
  .horizons-guide .bg-lead {
    color: var(--text-muted);
    font-size: 1rem;
    line-height: 1.6;
    margin: 0 0 1rem;
  }
  /* Icon sits inside the Markdown heading, so it lives outside .horizons-guide.
     currentColor makes it inherit the heading's color automatically. */
  .sl-markdown-content .bg-icon {
    width: 1.4em;
    height: 1.4em;
    vertical-align: -0.25em;
    margin-right: 0.15em;
  }
  .horizons-guide.bg-section {
    padding-bottom: 1rem;
    margin-bottom: 2.5rem;
  }
  .horizons-guide .bg-intro {
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0 0 1rem;
  }
  .horizons-guide .bg-heading {
    font-size: 0.78rem;
    color: var(--text-strong);
    margin: 1.25rem 0 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 700;
    border: 0;
  }
  .horizons-guide .bg-checklist {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .horizons-guide .bg-check {
    display: flex;
    align-items: flex-start;
    gap: 0.55rem;
    color: var(--text-body);
    font-size: 0.95rem;
    line-height: 1.5;
  }
  .horizons-guide .bg-mark {
    flex-shrink: 0;
    width: 1.1rem;
    text-align: center;
    font-weight: 700;
  }
  .horizons-guide .bg-check-good .bg-mark { color: var(--good); }
  .horizons-guide .bg-check-meh  .bg-mark { color: var(--text-faint); }
  .horizons-guide .bg-check-bad  .bg-mark { color: var(--bad); }
  .horizons-guide .bg-check-body {
    display: flex;
    flex-direction: column;
    gap: 0.05rem;
    min-width: 0;
  }
  .horizons-guide .bg-label {
    color: var(--text-strong);
    font-weight: 600;
  }
  .horizons-guide .bg-note {
    color: var(--text-dim);
    font-size: 0.88rem;
    line-height: 1.5;
  }
  .horizons-guide .bg-check-bad .bg-label {
    color: var(--text-dim);
    text-decoration: line-through;
    text-decoration-color: var(--bad);
  }
  .horizons-guide .bg-check-meh .bg-label {
    color: var(--text-dim);
  }
  .horizons-guide .bg-steps {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    color: var(--text-body);
    font-size: 0.95rem;
    line-height: 1.55;
  }
  .horizons-guide .bg-steps li {
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
  }
  .horizons-guide .bg-step-num {
    flex-shrink: 0;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background: var(--step-bg);
    color: var(--step-fg);
    font-size: 0.8rem;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    margin-top: 0.05rem;
  }
  .horizons-guide .bg-rejections {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .horizons-guide .bg-rejection {
    display: flex;
    align-items: flex-start;
    gap: 0.55rem;
    background: var(--rejection-bg);
    border-left: 3px solid var(--bad);
    border-radius: 4px;
    padding: 0.45rem 0.65rem;
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--text-body);
  }
  .horizons-guide .bg-rejection-count {
    flex-shrink: 0;
    font-weight: 700;
    color: var(--bad);
    font-variant-numeric: tabular-nums;
    min-width: 1.6rem;
  }
  .horizons-guide .bg-rejection-text {
    color: var(--rejection-text);
    word-break: break-word;
  }
  .horizons-guide .bg-callout {
    display: flex;
    gap: 0.6rem;
    padding: 0.6rem 0.75rem;
    border-radius: 4px;
    margin: 0.6rem 0;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .horizons-guide .bg-callout-icon {
    flex-shrink: 0;
    font-weight: 700;
    line-height: 1.5;
    margin-top: 0.05rem;
  }
  .horizons-guide .bg-callout-tip {
    background: var(--tip-bg);
    border-left: 3px solid var(--tip-border);
    color: var(--text-body);
  }
  .horizons-guide .bg-callout-warning {
    background: var(--warning-bg);
    border-left: 3px solid var(--bad);
    color: var(--warning-text);
  }
  .horizons-guide .bg-callout-warning .bg-callout-icon {
    color: var(--bad);
  }
  .horizons-guide .bg-callout-list {
    margin: 0;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .horizons-guide a {
    text-underline-offset: 2px;
  }
</style>

<div class="horizons-guide">
<p class="bg-lead">Hey all! As of 05/05/2026, more than half of projects on #horizons are being sent back for changes needed. This guide documents the requirements for each project type, so that rejections shouldn't come as a surprise! Use the <strong>On this page</strong> menu to jump to your ship type.</p>
</div>

## <svg class="bg-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M15 6.122c-.8.205-1.461.664-2 1.324-.36.441-.667.973-.922 1.58-.467 1.107-.767 2.463-.93 3.974-.068.641-.112 1.31-.133 2H15V6.122zM17 15h3.985a26.403 26.403 0 0 0-.134-2c-.162-1.51-.462-2.867-.929-3.974A6.447 6.447 0 0 0 19 7.446c-.539-.66-1.2-1.119-2-1.324V15zm5.541-3.607c.11.518.202 1.055.273 1.607.083.647.139 1.315.166 2h2.97a9.953 9.953 0 0 0-1.54-4.412 10.053 10.053 0 0 0-3.325-3.2c.643 1.127 1.133 2.487 1.456 4.005zm.01-5.449a12.012 12.012 0 0 1 5.202 7.621c.162.787.247 1.6.247 2.435 0 .834-.085 1.648-.247 2.435a12.012 12.012 0 0 1-9.318 9.318 12 12 0 0 1-3.435.206 11.932 11.932 0 0 1-5.55-1.903 12.012 12.012 0 0 1-5.203-7.621C4.085 17.648 4 16.835 4 16c0-.834.085-1.649.247-2.435a12.012 12.012 0 0 1 9.318-9.318A11.99 11.99 0 0 1 16 4a12.156 12.156 0 0 1 2.435.247c1.492.308 2.882.892 4.116 1.697zm-12.032 1.69a10.053 10.053 0 0 0-2.93 2.954A9.953 9.953 0 0 0 6.05 15h2.97c.028-.685.084-1.353.167-2a19.91 19.91 0 0 1 .273-1.607c.323-1.518.813-2.878 1.455-4.005a10 10 0 0 0-.395.246zM6.049 17a9.951 9.951 0 0 0 1.54 4.412 10.053 10.053 0 0 0 3.325 3.2c-.642-1.127-1.132-2.487-1.455-4.005A19.914 19.914 0 0 1 9.186 19a22.895 22.895 0 0 1-.166-2H6.05zm4.966 0c.021.69.065 1.359.134 2 .162 1.51.462 2.867.929 3.974.255.607.561 1.139.922 1.58.539.66 1.2 1.119 2 1.324V17h-3.985zM17 17v8.878c.8-.205 1.461-.664 2-1.324.36-.441.667-.973.922-1.58.467-1.107.767-2.463.93-3.974.068-.641.112-1.31.133-2H17zm5.98 0a22.914 22.914 0 0 1-.166 2 19.905 19.905 0 0 1-.273 1.607c-.323 1.518-.813 2.878-1.455 4.005a10.053 10.053 0 0 0 3.325-3.2A9.954 9.954 0 0 0 25.95 17h-2.97z"/></svg> Web Playable

<div class="horizons-guide bg-section">
<p class="bg-intro">A project that runs in a browser: websites, web apps, browser games, demos.</p>
<h3 class="bg-heading">Where to host</h3>
<ul class="bg-checklist">
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Vercel</span><span class="bg-note">Generous free tier, instant git deploys, edge functions cover most backend needs. Double-check you're sending the public *.vercel.app URL, not your internal vercel.com/&lt;you&gt;/&lt;project&gt; dashboard link.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Hack Club Nest</span><span class="bg-note">Free Linux shell from Hack Club, runs anything including long-lived backends.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">GitHub Pages</span><span class="bg-note">Super fast to set up, native to GitHub, free, but won't run a backend.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">itch.io</span><span class="bg-note">Drag-and-drop a zip; perfect for browser games and jam-style projects.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Netlify</span><span class="bg-note">Git-based deploys with a generous static-site free tier, similar feel to Vercel.</span></span></li>
<li class="bg-check bg-check-meh"><span class="bg-mark">−</span><span class="bg-check-body"><span class="bg-label">Streamlit Community Cloud</span><span class="bg-note">Zero-config for Streamlit/Python apps, but takes minutes to start up which is a pain to review.</span></span></li>
<li class="bg-check bg-check-bad"><span class="bg-mark">✗</span><span class="bg-check-body"><span class="bg-label">localhost only</span><span class="bg-note">Your site must stay indefinitely reachable; localhost is only up while your machine is. Not acceptable.</span></span></li>
<li class="bg-check bg-check-bad"><span class="bg-mark">✗</span><span class="bg-check-body"><span class="bg-label">Tunnels (bore, ngrok, Cloudflare Tunnel)</span><span class="bg-note">Same problem as localhost: the tunnel dies when your laptop sleeps. Your site must stay indefinitely reachable. Not acceptable.</span></span></li>
</ul>
<h3 class="bg-heading">Steps</h3>
<ol class="bg-steps">
<li><span class="bg-step-num">1</span><span>Push your source code to a public GitHub (or GitLab) repo.</span></li>
<li><span class="bg-step-num">2</span><span>Deploy somewhere from the recommended list above.</span></li>
<li><span class="bg-step-num">3</span><span>Open the deployed link in a fresh / incognito window to test it works without sign in.</span></li>
<li><span class="bg-step-num">4</span><span>Paste the deployed URL into Demo URL, and the repo into Code URL.</span></li>
<li><span class="bg-step-num">5</span><span>Add 1 or 2 screenshots and a README that says what it does, how to use it and how it works. Ideally include that it is a project for #horizons.</span></li>
</ol>
<h3 class="bg-heading">Common rejection reasons</h3>
<ul class="bg-rejections">
<li class="bg-rejection"><span class="bg-rejection-count">×28</span><span class="bg-rejection-text">README is missing the basics: real description, screenshots, tech stack, motivation, and how-it-works section</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×11</span><span class="bg-rejection-text">Project was already shipped to another Hack Club program (double-dipping is not allowed without significant new work)</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×10</span><span class="bg-rejection-text">README appears to have been written by AI</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×8</span><span class="bg-rejection-text">Project relies on AI beyond the 30% limit</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×7</span><span class="bg-rejection-text">All code committed in one go: reviewers cannot see incremental progress</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×7</span><span class="bg-rejection-text">A visible feature is broken in the deployed demo (dead button, 404 asset, navbar, etc.)</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×6</span><span class="bg-rejection-text">Project pre-dates the Horizons start window and was not updated meaningfully</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×5</span><span class="bg-rejection-text">Wrong or unrelated Hackatime project linked, or the same Hackatime project re-used across submissions</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×5</span><span class="bg-rejection-text">Under the 3-hour minimum</span></li>
</ul>
</div>

## <svg class="bg-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 7.75C15.2887 7.75 14.623 7.75745 14 7.77362C5.7919 7.98651 5 9.70856 5 15.75C5 19.0577 5.23738 21.0706 6.79932 22.25H5C4.448 22.25 4 22.698 4 23.25C4 23.802 4.448 24.25 5 24.25H27C27.552 24.25 28 23.802 28 23.25C28 22.698 27.552 22.25 27 22.25H25.2007C26.7626 21.0706 27 19.0577 27 15.75C27 9.25 26.0833 7.75 16 7.75ZM7.24951 19.2923C7.03903 18.4178 6.99951 17.3314 7 15.75C6.99951 14.1686 7.03903 13.0822 7.24951 12.2077C7.41556 11.409 7.50861 11.1888 7.96548 10.8763C8.3237 10.5908 8.99329 10.2783 10.3453 10.0605C11.7291 9.83453 13.5027 9.75055 15.9492 9.75H16C18.4727 9.74945 20.2614 9.83295 21.6547 10.0605C23.0067 10.2783 23.6763 10.5908 24.0345 10.8763C24.4914 11.1888 24.5844 11.409 24.7505 12.2077C24.961 13.0822 25.0005 14.1686 25 15.75C25.0005 17.3314 24.961 18.4178 24.7505 19.2923C24.5844 20.091 24.4914 20.3112 24.0345 20.6237C23.6763 20.9092 23.0067 21.2217 21.6547 21.4395C20.2614 21.6671 18.4727 21.7505 16 21.75H15.9492C13.5027 21.7495 11.7291 21.6655 10.3453 21.4395C8.99329 21.2217 8.3237 20.9092 7.96548 20.6237C7.50861 20.3112 7.41556 20.091 7.24951 19.2923Z"/></svg> Windows Playable

<div class="horizons-guide bg-section">
<p class="bg-intro">A native Windows app or game (.exe or installer).</p>
<h3 class="bg-heading">Where to host the build</h3>
<ul class="bg-checklist">
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">GitHub Release</span><span class="bg-note">Trusted, version-tagged, and free; the default reviewers expect.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">itch.io</span><span class="bg-note">Listing page with screenshots, builds, and download counts in one place.</span></span></li>
<li class="bg-check bg-check-bad"><span class="bg-mark">✗</span><span class="bg-check-body"><span class="bg-label">Google Drive (link share)</span><span class="bg-note">Your build needs to live somewhere indefinite and trusted. Drive links can be revoked, throttled, or quietly disappear, so they don't meet that bar. Stick to standard development practice and ship from a GitHub Release.</span></span></li>
<li class="bg-check bg-check-bad"><span class="bg-mark">✗</span><span class="bg-check-body"><span class="bg-label">random file host</span><span class="bg-note">Same problem: the file source must be indefinite and trustworthy. Anonymous file lockers fail both tests. Use the standard developer workflow and host the build on a GitHub Release.</span></span></li>
</ul>
<h3 class="bg-heading">Steps</h3>
<ol class="bg-steps">
<li><span class="bg-step-num">1</span><span>Build a release binary (dotnet publish, cargo build --release, your engine's Windows export, etc).</span></li>
<li><span class="bg-step-num">2</span><span>Zip the build folder so reviewers get the .exe plus any required DLLs and assets in one shot.</span></li>
<li><span class="bg-step-num">3</span><span>Upload the zip to a GitHub Release.</span></li>
<li><span class="bg-step-num">4</span><span>Put the download link in Demo URL and your source in Code URL.</span></li>
<li><span class="bg-step-num">5</span><span>In your README, list system requirements and any first-run steps (unblocking the .exe, allowing through SmartScreen).</span></li>
</ol>
<h3 class="bg-heading">Common rejection reasons</h3>
<ul class="bg-rejections">
<li class="bg-rejection"><span class="bg-rejection-count">×4</span><span class="bg-rejection-text">README appears to have been written by AI</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×2</span><span class="bg-rejection-text">Project was already shipped to another Hack Club program</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×1</span><span class="bg-rejection-text">README is missing screenshots, motivation, and details</span></li>
</ul>
<div class="bg-callout bg-callout-tip"><ul class="bg-callout-list"><li>Test on a clean virtual machine or a friend's laptop that doesn't have your dev tools installed, to catch missing dependencies.</li></ul></div>
</div>

## <svg class="bg-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M9 18H11.1906L14.8453 11.6699L14.134 10.4379C13.8578 9.95957 14.0217 9.34798 14.5 9.07184C14.9783 8.7957 15.5899 8.95957 15.866 9.43787L16 9.6699L16.134 9.43783C16.4101 8.95954 17.0217 8.79567 17.5 9.07181C17.9783 9.34795 18.1422 9.95954 17.866 10.4378L13.5 18H17.3458L18.5005 20H9C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18Z"/><path d="M21.9641 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18H20.8094L17.7315 12.6689L16.5768 14.6689L21.134 22.5622C21.4101 23.0405 22.0217 23.2044 22.5 22.9282C22.9783 22.6521 23.1422 22.0405 22.866 21.5622L21.9641 20Z"/><path d="M9.13396 21.5622C8.85782 22.0405 9.02169 22.6521 9.49998 22.9282C9.97828 23.2044 10.5899 23.0405 10.866 22.5622L11.7679 21H9.45854L9.13396 21.5622Z"/><path d="M16 4C26 4 28 6 28 16C28 26 26 28 16 28C6 28 4 26 4 16C4 6 6 4 16 4ZM24.336 7.665C23.247 6.576 21.1 6 16 6C10.9 6 8.753 6.576 7.664 7.665C6.575 8.753 6 10.9 6 16C6 21.1 6.575 23.247 7.664 24.336C8.753 25.425 10.9 26 16 26C21.1 26 23.247 25.425 24.336 24.336C25.425 23.247 26 21.1 26 16C26 10.9 25.425 8.754 24.336 7.665Z"/></svg> Mac Playable

<div class="horizons-guide bg-section">
<p class="bg-intro">A native macOS app (.app bundle or .dmg).</p>
<h3 class="bg-heading">Build format</h3>
<ul class="bg-checklist">
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Universal (arm64 + x86_64)</span><span class="bg-note">Runs on every Mac sold in the last decade; friendliest for reviewers.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Apple Silicon only</span><span class="bg-note">Fine for M-series Macs (2020+); label it clearly so Intel users know.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Intel only</span><span class="bg-note">Works on older Macs and runs under Rosetta on M-series; label the arch.</span></span></li>
</ul>
<h3 class="bg-heading">Steps</h3>
<ol class="bg-steps">
<li><span class="bg-step-num">1</span><span>Build a release .app bundle and zip it, or package as a .dmg.</span></li>
<li><span class="bg-step-num">2</span><span>Upload to a GitHub Release.</span></li>
<li><span class="bg-step-num">3</span><span>Add the download link as Demo URL and the repo as Code URL.</span></li>
<li><span class="bg-step-num">4</span><span>Document the unsigned-app workaround: right-click then Open the first time (you almost certainly won't have a paid Apple Dev cert).</span></li>
<li><span class="bg-step-num">5</span><span>Note in the README whether the build is Intel, Apple Silicon, or universal.</span></li>
</ol>
</div>

## <svg class="bg-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><g transform="scale(1.3333)"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z"/></g></svg> Linux Playable

<div class="horizons-guide bg-section">
<p class="bg-intro">A native Linux build: AppImage, .deb, .tar.gz, or a build script.</p>
<h3 class="bg-heading">Format choice</h3>
<ul class="bg-checklist">
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">AppImage</span><span class="bg-note">Single executable that bundles its own deps; runs on most modern distros.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Tarball + launcher</span><span class="bg-note">Works anywhere with the right runtime, but reviewers do more setup.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">.deb / .rpm</span><span class="bg-note">Native package install on Debian/Ubuntu (deb) or Fedora/RHEL (rpm); distro-locked.</span></span></li>
<li class="bg-check bg-check-bad"><span class="bg-mark">✗</span><span class="bg-check-body"><span class="bg-label">Build from source only</span><span class="bg-note">Reviewers won't install your toolchain just to try it.</span></span></li>
</ul>
<h3 class="bg-heading">Steps</h3>
<ol class="bg-steps">
<li><span class="bg-step-num">1</span><span>Produce a runnable artifact. AppImage is easiest because it bundles its own deps.</span></li>
<li><span class="bg-step-num">2</span><span>Upload to a GitHub Release.</span></li>
<li><span class="bg-step-num">3</span><span>Add the download link as Demo URL and the repo as Code URL.</span></li>
<li><span class="bg-step-num">4</span><span>In your README, list the distro you tested on and any system packages reviewers need.</span></li>
<li><span class="bg-step-num">5</span><span>Make sure the file is executable (chmod +x) before zipping if relevant.</span></li>
</ol>
<h3 class="bg-heading">Common rejection reasons</h3>
<ul class="bg-rejections">
<li class="bg-rejection"><span class="bg-rejection-count">×1</span><span class="bg-rejection-text">README appears to have been written by AI</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×1</span><span class="bg-rejection-text">Demo URL points to the GitHub repo instead of an actual demo</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×1</span><span class="bg-rejection-text">Under the minimum-hours threshold</span></li>
</ul>
</div>

## <svg class="bg-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M13 11C13 11.9336 12.9339 12.4739 12.8623 12.7763C12.8563 12.8018 12.8504 12.8247 12.8449 12.8449C12.8247 12.8504 12.8018 12.8563 12.7763 12.8623C12.4739 12.9339 11.9336 13 11 13C10.0664 13 9.52605 12.9339 9.22373 12.8623C9.19815 12.8563 9.17535 12.8504 9.15511 12.8449C9.14958 12.8247 9.14374 12.8018 9.13768 12.7763C9.06609 12.4739 9 11.9336 9 11C9 10.0664 9.06609 9.52605 9.13768 9.22373C9.14374 9.19815 9.14958 9.17535 9.15511 9.15511C9.17535 9.14958 9.19815 9.14374 9.22373 9.13768C9.52605 9.06609 10.0664 9 11 9C11.9336 9 12.4739 9.06609 12.7763 9.13768C12.8018 9.14374 12.8247 9.14958 12.8449 9.15511C12.8504 9.17535 12.8563 9.19815 12.8623 9.22373C12.9339 9.52605 13 10.0664 13 11ZM14.293 14.293C14.725 13.861 15 13.007 15 11C15 8.993 14.725 8.139 14.293 7.707C13.861 7.275 13.007 7 11 7C8.993 7 8.139 7.275 7.707 7.707C7.275 8.139 7 8.993 7 11C7 13.007 7.275 13.861 7.707 14.293C8.139 14.725 8.993 15 11 15C13.007 15 13.861 14.725 14.293 14.293ZM13 21C13 21.9336 12.9339 22.4739 12.8623 22.7763C12.8563 22.8018 12.8504 22.8247 12.8449 22.8449C12.8247 22.8504 12.8018 22.8563 12.7763 22.8623C12.4739 22.9339 11.9336 23 11 23C10.0664 23 9.52605 22.9339 9.22373 22.8623C9.19815 22.8563 9.17535 22.8504 9.15511 22.8449C9.14958 22.8247 9.14374 22.8018 9.13768 22.7763C9.06609 22.4739 9 21.9336 9 21C9 20.0664 9.06609 19.5261 9.13768 19.2237C9.14374 19.1982 9.14958 19.1753 9.15511 19.1551C9.17535 19.1496 9.19815 19.1437 9.22373 19.1377C9.52605 19.0661 10.0664 19 11 19C11.9336 19 12.4739 19.0661 12.7763 19.1377C12.8018 19.1437 12.8247 19.1496 12.8449 19.1551C12.8504 19.1753 12.8563 19.1982 12.8623 19.2237C12.9339 19.5261 13 20.0664 13 21ZM14.293 24.293C14.725 23.861 15 23.007 15 21C15 18.993 14.725 18.139 14.293 17.707C13.861 17.275 13.007 17 11 17C8.993 17 8.139 17.275 7.707 17.707C7.275 18.139 7 18.993 7 21C7 23.007 7.275 23.861 7.707 24.293C8.139 24.725 8.993 25 11 25C13.007 25 13.861 24.725 14.293 24.293ZM22.8623 22.7763C22.9339 22.4739 23 21.9336 23 21C23 20.0664 22.9339 19.5261 22.8623 19.2237C22.8563 19.1982 22.8504 19.1753 22.8449 19.1551C22.8247 19.1496 22.8018 19.1437 22.7763 19.1377C22.4739 19.0661 21.9336 19 21 19C20.0664 19 19.5261 19.0661 19.2237 19.1377C19.1982 19.1437 19.1753 19.1496 19.1551 19.1551C19.1496 19.1753 19.1437 19.1982 19.1377 19.2237C19.0661 19.5261 19 20.0664 19 21C19 21.9336 19.0661 22.4739 19.1377 22.7763C19.1437 22.8018 19.1496 22.8247 19.1551 22.8449C19.1753 22.8504 19.1982 22.8563 19.2237 22.8623C19.5261 22.9339 20.0664 23 21 23C21.9336 23 22.4739 22.9339 22.7763 22.8623C22.8018 22.8563 22.8247 22.8504 22.8449 22.8449C22.8504 22.8247 22.8563 22.8018 22.8623 22.7763ZM25 21C25 23.007 24.725 23.861 24.293 24.293C23.861 24.725 23.007 25 21 25C18.993 25 18.139 24.725 17.707 24.293C17.275 23.861 17 23.007 17 21C17 18.993 17.275 18.139 17.707 17.707C18.139 17.275 18.993 17 21 17C23.007 17 23.861 17.275 24.293 17.707C24.725 18.139 25 18.993 25 21ZM20.9994 7C20.4479 7 20.0003 7.4476 19.9995 7.99985V9.99955L18.0006 10.0003C17.4483 9.99955 17 10.4479 17 10.9994C17 11.5524 17.4483 11.9992 18.0006 12L19.9995 11.9992L20.0003 13.9996C19.9995 14.5519 20.4471 14.9995 21.0001 14.9995C21.5516 14.9995 21.9992 14.5519 22 13.9996V12L23.9989 11.9992C24.5512 12 24.9995 11.5516 24.9995 11.0001C24.9995 10.4471 24.5512 10.0003 23.9989 9.99955L21.9992 9.99955V7.99985C22 7.4476 21.5524 7 20.9994 7Z"/></svg> Cross Platform Compatible

<div class="horizons-guide bg-section">
<p class="bg-intro">You ship builds for more than one OS. Reviewers only need at least one of them to actually work, so pick the platforms you can confidently test and don't spread yourself thin.</p>
<h3 class="bg-heading">Distribution</h3>
<ul class="bg-checklist">
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Single GitHub Release</span><span class="bg-note">All builds in one place so reviewers can compare and grab the right one.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">GitHub Actions matrix build</span><span class="bg-note">Reproducible cross-compile that proves your CI works; free for public repos.</span></span></li>
</ul>
<h3 class="bg-heading">Steps</h3>
<ol class="bg-steps">
<li><span class="bg-step-num">1</span><span>Produce a build for each OS you want to advertise. As long as one of them runs cleanly for reviewers, you're fine.</span></li>
<li><span class="bg-step-num">2</span><span>Upload every build to a single GitHub Release.</span></li>
<li><span class="bg-step-num">3</span><span>Label each download clearly (myproject-win64.zip, myproject-mac-universal.dmg, myproject-linux.AppImage).</span></li>
<li><span class="bg-step-num">4</span><span>Link the Release page in Demo URL.</span></li>
<li><span class="bg-step-num">5</span><span>In your README, write a tiny table: platform, arch, tested OS version, and which one you tested most thoroughly.</span></li>
<li><span class="bg-step-num">6</span><span>If you cross-compiled with GitHub Actions, link the workflow file. Reviewers love that.</span></li>
</ol>
<h3 class="bg-heading">Common rejection reasons</h3>
<ul class="bg-rejections">
<li class="bg-rejection"><span class="bg-rejection-count">×4</span><span class="bg-rejection-text">Demo link is broken or unreachable (cannot SSH, cannot open in a browser, video link broken)</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×4</span><span class="bg-rejection-text">README is AI-written or missing the basics (description, tech stack, motivation)</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×2</span><span class="bg-rejection-text">Wrong or unrelated Hackatime project linked</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×2</span><span class="bg-rejection-text">Hackatime account is banned (referred to the Fraud Squad)</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×2</span><span class="bg-rejection-text">Project pre-dates the Horizons start window</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×2</span><span class="bg-rejection-text">Under the 3-hour minimum</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×1</span><span class="bg-rejection-text">Repo is empty or only contains a README</span></li>
</ul>
<div class="bg-callout bg-callout-tip"><ul class="bg-callout-list"><li>You don't need to ship every OS. Two builds you actually tested beats three you guessed at.</li></ul></div>
</div>

## <svg class="bg-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M18.634,9.438c0.276,-0.478 0.888,-0.642 1.366,-0.366c0.478,0.276 0.642,0.888 0.366,1.366l-7,12.124c-0.276,0.478 -0.888,0.642 -1.366,0.366c-0.478,-0.276 -0.642,-0.888 -0.366,-1.366l7,-12.124Zm4.348,11.452c-0.354,-0.424 -0.296,-1.055 0.128,-1.408l0.245,-0.205c1.478,-1.236 2.216,-1.854 3.529,-3.277c-1.338,-1.451 -2.052,-2.045 -3.612,-3.347l-0.162,-0.135c-0.424,-0.353 -0.482,-0.984 -0.128,-1.408c0.353,-0.424 0.942,-0.423 1.409,-0.128c1.609,1.018 2.609,2.018 4.2,3.964c0.219,0.312 0.409,0.664 0.409,1.054c0,0.39 -0.19,0.742 -0.409,1.053c-1.591,1.947 -2.591,2.947 -4.2,3.964l-0.001,0.001c-0.424,0.354 -1.055,0.296 -1.408,-0.128Zm-14.092,-1.408c0.424,0.353 0.482,0.984 0.128,1.408c-0.353,0.424 -0.984,0.482 -1.408,0.128l-0.001,-0.001c-1.609,-1.017 -2.609,-2.017 -4.2,-3.964c-0.219,-0.311 -0.409,-0.663 -0.409,-1.053c0,-0.39 0.19,-0.742 0.409,-1.054c1.591,-1.946 2.591,-2.946 4.2,-3.964c0.467,-0.295 1.056,-0.296 1.409,0.128c0.354,0.424 0.296,1.055 -0.128,1.408l-0.162,0.135c-1.56,1.302 -2.274,1.896 -3.612,3.347c1.313,1.423 2.051,2.041 3.529,3.277l0.245,0.205Z"/></svg> Python

<div class="horizons-guide bg-section">
<p class="bg-intro">A standalone Python script, CLI tool, or desktop app. Reviewers won't install Python, your dependencies, or set up a virtualenv just to try your project, so you must ship a compiled binary they can double-click.</p>
<div class="bg-callout bg-callout-warning"><span class="bg-callout-icon" aria-hidden="true">!</span><span>Got a web app with a Python backend (Flask, FastAPI, Django, Streamlit)? That belongs under Web Playable, not here. The compile-to-binary path is for standalone scripts and desktop apps only.</span></div>
<h3 class="bg-heading">How to compile to a binary</h3>
<ul class="bg-checklist">
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">auto-py-to-exe (Windows)</span><span class="bg-note">Friendly GUI on top of PyInstaller; produces a Windows .exe. Easiest first-time packager. pypi.org/project/auto-py-to-exe</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">PyInstaller (Windows / macOS / Linux)</span><span class="bg-note">The underlying tool auto-py-to-exe wraps. Run it on Windows for .exe, macOS for .app, Linux for an ELF binary. Does not cross-compile.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">py2app (macOS)</span><span class="bg-note">macOS-native packager that builds proper .app bundles.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Nuitka (Windows / macOS / Linux)</span><span class="bg-note">Compiles Python source to C and then to a native binary. Faster runtime and smaller surface area than the freezers.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">cx_Freeze (Windows / macOS / Linux)</span><span class="bg-note">Alternative freezer; cross-platform but again must be run on each target OS.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Briefcase / BeeWare (cross-platform + mobile)</span><span class="bg-note">Targets desktop and mobile (iOS / Android) from a single Python codebase.</span></span></li>
<li class="bg-check bg-check-bad"><span class="bg-mark">✗</span><span class="bg-check-body"><span class="bg-label">Shipping the raw .py file</span><span class="bg-note">Reviewers won't install Python or pip your deps. Always compile to a binary.</span></span></li>
</ul>
<h3 class="bg-heading">Steps</h3>
<ol class="bg-steps">
<li><span class="bg-step-num">1</span><span>Pick a packager for your target OS from the list above.</span></li>
<li><span class="bg-step-num">2</span><span>Run it on each OS you want to support. PyInstaller, py2app, Nuitka, and cx_Freeze do not cross-compile.</span></li>
<li><span class="bg-step-num">3</span><span>Upload the binaries to a GitHub Release, one zip per platform.</span></li>
<li><span class="bg-step-num">4</span><span>Put the Release link in Demo URL and your repo in Code URL.</span></li>
<li><span class="bg-step-num">5</span><span>In the README, list each binary's OS and arch, plus any first-run steps (unblocking on Windows, right-click-Open on macOS).</span></li>
</ol>
<h3 class="bg-heading">Common rejection reasons</h3>
<ul class="bg-rejections">
<li class="bg-rejection"><span class="bg-rejection-count">×3</span><span class="bg-rejection-text">README appears to have been written by AI</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×2</span><span class="bg-rejection-text">Project relies on AI beyond the 30% limit</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×2</span><span class="bg-rejection-text">All code committed in one go: reviewers cannot see incremental progress</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×2</span><span class="bg-rejection-text">Project was already shipped to another Hack Club program</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×1</span><span class="bg-rejection-text">Wrong or unrelated Hackatime project linked</span></li>
<li class="bg-rejection"><span class="bg-rejection-count">×1</span><span class="bg-rejection-text">Script needs to be shipped as a compiled binary (PyInstaller, py2app, etc.) instead of a raw .py file</span></li>
</ul>
<div class="bg-callout bg-callout-tip"><ul class="bg-callout-list"><li>Test each binary on a clean virtual machine or a friend's laptop that doesn't have Python or your dev tools installed.</li></ul></div>
</div>

## <svg class="bg-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M8.02362 18C8.00745 17.377 8 16.7113 8 16C8 5.9167 9.5 5 16 5C22.5 5 24 5.9167 24 16C24 16.7113 23.9926 17.377 23.9764 18C23.7635 26.2081 22.0414 27 16 27C9.95856 27 8.23651 26.2081 8.02362 18ZM16 25C17.5814 25.0005 18.6678 24.961 19.5423 24.7505C20.341 24.5844 20.5612 24.4914 20.8737 24.0345C21.1592 23.6763 21.4717 23.0067 21.6895 21.6547C21.9155 20.2709 21.9995 18.4973 22 16.0508V16C22.0005 13.5273 21.9171 11.7386 21.6895 10.3453C21.4717 8.9933 21.1592 8.3237 20.8737 7.9655C20.5612 7.50861 20.341 7.4156 19.5423 7.2495C18.6678 7.039 17.5814 6.9995 16 7C14.4186 6.9995 13.3322 7.039 12.4577 7.2495C11.659 7.4156 11.4388 7.50861 11.1263 7.9655C10.8408 8.3237 10.5283 8.9933 10.3105 10.3453C10.0829 11.7386 9.99945 13.5273 10 16V16.0508C10.0005 18.4973 10.0845 20.2709 10.3105 21.6547C10.5283 23.0067 10.8408 23.6763 11.1263 24.0345C11.4388 24.4914 11.659 24.5844 12.4577 24.7505C13.3322 24.961 14.4186 25.0005 16 25Z"/><path d="M13 9C13 8.448 13.448 8 14 8H18C18.552 8 19 8.448 19 9C19 9.552 18.552 10 18 10H14C13.448 10 13 9.552 13 9Z"/></svg> Android Playable

<div class="horizons-guide bg-section">
<p class="bg-intro">An Android app: APK or AAB.</p>
<h3 class="bg-heading">How reviewers install it</h3>
<ul class="bg-checklist">
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">GitHub Release APK</span><span class="bg-note">Trusted distribution path with version tags; what reviewers expect.</span></span></li>
<li class="bg-check bg-check-bad"><span class="bg-mark">✗</span><span class="bg-check-body"><span class="bg-label">Google Drive APK</span><span class="bg-note">Drive triggers "scan for harmful files" warnings, throttles big downloads, and can revoke the link. Use a GitHub Release for the APK.</span></span></li>
<li class="bg-check bg-check-meh"><span class="bg-mark">−</span><span class="bg-check-body"><span class="bg-label">Play Store upload</span><span class="bg-note">Great if you already have it set up, but the $25 developer fee plus review wait is not required for Horizons. A GitHub Release APK is enough.</span></span></li>
</ul>
<h3 class="bg-heading">Steps</h3>
<ol class="bg-steps">
<li><span class="bg-step-num">1</span><span>Build a release APK. Signed with a debug key is fine for review.</span></li>
<li><span class="bg-step-num">2</span><span>Upload the APK to a GitHub Release.</span></li>
<li><span class="bg-step-num">3</span><span>Put the APK link in Demo URL and your repo in Code URL.</span></li>
<li><span class="bg-step-num">4</span><span>In your README, list the minSdk and any permissions the app requests.</span></li>
<li><span class="bg-step-num">5</span><span>Mention "install from unknown sources" must be allowed. This is normal for sideloading.</span></li>
</ol>
<h3 class="bg-heading">Common rejection reasons</h3>
<ul class="bg-rejections">
<li class="bg-rejection"><span class="bg-rejection-count">×2</span><span class="bg-rejection-text">README is AI-written or missing screenshots, motivation, and details</span></li>
</ul>
<div class="bg-callout bg-callout-tip"><ul class="bg-callout-list"><li>Record a short screen capture of the app running and link it from the README.</li></ul></div>
</div>

## <svg class="bg-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M9 18H11.1906L14.8453 11.6699L14.134 10.4379C13.8578 9.95957 14.0217 9.34798 14.5 9.07184C14.9783 8.7957 15.5899 8.95957 15.866 9.43787L16 9.6699L16.134 9.43783C16.4101 8.95954 17.0217 8.79567 17.5 9.07181C17.9783 9.34795 18.1422 9.95954 17.866 10.4378L13.5 18H17.3458L18.5005 20H9C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18Z"/><path d="M21.9641 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18H20.8094L17.7315 12.6689L16.5768 14.6689L21.134 22.5622C21.4101 23.0405 22.0217 23.2044 22.5 22.9282C22.9783 22.6521 23.1422 22.0405 22.866 21.5622L21.9641 20Z"/><path d="M9.13396 21.5622C8.85782 22.0405 9.02169 22.6521 9.49998 22.9282C9.97828 23.2044 10.5899 23.0405 10.866 22.5622L11.7679 21H9.45854L9.13396 21.5622Z"/><path d="M16 4C26 4 28 6 28 16C28 26 26 28 16 28C6 28 4 26 4 16C4 6 6 4 16 4ZM24.336 7.665C23.247 6.576 21.1 6 16 6C10.9 6 8.753 6.576 7.664 7.665C6.575 8.753 6 10.9 6 16C6 21.1 6.575 23.247 7.664 24.336C8.753 25.425 10.9 26 16 26C21.1 26 23.247 25.425 24.336 24.336C25.425 23.247 26 21.1 26 16C26 10.9 25.425 8.754 24.336 7.665Z"/></svg> iOS Playable

<div class="horizons-guide bg-section">
<p class="bg-intro">An iOS app. The trickiest to ship because Apple doesn't allow easy sideloading. A demo video linked in your README is always required, no exceptions.</p>
<h3 class="bg-heading">How reviewers see it</h3>
<ul class="bg-checklist">
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Demo video linked in README</span><span class="bg-note">Required for every iOS submission. Reviewers can't install unsigned builds, so the video is the only way they see your app working.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Reproducible Xcode project</span><span class="bg-note">Required alongside the video: reviewers clone, open in Xcode, run on Simulator to verify the code matches what's in the video.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">TestFlight invite</span><span class="bg-note">Nice extra if you have it set up; lets reviewers test on real hardware. Does not replace the README demo video.</span></span></li>
<li class="bg-check bg-check-bad"><span class="bg-mark">✗</span><span class="bg-check-body"><span class="bg-label">Just an .ipa link</span><span class="bg-note">Useless without a paid Dev cert; reviewers can't install unsigned builds.</span></span></li>
</ul>
<h3 class="bg-heading">Steps</h3>
<ol class="bg-steps">
<li><span class="bg-step-num">1</span><span>Record a screen capture or device video showing the app running, and host it (YouTube, Vimeo, direct link).</span></li>
<li><span class="bg-step-num">2</span><span>Embed (or link to) that video in your README. This is required for every iOS ship.</span></li>
<li><span class="bg-step-num">3</span><span>Push the full Xcode project to a public GitHub repo.</span></li>
<li><span class="bg-step-num">4</span><span>Write README build instructions: clone, open in Xcode, run on Simulator.</span></li>
<li><span class="bg-step-num">5</span><span>Use Demo URL for the same video link.</span></li>
<li><span class="bg-step-num">6</span><span>TestFlight is a nice extra but the README video + reproducible Xcode project is the required path.</span></li>
</ol>
<div class="bg-callout bg-callout-tip"><ul class="bg-callout-list"><li>iOS Simulator is fine for review. No physical device needed.</li><li>Make sure the project builds without a paid Apple Dev account (no signing-required entitlements).</li></ul></div>
</div>

## <svg class="bg-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M 14 2C 14 2.74028 13.5978 3.38663 13 3.73244L 13 6L 11 6L 11 3.73244C 10.4022 3.38663 10 2.74028 10 2C 10 0.895432 10.8954 0 12 0C 13.1046 0 14 0.895432 14 2ZM 11 7.00577L 11 7L 13 7L 13 7.00577C 22.1347 7.11594 24 8.8546 24 16.5C 24 24.4167 22 26 12 26C 2 26 0 24.4167 0 16.5C 0 8.8546 1.8653 7.11594 11 7.00577ZM 5.5 17C 6.32843 17 7 16.3284 7 15.5C 7 14.6716 6.32843 14 5.5 14C 4.67157 14 4 14.6716 4 15.5C 4 16.3284 4.67157 17 5.5 17ZM 18.5 17C 19.3284 17 20 16.3284 20 15.5C 20 14.6716 19.3284 14 18.5 14C 17.6716 14 17 14.6716 17 15.5C 17 16.3284 17.6716 17 18.5 17ZM 12.0008 21C 13.9558 21 15.6185 19.7531 15.9905 18.0909C 16.176 17.262 13.597 17 12.0011 17C 10.4053 17 7.80522 17.1678 8.01158 18.0909C 8.38356 19.7531 10.0457 21 12.0008 21Z" transform="translate(4 2)"/></svg> Hardware

<div class="horizons-guide bg-section">
<p class="bg-intro">A physical project: PCB, electronics, robot, sensor rig, enclosure. It also can be a hardware design that hasn't been built yet. (We encourage you to build it, you can use the hardware grants in the shop.)</p>

<h3 class="bg-heading">What goes in the repo</h3>

<ul class="bg-checklist">
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Schematic PDF</span><span class="bg-note">Lets reviewers quickly understand your circuit without installing CAD software.</span></span></li>

<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Board files (KiCad / EasyEDA), or full schematic for non-PCB projects</span><span class="bg-note">Source files prove you designed the hardware and let others remix or manufacture it.</span></span></li>

<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Bill of Materials</span><span class="bg-note">Shows what parts are required and the approximate cost of reproducing the design.</span></span></li>

<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Firmware source (if applicable)</span><span class="bg-note">Include the code needed to program and test your hardware.</span></span></li>

<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Photos of the assembled build (if built)</span><span class="bg-note">Build photos are encouraged, but not required. Design-only hardware projects are fully acceptable.</span></span></li>

<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Gerbers (if PCB designed)</span><span class="bg-note">Manufacturing files make your PCB fully reproducible.</span></span></li>

<li class="bg-check bg-check-bad"><span class="bg-mark">✗</span><span class="bg-check-body"><span class="bg-label">Only screenshots or renders</span><span class="bg-note">Your repository must include the original design source (schematics, CAD files, firmware, etc.), not just images.</span></span></li>
</ul>

<h3 class="bg-heading">Steps</h3>

<ol class="bg-steps">
<li><span class="bg-step-num">1</span><span>Push your schematics, board files, firmware (if any), and Bill of Materials to GitHub.</span></li>

<li><span class="bg-step-num">2</span><span>Export your schematic and PCB layout as PDFs or PNGs so reviewers can inspect them without installing CAD software.</span></li>

<li><span class="bg-step-num">3</span><span>Write a <strong>Steps to Reproduce</strong> section in your README explaining how someone can manufacture, assemble, flash, and test the project.</span></li>

<li><span class="bg-step-num">4</span><span>Include a complete Bill of Materials with quantities, important part numbers, and approximate costs.</span></li>

<li><span class="bg-step-num">5</span><span>Commit your work frequently. Many small commits help reviewers understand how your project evolved.</span></li>

<li><span class="bg-step-num">6</span><span>Track your work using <a href="https://lapse.hackclub.com" target="_blank" rel="noopener">lapse.hackclub.com</a>. Lapse now supports both traditional recordings and <a href="https://lookout.hackclub.com" target="_blank" rel="noopener">Lookout</a> by simply choosing the Desktop mode in lapse, so if you prefer using Lookout, you can now have your recordings synced with your Hackatime project. Include your recording links in your <code>JOURNAL.md</code> file. Other recording methods (such as YouTube videos) are not accepted for time tracking.
</span></li>

<li><span class="bg-step-num">7</span><span>Keep a development journal with entries roughly every session of work.</span></li>

<li><span class="bg-step-num">8</span><span>If you build the project, include photos showing the completed hardware and showing it working. Design-only projects do not require a physical build.</span></li>

<li><span class="bg-step-num">9</span><span>Research time may be tracked, provided it remains a reasonable portion of the project and does not dominate your logged hours.</span></li>

<li><span class="bg-step-num">10</span><span>You may design a zine page for your project. Up to <strong>30%</strong> of your project's tracked time may be counted towards the zine page or any other graphic design work.</span></li>

<li><span class="bg-step-num">11</span><span>Document what your project does, flashing instructions (if applicable), and any important safety notes such as LiPo batteries, mains voltage, or lasers.</span></li>
</ol>

<div class="bg-callout bg-callout-tip">
<ul class="bg-callout-list">
<li>Design-only hardware projects are welcome. Building the hardware is optional, but all design source files must be included.</li>
<li>A complete Bill of Materials is required so reviewers can understand the project and reproduce it.</li>
<li>Use <strong>Lapse</strong> for all tracked work. Lapse now supports <strong>Lookout</strong>, allowing Lookout recordings to be synced with your Hackatime project. Include your recording links in <code>JOURNAL.md</code>.</li>
<li>Research and documentation are valid project work when they directly support your build, but they should not make up the majority of your tracked time.</li>
<li>Zine page design is encouraged, but only up to <strong>30%</strong> of your project's original tracked time may count toward it.</li>
</ul>
</div>
</div>

## <svg class="bg-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M27.7122 10.9133C27.2139 10.9739 26.6459 11 26 11C25.8982 11 25.7984 10.9994 25.7004 10.998C25.8986 12.2382 26 13.8588 26 16C26 18.141 25.8987 19.7616 25.7005 21.002C25.7984 21.0006 25.8982 21 26 21C26.6459 21 27.2139 21.0261 27.7122 21.0867C27.92 19.679 28 17.9994 28 16C28 14.0006 27.92 12.321 27.7122 10.9133ZM21.0867 27.7122C21.0261 27.2139 21 26.6459 21 26C21 25.8982 21.0006 25.7984 21.002 25.7005C19.7616 25.8987 18.141 26 16 26C13.859 26 12.2384 25.8987 10.998 25.7005C10.9994 25.7984 11 25.8982 11 26C11 26.6459 10.9739 27.2139 10.9133 27.7122C12.321 27.92 14.0006 28 16 28C17.9994 28 19.679 27.92 21.0867 27.7122ZM6 16C6 18.141 6.10134 19.7616 6.2995 21.002C6.20158 21.0006 6.10176 21 6 21C5.35406 21 4.78608 21.0261 4.28781 21.0867C4.07995 19.679 4 17.9994 4 16C4 14.0006 4.07995 12.321 4.28781 10.9133C4.78608 10.9739 5.35406 11 6 11C6.10176 11 6.20159 10.9994 6.29951 10.998C6.10134 12.2383 6 13.8589 6 16ZM21.0867 4.28781C19.679 4.07995 17.9994 4 16 4C14.0006 4 12.321 4.07995 10.9133 4.28781C10.9739 4.78608 11 5.35406 11 6C11 6.10189 10.9994 6.20184 10.998 6.29988C12.2384 6.10151 13.859 6 16 6C18.141 6 19.7616 6.10151 21.002 6.29988C21.0006 6.20184 21 6.10189 21 6C21 5.35406 21.0261 4.78609 21.0867 4.28781Z"/><path d="M30 6C30 8.007 29.725 8.861 29.293 9.293C28.861 9.725 28.007 10 26 10C23.993 10 23.139 9.725 22.707 9.293C22.275 8.861 22 8.007 22 6C22 3.993 22.275 3.139 22.707 2.707C23.139 2.275 23.993 2 26 2C28.007 2 28.861 2.275 29.293 2.707C29.725 3.139 30 3.993 30 6Z"/><path d="M30 26C30 28.007 29.725 28.861 29.293 29.293C28.861 29.725 28.007 30 26 30C23.993 30 23.139 29.725 22.707 29.293C22.275 28.861 22 28.007 22 26C22 23.993 22.275 23.139 22.707 22.707C23.139 22.275 23.993 22 26 22C28.007 22 28.861 22.275 29.293 22.707C29.725 23.139 30 23.993 30 26Z"/><path d="M10 26C10 28.007 9.725 28.861 9.293 29.293C8.861 29.725 8.007 30 6 30C3.993 30 3.139 29.725 2.707 29.293C2.275 28.861 2 28.007 2 26C2 23.993 2.275 23.139 2.707 22.707C3.139 22.275 3.993 22 6 22C8.007 22 8.861 22.275 9.293 22.707C9.725 23.139 10 23.993 10 26Z"/><path d="M10 6C10 8.007 9.725 8.861 9.293 9.293C8.861 9.725 8.007 10 6 10C3.993 10 3.139 9.725 2.707 9.293C2.275 8.861 2 8.007 2 6C2 3.993 2.275 3.139 2.707 2.707C3.139 2.275 3.993 2 6 2C8.007 2 8.861 2.275 9.293 2.707C9.725 3.139 10 3.993 10 6Z"/></svg> CAD Models

<div class="horizons-guide bg-section">
<p class="bg-intro">Designs whose deliverable is a CAD file: 3D-printed parts, laser-cut designs, or mechanical assemblies. Review takes longer for this category because reviewers physically reproduce the design (printing, cutting, assembling), so the bar for documentation and reproducibility is higher than for software submissions.</p>
<h3 class="bg-heading">File formats</h3>
<ul class="bg-checklist">
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Slicer-ready export (.stl / .3mf, or .dxf for laser cut)</span><span class="bg-note">Required. This is the file reviewers drop straight into a slicer or laser-cutter workflow to reproduce your design.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">STEP source (.step / .stp)</span><span class="bg-note">Universal interchange format that stays fully editable in any CAD tool.</span></span></li>
<li class="bg-check bg-check-good"><span class="bg-mark">✓</span><span class="bg-check-body"><span class="bg-label">Native CAD source (.f3d, .scad, .ipt, .blend)</span><span class="bg-note">Commit alongside the slicer-ready export so the design remains editable and remixable.</span></span></li>
<li class="bg-check bg-check-bad"><span class="bg-mark">✗</span><span class="bg-check-body"><span class="bg-label">Source files only, with no slicer-ready export</span><span class="bg-note">Reviewers cannot open .blend, .f3d, or similar source files in a slicer. Without an .stl, .3mf, or .dxf export the design cannot be reproduced.</span></span></li>
</ul>
<h3 class="bg-heading">Steps</h3>
<ol class="bg-steps">
<li><span class="bg-step-num">1</span><span>Commit a slicer-ready export (.stl or .3mf for 3D printing, .dxf for laser cutting). This is the file reviewers will actually use to reproduce your design.</span></li>
<li><span class="bg-step-num">2</span><span>Commit the native CAD source alongside it so the design remains editable and remixable.</span></li>
<li><span class="bg-step-num">3</span><span>Write a detailed README. Document all production settings that apply to your process: layer height, infill, supports, orientation, material, and kerf.</span></li>
<li><span class="bg-step-num">4</span><span>Provide assembly instructions for any multi-part design. A labelled exploded view, photo sequence, or short build video are all acceptable.</span></li>
<li><span class="bg-step-num">5</span><span>For mechanisms, prefer 3D-printed components over fasteners. Where fasteners are unavoidable, specify standard sizes (for example M3 or M4) so reviewers can source them.</span></li>
<li><span class="bg-step-num">6</span><span>Commit progress regularly. Aim for roughly one commit per hour of work so reviewers can see the design evolve rather than appear in a single dump.</span></li>
<li><span class="bg-step-num">7</span><span>Add 2 to 3 renders to the README and a photograph of the physical result next to the digital model. Use Demo URL for an exploded view or turntable video.</span></li>
</ol>
<div class="bg-callout bg-callout-tip"><ul class="bg-callout-list"><li>Because CAD reviews require physical reproduction, ship everything a stranger would need to print or cut your project from scratch with no follow-up questions.</li><li>If your CAD tool offers free public sharing (Onshape public documents, Fusion 360 web viewer), link that as well.</li></ul></div>
</div>

## <svg class="bg-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 6C21.1 6 23.247 6.576 24.336 7.665C25.425 8.754 26 10.9 26 16C26 21.1 25.425 23.247 24.336 24.336C23.247 25.425 21.1 26 16 26C10.9 26 8.753 25.425 7.664 24.336C6.575 23.247 6 21.1 6 16C6 10.9 6.575 8.753 7.664 7.665C8.753 6.576 10.9 6 16 6ZM28 16C28 6 26 4 16 4C6 4 4 6 4 16C4 26 6 28 16 28C26 28 28 26 28 16Z"/><circle cx="21" cy="11" r="2.5"/><circle cx="16" cy="16" r="2.5"/><circle cx="11" cy="21" r="2.5"/></svg> Other / Not Sure

<div class="horizons-guide bg-section">
<p class="bg-intro">For projects that don't fit any of the categories above. The bar here is simple: write a good README, and if you aren't sure your project is shippable, ask in #horizons-help on Hack Club Slack before submitting.</p>
<h3 class="bg-heading">Steps</h3>
<ol class="bg-steps">
<li><span class="bg-step-num">1</span><span>Write a detailed README that clearly explains what the project is, how it works, and how a stranger would experience it.</span></li>
<li><span class="bg-step-num">2</span><span>If you aren't sure the project qualifies, post a quick description in #horizons-help on Hack Club Slack and a reviewer will let you know before you ship.</span></li>
</ol>
</div>
